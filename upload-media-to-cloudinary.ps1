# CLOUDINARY BATCH MEDIA UPLOAD SCRIPT
# Uploads media from Final/ folder to Cloudinary

param(
    [string]$CloudName = "dwmcugijh",
    [string]$UploadPreset = "static_page",
    [string]$MediaPath = ""
)

$Green = "Green"
$Red = "Red"
$Yellow = "Yellow"
$Cyan = "Cyan"

function Write-Header {
    Write-Host "============================================" -ForegroundColor $Cyan
    Write-Host "CLOUDINARY BATCH MEDIA UPLOAD SCRIPT" -ForegroundColor $Cyan
    Write-Host "============================================" -ForegroundColor $Cyan
}

function Read-Config {
    Write-Host "`nCloudinary Configuration:`n"
    
    if ([string]::IsNullOrEmpty($MediaPath)) {
        $defaultPath = (Get-Location).Path
        Write-Host "Default path: $defaultPath`n"
        $MediaPath = Read-Host "Enter path to codebase folder (or press Enter for default)"
        
        if ([string]::IsNullOrEmpty($MediaPath)) {
            $MediaPath = $defaultPath
        }
    }
    
    if (-not (Test-Path $MediaPath)) {
        Write-Host "ERROR: Media path does not exist: $MediaPath" -ForegroundColor $Red
        exit 1
    }
    
    $finalPath = Join-Path $MediaPath "Final"
    if (-not (Test-Path $finalPath)) {
        Write-Host "ERROR: Final folder not found at: $finalPath" -ForegroundColor $Red
        exit 1
    }
    
    $script:MediaPath = $finalPath
    $script:CloudName = $CloudName
    $script:UploadPreset = $UploadPreset
    
    Write-Host "Configuration loaded successfully" -ForegroundColor $Green
    Write-Host "  Cloud Name: $script:CloudName" -ForegroundColor $Cyan
    Write-Host "  Upload Preset: $script:UploadPreset" -ForegroundColor $Cyan
    Write-Host "  Media Path: $script:MediaPath" -ForegroundColor $Cyan
}

function Get-MediaFiles {
    param([string]$FolderPath)
    
    $supportedExtensions = @("*.jpg", "*.jpeg", "*.png", "*.gif", "*.webp", "*.mp4", "*.mov", "*.avi", "*.webm", "*.mkv")
    $files = @()
    
    foreach ($ext in $supportedExtensions) {
        $files += Get-ChildItem -Path $FolderPath -Filter $ext -Recurse -File
    }
    
    return $files | Sort-Object DirectoryName, Name
}

function Upload-File {
    param(
        [string]$FilePath,
        [string]$CloudinaryFolder
    )
    
    try {
        $fileName = (Get-Item $FilePath).Name
        $fileSize = (Get-Item $FilePath).Length / 1MB
        $fileSizeRounded = [math]::Round($fileSize, 2)
        
        Write-Host "  Uploading: $fileName ($fileSizeRounded MB)" -ForegroundColor $Cyan
        
        $uploadUrl = "https://api.cloudinary.com/v1_1/$($script:CloudName)/auto/upload"
        $publicId = [System.IO.Path]::GetFileNameWithoutExtension($fileName)
        
        # Create boundary
        $boundary = "----WebKitFormBoundary$([System.Guid]::NewGuid().ToString('n').Substring(0,16))"
        
        # Read file as bytes
        $fileBytes = [System.IO.File]::ReadAllBytes($FilePath)
        
        # Build body parts
        $bodyParts = @()
        
        # Part 1: upload_preset
        $bodyParts += "--$boundary"
        $bodyParts += 'Content-Disposition: form-data; name="upload_preset"'
        $bodyParts += ""
        $bodyParts += $script:UploadPreset
        
        # Part 2: folder
        $bodyParts += "--$boundary"
        $bodyParts += 'Content-Disposition: form-data; name="folder"'
        $bodyParts += ""
        $bodyParts += $CloudinaryFolder
        
        # Part 3: public_id
        $bodyParts += "--$boundary"
        $bodyParts += 'Content-Disposition: form-data; name="public_id"'
        $bodyParts += ""
        $bodyParts += $publicId
        
        # Part 4: file
        $bodyParts += "--$boundary"
        $bodyParts += "Content-Disposition: form-data; name=`"file`"; filename=`"$fileName`""
        $bodyParts += "Content-Type: application/octet-stream"
        $bodyParts += ""
        
        # Convert header parts to bytes
        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes(($bodyParts -join "`r`n") + "`r`n")
        
        # Footer
        $footerBytes = [System.Text.Encoding]::UTF8.GetBytes("`r`n--$boundary--`r`n")
        
        # Combine all into final body
        $ms = New-Object System.IO.MemoryStream
        $ms.Write($headerBytes, 0, $headerBytes.Length)
        $ms.Write($fileBytes, 0, $fileBytes.Length)
        $ms.Write($footerBytes, 0, $footerBytes.Length)
        $body = $ms.ToArray()
        $ms.Close()
        
        # Upload
        $response = Invoke-WebRequest -Uri $uploadUrl `
            -Method POST `
            -ContentType "multipart/form-data; boundary=$boundary" `
            -Body $body `
            -ErrorAction Stop
        
        $result = $response.Content | ConvertFrom-Json
        
        if ($result.secure_url) {
            Write-Host "    SUCCESS" -ForegroundColor $Green
            return @{
                FilePath = $FilePath
                CloudinaryUrl = $result.secure_url
                CloudinaryFolder = $CloudinaryFolder
                RelativePath = "$CloudinaryFolder/$fileName"
            }
        }
    }
    catch {
        Write-Host "    FAILED: $($_.Exception.Message)" -ForegroundColor $Red
        return $null
    }
}

