# Upload single video to Cloudinary
$videoPath = "C:\Users\pranava\StaticPage\StaticPage\videosUs\video.mp4"
$cloudName = "dwmcugijh"
$uploadPreset = "static_page"
$uploadUrl = "https://api.cloudinary.com/v1_1/$cloudName/upload"

# Check if file exists
if (-not (Test-Path $videoPath)) {
    Write-Host "[ERROR] Video not found: $videoPath" -ForegroundColor Red
    exit 1
}

$file = Get-Item $videoPath
Write-Host "[INFO] Uploading video: $($file.Name) ($([Math]::Round($file.Length/1MB, 2)) MB)" -ForegroundColor Cyan

# Prepare multipart form data
$boundary = [System.Guid]::NewGuid().ToString()
$body = [System.IO.MemoryStream]::new()
$writer = [System.IO.StreamWriter]::new($body)

# Add upload_preset field
$writer.Write("--$boundary`r`n")
$writer.Write("Content-Disposition: form-data; name=`"upload_preset`"`r`n`r`n")
$writer.Write("$uploadPreset`r`n")
$writer.Flush()

# Add file
$writer.Write("--$boundary`r`n")
$writer.Write("Content-Disposition: form-data; name=`"file`"; filename=`"video.mp4`"`r`n")
$writer.Write("Content-Type: video/mp4`r`n`r`n")
$writer.Flush()

# Write file bytes
$fileBytes = [System.IO.File]::ReadAllBytes($videoPath)
$body.Write($fileBytes, 0, $fileBytes.Length)
$writer.Write("`r`n")
$writer.Flush()

# Add resource_type
$writer.Write("--$boundary`r`n")
$writer.Write("Content-Disposition: form-data; name=`"resource_type`"`r`n`r`n")
$writer.Write("video`r`n")
$writer.Flush()

# Add folder
$writer.Write("--$boundary`r`n")
$writer.Write("Content-Disposition: form-data; name=`"folder`"`r`n`r`n")
$writer.Write("videosUs`r`n")
$writer.Flush()

# End boundary
$writer.Write("--$boundary--`r`n")
$writer.Flush()

# Upload
$bodyBytes = $body.ToArray()
$body.Close()
$writer.Close()

Write-Host "[FILE] Uploading to Cloudinary..." -ForegroundColor Yellow

try {
    $response = Invoke-WebRequest -Uri $uploadUrl `
        -Method POST `
        -Body $bodyBytes `
        -ContentType "multipart/form-data; boundary=$boundary" `
        -UseBasicParsing
    
    if ($response.StatusCode -eq 200) {
        $result = $response.Content | ConvertFrom-Json
        Write-Host "[OK] Upload successful!" -ForegroundColor Green
        Write-Host "URL: $($result.secure_url)" -ForegroundColor Cyan
        Write-Host "Public ID: $($result.public_id)" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Copy this URL for script.js:" -ForegroundColor Green
        Write-Host $result.secure_url
        
        # Save URL to file for easy reference
        $result.secure_url | Out-File "video-cloudinary-url.txt" -Encoding UTF8
        Write-Host ""
        Write-Host "Also saved to: video-cloudinary-url.txt" -ForegroundColor Cyan
    } else {
        Write-Host "[ERROR] Upload failed with status: $($response.StatusCode)" -ForegroundColor Red
        Write-Host $response.Content
    }
}
catch {
    Write-Host "[ERROR] Upload error: $_" -ForegroundColor Red
    exit 1
}
