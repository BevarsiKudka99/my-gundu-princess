# Cloudinary Setup Guide

## Step 1: Create Free Cloudinary Account

1. Go to: https://cloudinary.com/users/register_free
2. Sign up with email (or Google/GitHub account)
3. Verify email
4. Click "ACTIVATE YOUR FREE ACCOUNT"

## Step 2: Get Your Credentials

After login, you'll see your **Dashboard**:

- **Cloud Name** - Located at top of dashboard (looks like `xyz123abc`)
- Copy this value

## Step 3: Create Upload Preset (Unsigned)

1. Go to: https://cloudinary.com/console/settings/upload
2. Scroll to **"Upload presets"** section
3. Click **"+ Add upload preset"** button
4. Set:
   - **Name**: `media_gallery` (or your choice)
   - **Unsigned**: Toggle **ON** (important!)
   - **Folder**: `us/` (Cloudinary will organize into subfolders)
5. Click **"Save"**

Copy the preset name (usually `media_gallery`)

## Step 4: Update PowerShell Script

Edit `upload-to-cloudinary.ps1` and update:

```powershell
$CLOUDINARY_CLOUD_NAME = "your_cloud_name_here"
$CLOUDINARY_UPLOAD_PRESET = "media_gallery"
$MEDIA_WATCH_FOLDER = "C:\Your\Media\Folder"
```

Example:
```powershell
$CLOUDINARY_CLOUD_NAME = "d5a8b9c0d"
$CLOUDINARY_UPLOAD_PRESET = "media_gallery"
$MEDIA_WATCH_FOLDER = "C:\Users\YourName\Desktop\MediaToUpload"
```

## Step 5: Update Event Config (Optional)

Edit `config.eventMapping.json`:

```json
{
  "cloudinaryCloudName": "your_cloud_name_here",
  "cloudinaryUploadPreset": "media_gallery",
  ...
}
```

## Step 6: Prepare Your Media Folder

1. Create a folder: `C:\Users\YourName\Desktop\MediaToUpload`
2. Place renamed files here with format: `EventName_number_yymmdd.ext`

Examples:
```
OIA_1_250515.jpg
OIA_2_250515.webp
CuteDate_1_250510.jpeg
Sensitive_3_250420.mp4
Birthday_1_260101.png
```

## Step 7: Run the Upload Script

**Option A: Manual Single Run**
```powershell
# Navigate to StaticPage folder
cd C:\Users\pranava\StaticPage

# Run script once
.\upload-to-cloudinary.ps1
```

**Option B: Continuous Watcher (Recommended)**
```powershell
# Keep PowerShell window open
# Script will auto-upload any new files dropped into folder
.\upload-to-cloudinary.ps1

# Press Ctrl+C to stop
```

## Step 8: Verify Uploads in Dashboard

1. Go to: https://cloudinary.com/console/media
2. Check for uploaded files organized by:
   - `us/OIA/`
   - `us/Cute_Date/`
   - `us/Sensitive/`
   - `us/Birthday/`

## How It Works

```
Your Laptop
    ↓
[Drop renamed files in folder]
    ↓
PowerShell script watches folder
    ↓
Parses filename: OIA_2_250515.jpg
    ↓
Extracts: Event=OIA, Number=2, Date=250515
    ↓
Uploads to: us/OIA/
    ↓
Deletes local file (after successful upload)
    ↓
Vercel app fetches from Cloudinary URL
    ↓
Displays on website with zero latency
```

## Troubleshooting

### "Upload folder not found"
- Update `$MEDIA_WATCH_FOLDER` to correct path
- Verify folder exists
- Use full absolute path like `C:\Users\YourName\...`

### "Update CLOUDINARY_CLOUD_NAME"
- Go to https://cloudinary.com/console/settings/general
- Copy Cloud Name
- Update script

### "Update CLOUDINARY_UPLOAD_PRESET"
- Go to https://cloudinary.com/console/settings/upload
- Scroll to "Upload presets"
- Copy preset name
- Must have Unsigned toggle **ON**

### PowerShell Execution Policy Error
If you see error: "cannot be loaded because running scripts is disabled..."

Run this ONCE:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try running script again.

### File Not Uploading
Check:
1. Filename matches format: `EventName_number_yymmdd.ext`
2. Event name exactly matches: OIA, CuteDate, Sensitive, Birthday (case matters!)
3. File format supported: jpg, jpeg, png, webp, gif, mp4, mov, webm
4. Credentials correct in script
5. Check `uploaded-files.txt` log for errors

## Updating Your Website

After files upload to Cloudinary, your Vercel website automatically fetches them:

**For "Us" profile (events view - default now):**
- All 4 events display from Cloudinary
- Images organized by event
- Real-time streaming with CDN speed

## Free Tier Limits

- **Storage**: 25GB
- **Bandwidth**: Unlimited
- **API calls**: 500,000/hour
- **Transformations**: Unlimited

Your 2GB fits easily within limits!

## Next Steps

1. ✅ Create Cloudinary account
2. ✅ Get credentials
3. ✅ Create upload preset
4. ✅ Update script with credentials
5. ✅ Create media folder
6. ✅ Run PowerShell script
7. ✅ Drop renamed files
8. ✅ Watch them auto-upload
9. ✅ View on Vercel website

**Questions?** Check uploaded-files.txt for upload logs and debug info.
