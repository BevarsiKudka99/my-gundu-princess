# ============================================
# CLOUDINARY BATCH MEDIA UPLOAD SCRIPT
# ============================================
# This script uploads all media from local folders to Cloudinary
# and maintains the folder structure automatically

param(
    [string]$CloudName = "",
    [string]$UploadPreset = "",
    [string]$MediaPath = ""
)

# Colors for output
$Green = "Green"
$Red = "Red"
$Yellow = "Yellow"
$Cyan = "Cyan"

function Write-Header {
    Write-Host "============================================" -ForegroundColor $Cyan
    Write-Host "  CLOUDINARY BATCH MEDIA UPLOAD SCRIPT" -ForegroundColor $Cyan
    Write-Host "============================================" -ForegroundColor $Cyan
}

function Read-Config {
    Write-Host "`nEnter your Cloudinary credentials:`n"
    
    if ([string]::IsNullOrEmpty($CloudName)) {
        $script:CloudName = Read-Host "Enter your Cloudinary Cloud Name"
    }
    
    if ([string]::IsNullOrEmpty($UploadPreset)) {
        $script:UploadPreset = Read-Host "Enter your Upload Preset name"
    }
    
    if ([string]::IsNullOrEmpty($MediaPath)) {
        $script:MediaPath = Read-Host "Enter the path to your media folder (e.g., C:\Users\pranava\StaticPage\StaticPage)"
    }
    
    # Validate paths
    if (-not (Test-Path $script:MediaPath)) {
        Write-Host "ERROR: Media path does not exist: $($script:MediaPath)" -ForegroundColor $Red
        exit 1
    }
    
    Write-Host "`n✓ Configuration loaded successfully" -ForegroundColor $Green
}

function Get-MediaFiles {
    param([string]$FolderPath)
    
    $supportedExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp", "*.mp4", "*.mov", "*.avi", "*.webm", "*.mkv")
    $files = @()
    
    foreach ($ext in $supportedExtensions) {
        $files += Get-ChildItem -Path $FolderPath -Filter $ext -Recurse -File
    }
    
    return $files
}

function Upload-File {
    param(
        [string]$FilePath,
        [string]$CloudinaryFolder
    )
    
    try {
        $fileName = (Get-Item $FilePath).Name
        $fileSize = (Get-Item $FilePath).Length / 1MB
        
        Write-Host "  Uploading: $fileName ($([math]::Round($fileSize, 2)) MB)" -ForegroundColor $Cyan
        
        # Prepare upload URL
        $uploadUrl = "https://api.cloudinary.com/v1_1/$($script:CloudName)/auto/upload"
        
        # Upload with folder structure
        $uploadParams = @{
            file = $FilePath
            upload_preset = $script:UploadPreset
            folder = $CloudinaryFolder
            public_id = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
        }
        
        # Use Invoke-WebRequest for upload
        $response = Invoke-WebRequest -Uri $uploadUrl `
            -Method POST `
            -Form $uploadParams `
            -ErrorAction Stop
        
        $result = $response.Content | ConvertFrom-Json
        
        if ($result.secure_url) {
            Write-Host "    ✓ Success" -ForegroundColor $Green
            return @{
                FilePath = $FilePath
                CloudinaryUrl = $result.secure_url
                CloudinaryFolder = $CloudinaryFolder
                RelativePath = "$CloudinaryFolder/$fileName"
            }
        }
    }
    catch {
        Write-Host "    ✗ Failed: $($_.Exception.Message)" -ForegroundColor $Red
        return $null
    }
}

function Main {
    Write-Header
    Read-Config
    
    Write-Host "`n========== STARTING UPLOAD PROCESS ==========" -ForegroundColor $Yellow
    
    $uploadedFiles = @()
    $failedFiles = @()
    
    # Define media folders to process
    $mediaFolders = @(
        @{
            LocalPath = Join-Path $script:MediaPath "imagesUs"
            CloudinaryFolder = "imagesUs"
            Type = "Images (Couple)"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "imagesMe"
            CloudinaryFolder = "imagesMe"
            Type = "Images (Personal)"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "videosUs"
            CloudinaryFolder = "videosUs"
            Type = "Videos (Couple)"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "videosMe"
            CloudinaryFolder = "videosMe"
            Type = "Videos (Personal)"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "Logos"
            CloudinaryFolder = "Logos"
            Type = "Logos"
        }
    )
    
    # Process each media folder
    foreach ($folder in $mediaFolders) {
        if (Test-Path $folder.LocalPath) {
            Write-Host "`n📁 Processing: $($folder.Type)" -ForegroundColor $Yellow
            Write-Host "   Local: $($folder.LocalPath)" -ForegroundColor $Cyan
            
            $files = Get-MediaFiles -FolderPath $folder.LocalPath
            
            if ($files.Count -eq 0) {
                Write-Host "   ⚠ No media files found" -ForegroundColor $Yellow
                continue
            }
            
            Write-Host "   Found $($files.Count) file(s)`n" -ForegroundColor $Cyan
            
            # Upload each file
            foreach ($file in $files) {
                # Construct cloudinary folder path maintaining subfolder structure
                $relativePath = $file.DirectoryName.Replace($folder.LocalPath, "").TrimStart("\")
                if ($relativePath) {
                    $cloudinaryPath = "$($folder.CloudinaryFolder)/$relativePath"
                } else {
                    $cloudinaryPath = $folder.CloudinaryFolder
                }
                
                $result = Upload-File -FilePath $file.FullName -CloudinaryFolder $cloudinaryPath
                
                if ($result) {
                    $uploadedFiles += $result
                } else {
                    $failedFiles += $file.FullName
                }
            }
        }
        else {
            Write-Host "⚠ Folder not found: $($folder.LocalPath)" -ForegroundColor $Yellow
        }
    }
    
    # Generate report
    Write-Host "`n========== UPLOAD COMPLETE ==========" -ForegroundColor $Yellow
    Write-Host "✓ Successfully uploaded: $($uploadedFiles.Count) file(s)" -ForegroundColor $Green
    
    if ($failedFiles.Count -gt 0) {
        Write-Host "✗ Failed: $($failedFiles.Count) file(s)" -ForegroundColor $Red
    }
    
    # Save URLs to file
    if ($uploadedFiles.Count -gt 0) {
        $reportPath = Join-Path $script:MediaPath "cloudinary-upload-report.json"
        $report = @{
            uploadDate = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
            cloudName = $script:CloudName
            totalFiles = $uploadedFiles.Count
            files = $uploadedFiles
        }
        
        $report | ConvertTo-Json | Set-Content -Path $reportPath
        Write-Host "`n📄 Report saved to: $reportPath" -ForegroundColor $Green
        
        # Also create a CSV for easy viewing
        $csvPath = Join-Path $script:MediaPath "cloudinary-urls.csv"
        $uploadedFiles | Select-Object @{Name="Local Path"; Expression={$_.FilePath}}, `
                                       @{Name="Relative Path"; Expression={$_.RelativePath}}, `
                                       @{Name="Cloudinary URL"; Expression={$_.CloudinaryUrl}} | 
        Export-Csv -Path $csvPath -NoTypeInformation
        Write-Host "📊 URL list saved to: $csvPath" -ForegroundColor $Green
    }
    
    Write-Host "`n✓ Script completed!`n" -ForegroundColor $Green
}

# Run main function
Main
