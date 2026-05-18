# ============================================
# CLOUDINARY MEDIA UPLOAD & ORGANIZE SCRIPT
# ============================================
# 
# Purpose: Watch a folder for renamed media files and auto-upload to Cloudinary
# Usage: Run in PowerShell -> .\upload-to-cloudinary.ps1
#
# Naming Format: EventName_mediaNumber_yymmdd.ext
# Example: OIA_2_250515.jpeg
#
# ============================================

# CONFIGURATION - UPDATE THESE VALUES
# ============================================
$CLOUDINARY_CLOUD_NAME = "dhdgqeluc"
$CLOUDINARY_UPLOAD_PRESET = "media_gallery"
$MEDIA_WATCH_FOLDER = "C:\Path\To\Your\Media\Uploads"  # Where you place renamed files
$UPLOADED_LOG = "$PSScriptRoot\uploaded-files.txt"

# Event mapping
$eventMapping = @{
    "OIA"       = "OIA"
    "CuteDate"  = "Cute_Date"
    "Sensitive" = "Sensitive"
    "Birthday"  = "Birthday"
}

$supportedFormats = @("jpg", "jpeg", "png", "webp", "gif", "mp4", "mov", "webm")

# ============================================
# FUNCTIONS
# ============================================

function Write-Log {
    param([string]$Message, [string]$Level = "INFO")
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host "[$timestamp] [$Level] $Message"
}

function Parse-MediaFilename {
    param([string]$filename)
    
    # Format: EventName_mediaNumber_yymmdd.ext
    # Example: OIA_2_250515.jpeg
    
    $pattern = "^(.+?)_(\d+)_(\d{6})\.(.+)$"
    
    if ($filename -match $pattern) {
        return @{
            success     = $true
            eventName   = $matches[1]
            mediaNumber = $matches[2]
            date        = $matches[3]  # yymmdd
            extension   = $matches[4]
            fullDate    = "20" + $matches[3]  # Convert to full YYYYMMDD
        }
    } else {
        return @{
            success = $false
            error   = "Filename doesn't match format: EventName_mediaNumber_yymmdd.ext"
        }
    }
}

function Get-CloudinaryFolderPath {
    param([string]$eventName)
    
    if ($eventMapping.ContainsKey($eventName)) {
        return $eventMapping[$eventName]
    } else {
        return $null
    }
}

function Upload-ToCloudinary {
    param(
        [string]$filePath,
        [string]$eventName,
        [string]$mediaDate
    )
    
    Write-Log "Uploading: $([System.IO.Path]::GetFileName($filePath))"
    
    $folderPath = Get-CloudinaryFolderPath $eventName
    if (-not $folderPath) {
        Write-Log "Unknown event: $eventName" "ERROR"
        return $false
    }
    
    try {
        # Prepare Cloudinary upload
        $uploadUrl = "https://api.cloudinary.com/v1_1/$CLOUDINARY_CLOUD_NAME/auto/upload"
        
        # Create form
        $fileItem = Get-Item $filePath
        $form = @{
            file       = $fileItem
            upload_preset = $CLOUDINARY_UPLOAD_PRESET
            folder     = "us/$folderPath"  # us/OIA, us/Cute_Date, etc.
            tags       = "$eventName,$mediaDate"
            context    = "event=$eventName|date=$mediaDate"
        }
        
        # Upload file
        $response = Invoke-RestMethod -Uri $uploadUrl -Method Post -Form $form -ErrorAction Stop
        
        if ($response.secure_url) {
            Write-Log "✓ Successfully uploaded: $($response.secure_url)" "SUCCESS"
            return @{
                success  = $true
                cloudinaryUrl = $response.secure_url
                publicId = $response.public_id
            }
        } else {
            Write-Log "Upload failed: No URL returned" "ERROR"
            return $false
        }
    }
    catch {
        Write-Log "Upload error: $_" "ERROR"
        return $false
    }
}

function Log-UploadedFile {
    param(
        [string]$filename,
        [string]$cloudinaryUrl,
        [string]$publicId
    )
    
    $entry = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss') | $filename | $cloudinaryUrl | $publicId"
    Add-Content -Path $UPLOADED_LOG -Value $entry
}

# ============================================
# MAIN SCRIPT
# ============================================

