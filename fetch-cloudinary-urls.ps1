param([string]$CloudName = "dwmcugijh", [string]$ApiKey = "317615391541624", [string]$ApiSecret = "gv9ox2-ZLM97gYjX5NQDzxh1ujA")

Write-Host "Fetching resources from Cloudinary..." -ForegroundColor Cyan

$creds = [Convert]::ToBase64String([System.Text.Encoding]::ASCII.GetBytes("$ApiKey`:$ApiSecret"))
$headers = @{Authorization = "Basic $creds"}

$allResources = @()

foreach ($rtype in @("image", "video")) {
    Write-Host "  Fetching $rtype resources..." -ForegroundColor Cyan
    $cursor = $null
    $page = 0
    
    do {
        $page++
        $url = "https://api.cloudinary.com/v1_1/$CloudName/resources/$rtype`?max_results=500"
        if ($cursor) { $url += "&next_cursor=$cursor" }
        
        try {
            $resp = Invoke-RestMethod -Uri $url -Headers $headers -Method Get -ErrorAction Stop
            if ($resp.resources) { $allResources += $resp.resources }
            Write-Host "    Page $page`: $($resp.resources.Count) items" -ForegroundColor Cyan
            $cursor = $resp.next_cursor
        } catch {
            Write-Host "ERROR: $_" -ForegroundColor Red
            exit 1
        }
    } while ($cursor)
}

Write-Host "Found $($allResources.Count) resources" -ForegroundColor Green

Write-Host "Organizing by folder..." -ForegroundColor Cyan
$byFolder = @{}

foreach ($res in $allResources) {
    $fld = if ($res.folder) { $res.folder } else { "root" }
    if (-not $byFolder[$fld]) { $byFolder[$fld] = @() }
    $byFolder[$fld] += $res
}

Write-Host "  Organized into $($byFolder.Count) folders" -ForegroundColor Green

Write-Host "Generating output..." -ForegroundColor Cyan

$out = "// Cloudinary URLs - Generated $(Get-Date)`n`n"
$out += "const URLS = {`n"

$count = 0
foreach ($f in $byFolder.Keys) {
    $items = @($byFolder[$f])
    if ($items.Count -gt 0) {
        $out += "  '$f': [`n"
        foreach ($item in $items) {
            $out += "    { url: '$($item.secure_url)', name: '$($item.filename)', type: '$($item.resource_type)' },`n"
            $count++
        }
        $out += "  ],`n"
    }
}

$out += "}`n"

$out | Out-File "cloudinary-urls.js" -Force
Write-Host "Success! Saved $count items to cloudinary-urls.js" -ForegroundColor Green