function Main {
    Write-Header
    Read-Config
    
    Write-Host "`n========== STARTING UPLOAD PROCESS ==========" -ForegroundColor $Yellow
    
    $uploadedFiles = @()
    $failedFiles = @()
    $urlMapping = @{
        imageMe = @()
        imageUs = @()
        videoUs = $null
    }
    
    $mediaFolders = @(
        @{
            LocalPath = Join-Path $script:MediaPath "imageMe"
            CloudinaryFolder = "imageMe"
            Type = "Images (Personal)"
            MappingKey = "imageMe"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "imageUs"
            CloudinaryFolder = "imageUs"
            Type = "Images (Couple)"
            MappingKey = "imageUs"
        },
        @{
            LocalPath = Join-Path $script:MediaPath "videoUs"
            CloudinaryFolder = "videoUs"
            Type = "Videos (Couple)"
            MappingKey = "videoUs"
        }
    )
    
    foreach ($folder in $mediaFolders) {
        if (Test-Path $folder.LocalPath) {
            Write-Host "`n[FOLDER] $($folder.Type)" -ForegroundColor $Yellow
            Write-Host "   Local: $($folder.LocalPath)" -ForegroundColor $Cyan
            
            $files = Get-MediaFiles -FolderPath $folder.LocalPath
            
            if ($files.Count -eq 0) {
                Write-Host "   WARNING: No media files found" -ForegroundColor $Yellow
                continue
            }
            
            Write-Host "   Found $($files.Count) file(s)" -ForegroundColor $Cyan
            
            foreach ($file in $files) {
                $relativePath = $file.DirectoryName.Replace($folder.LocalPath, "").TrimStart("\")
                if ($relativePath) {
                    $cloudinaryPath = "$($folder.CloudinaryFolder)/$relativePath"
                } else {
                    $cloudinaryPath = $folder.CloudinaryFolder
                }
                
                $result = Upload-File -FilePath $file.FullName -CloudinaryFolder $cloudinaryPath
                
                if ($result) {
                    $uploadedFiles += $result
                    
                    $fileName = $file.Name
                    $folderName = if ($relativePath) { $relativePath } else { "root" }
                    
                    $fileEntry = @{
                        fileName = $fileName
                        folder = $folderName
                        url = $result.CloudinaryUrl
                        localPath = $relativePath
                    }
                    
                    if ($folder.MappingKey -eq "videoUs") {
                        $urlMapping["videoUs"] = $fileEntry
                    } else {
                        $urlMapping[$folder.MappingKey] += @($fileEntry)
                    }
                } else {
                    $failedFiles += $file.FullName
                }
            }
        }
        else {
            Write-Host "WARNING: Folder not found: $($folder.LocalPath)" -ForegroundColor $Yellow
        }
    }
    
    Write-Host "`n========== UPLOAD COMPLETE ==========" -ForegroundColor $Yellow
    Write-Host "SUCCESS: Uploaded $($uploadedFiles.Count) file(s)" -ForegroundColor $Green
    
    if ($failedFiles.Count -gt 0) {
        Write-Host "FAILED: $($failedFiles.Count) file(s)" -ForegroundColor $Red
    }
    
    if ($uploadedFiles.Count -gt 0) {
        $projectRoot = Split-Path $script:MediaPath -Parent
        $mappingPath = Join-Path $projectRoot "cloudinary-urls-mapping.json"
        
        $mapping = @{
            uploadDate = (Get-Date -Format "yyyy-MM-dd HH:mm:ss")
            cloudName = $script:CloudName
            imageMe = $urlMapping.imageMe
            imageUs = $urlMapping.imageUs
            videoUs = $urlMapping.videoUs
        }
        
        $mapping | ConvertTo-Json -Depth 10 | Set-Content -Path $mappingPath
        Write-Host "`nURL Mapping saved to: $mappingPath" -ForegroundColor $Green
        Write-Host "Use this to update script.js with Cloudinary URLs" -ForegroundColor $Yellow
    }
    
    Write-Host "`nScript completed!" -ForegroundColor $Green
}

Main
