# Upload poster images to Cloudinary
$posterFolder = "C:\Users\pranava\StaticPage\StaticPage\Poster"
$cloudName = "dwmcugijh"
$uploadPreset = "static_page"
$uploadUrl = "https://api.cloudinary.com/v1_1/$cloudName/upload"

$posters = @{
    "me.png" = "me"
    "us.png" = "us"
}

$cloudinaryUrls = @{}

foreach ($posterFile in $posters.Keys) {
    $filePath = Join-Path $posterFolder $posterFile
    $posterType = $posters[$posterFile]
    
    if (-not (Test-Path $filePath)) {
        Write-Host "[ERROR] Poster not found: $filePath" -ForegroundColor Red
        continue
    }
    
    $file = Get-Item $filePath
    Write-Host "[INFO] Uploading poster: $($file.Name) ($([Math]::Round($file.Length/1KB, 2)) KB)" -ForegroundColor Cyan
    
    # Prepare multipart form data
    $boundary = [System.Guid]::NewGuid().ToString()
    $body = [System.IO.MemoryStream]::new()
    $writer = [System.IO.StreamWriter]::new($body)
    
    # Add upload_preset field
    $writer.Write("--$boundary`r`n")
    $writer.Write("Content-Disposition: form-data; name=`"upload_preset`"`r`n`r`n")
    $writer.Write("$uploadPreset`r`n")
    $writer.Flush()
    
    # Add public_id to organize in folder
    $writer.Write("--$boundary`r`n")
    $writer.Write("Content-Disposition: form-data; name=`"public_id`"`r`n`r`n")
    $writer.Write("posters/$posterType`r`n")
    $writer.Flush()
    
    # Add file
    $writer.Write("--$boundary`r`n")
    $writer.Write("Content-Disposition: form-data; name=`"file`"; filename=`"$($file.Name)`"`r`n")
    $writer.Write("Content-Type: image/png`r`n`r`n")
    $writer.Flush()
    
    # Write file bytes
    $fileBytes = [System.IO.File]::ReadAllBytes($filePath)
    $body.Write($fileBytes, 0, $fileBytes.Length)
    $writer.Write("`r`n")
    $writer.Flush()
    
    # End boundary
    $writer.Write("--$boundary--`r`n")
    $writer.Flush()
    
    # Upload
    $bodyBytes = $body.ToArray()
    $body.Close()
    $writer.Close()
    
    Write-Host "[UPLOAD] Uploading $posterType poster..." -ForegroundColor Yellow
    
    try {
        $response = Invoke-WebRequest -Uri $uploadUrl `
            -Method POST `
            -Body $bodyBytes `
            -ContentType "multipart/form-data; boundary=$boundary" `
            -UseBasicParsing
        
        if ($response.StatusCode -eq 200) {
            $result = $response.Content | ConvertFrom-Json
            $cloudinaryUrls[$posterType] = $result.secure_url
            Write-Host "[OK] Uploaded!" -ForegroundColor Green
            Write-Host "URL: $($result.secure_url)" -ForegroundColor Cyan
        } else {
            Write-Host "[ERROR] Upload failed: $($response.StatusCode)" -ForegroundColor Red
        }
    }
    catch {
        Write-Host "[ERROR] Upload error: $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Poster URLs for script.js:" -ForegroundColor Green
$cloudinaryUrls | Format-Table -AutoSize

# Save for reference
$cloudinaryUrls | ConvertTo-Json | Out-File "poster-cloudinary-urls.json" -Encoding UTF8
Write-Host "Also saved to: poster-cloudinary-urls.json" -ForegroundColor Cyan