Write-Log "========================================"
Write-Log "Cloudinary Media Upload Script Started"
Write-Log "========================================"

# Validate configuration
if (-not (Test-Path $MEDIA_WATCH_FOLDER)) {
    Write-Log "Watch folder not found: $MEDIA_WATCH_FOLDER" "ERROR"
    Write-Log "Please update MEDIA_WATCH_FOLDER in the script"
    exit 1
}

if ($CLOUDINARY_CLOUD_NAME -eq "YOUR_CLOUDINARY_CLOUD_NAME") {
    Write-Log "ERROR: Update CLOUDINARY_CLOUD_NAME in script" "ERROR"
    exit 1
}

if ($CLOUDINARY_UPLOAD_PRESET -eq "YOUR_UPLOAD_PRESET") {
    Write-Log "ERROR: Update CLOUDINARY_UPLOAD_PRESET in script" "ERROR"
    exit 1
}

# Create log file if not exists
if (-not (Test-Path $UPLOADED_LOG)) {
    New-Item -Path $UPLOADED_LOG -ItemType File -Force | Out-Null
    Add-Content -Path $UPLOADED_LOG -Value "Timestamp | Filename | Cloudinary URL | Public ID"
    Add-Content -Path $UPLOADED_LOG -Value "-----------|-----------|-----------|----------"
}

Write-Log "Watching folder: $MEDIA_WATCH_FOLDER"
Write-Log "Supported formats: $($supportedFormats -join ', ')"
Write-Log ""

# Watch for new files
$fileSystemWatcher = New-Object System.IO.FileSystemWatcher
$fileSystemWatcher.Path = $MEDIA_WATCH_FOLDER
$fileSystemWatcher.Filter = "*.*"
$fileSystemWatcher.IncludeSubdirectories = $false
$fileSystemWatcher.NotifyFilter = [System.IO.NotifyFilters]::FileName, [System.IO.NotifyFilters]::LastWrite

$onCreated = {
    param($source, $eventArgs)
    
    $filename = $eventArgs.Name
    $filePath = Join-Path $MEDIA_WATCH_FOLDER $filename
    
    # Check if file is fully written (not still being copied)
    Start-Sleep -Milliseconds 500
    
    $extension = [System.IO.Path]::GetExtension($filename).TrimStart('.').ToLower()
    
    if ($extension -notin $supportedFormats) {
        Write-Log "Skipping unsupported format: $filename" "WARN"
        return
    }
    
    Write-Log "New file detected: $filename"
    
    # Parse filename
    $parsed = Parse-MediaFilename $filename
    if (-not $parsed.success) {
        Write-Log "ERROR parsing filename: $($parsed.error)" "ERROR"
        Write-Log "Expected format: EventName_mediaNumber_yymmdd.ext"
        Write-Log "Example: OIA_2_250515.jpeg"
        return
    }
    
    Write-Log "Parsed - Event: $($parsed.eventName), Number: $($parsed.mediaNumber), Date: $($parsed.date)"
    
    # Upload to Cloudinary
    $uploadResult = Upload-ToCloudinary -filePath $filePath -eventName $parsed.eventName -mediaDate $parsed.date
    
    if ($uploadResult -and $uploadResult.success) {
        # Log the upload
        Log-UploadedFile -filename $filename -cloudinaryUrl $uploadResult.cloudinaryUrl -publicId $uploadResult.publicId
        
        # Delete local file after successful upload
        try {
            Remove-Item -Path $filePath -Force
            Write-Log "✓ Local file deleted after upload" "SUCCESS"
        }
        catch {
            Write-Log "Warning: Could not delete local file: $_" "WARN"
        }
    } else {
        Write-Log "Upload failed - file kept in $MEDIA_WATCH_FOLDER for retry" "ERROR"
    }
    
    Write-Log ""
}

# Register event
Register-ObjectEvent -InputObject $fileSystemWatcher -EventName "Created" -Action $onCreated | Out-Null

Write-Log "Watcher started. Press Ctrl+C to stop."
Write-Log ""

# Keep running
try {
    while ($true) {
        Start-Sleep -Seconds 1
    }
} finally {
    $fileSystemWatcher.Dispose()
    Write-Log "Watcher stopped"
}
