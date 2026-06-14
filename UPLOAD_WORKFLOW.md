# 🚀 CLOUDINARY UPLOAD & DEPLOYMENT GUIDE

## Your Setup
- ✅ Media stored in: `Final/` folder
  - `Final/imageMe/` - Personal images (with subcategories: Baby, Dance, Family, Me)
  - `Final/imageUs/` - Couple images (with subcategories: anniversary, Date night, etc.)
  - `Final/videoUs/` - Main couple video (VN20260613_171108.mp4)
- ✅ Logos stay in: `Logos/` folder (stays in repo)
- ✅ `.gitignore` configured to exclude media folders

---

## 📋 STEP-BY-STEP WORKFLOW

### Step 1: Run Upload Script
```powershell
cd "C:\Users\pranava\StaticPage\StaticPage"
.\upload-media-to-cloudinary.ps1
```

**What it does:**
- Asks you for base path (usually just press Enter to use current directory)
- Uses your pre-configured Cloudinary credentials:
  - Cloud Name: `dwmcugijh`
  - Upload Preset: `static_page`
- Uploads all files from `Final/imageMe/`, `Final/imageUs/`, and `Final/videoUs/`
- **Maintains folder structure** (Baby, Dance, etc. subcategories preserved on Cloudinary)
- Generates `cloudinary-urls-mapping.json` with all upload details

**Expected Output:**
```
========== UPLOAD COMPLETE ==========
✓ Successfully uploaded: [NUMBER] file(s)
📄 URL Mapping saved to: cloudinary-urls-mapping.json
```

---

### Step 2: Generate URLs Reference File
```powershell
.\generate-script-from-urls.ps1
```

**What it does:**
- Reads `cloudinary-urls-mapping.json`
- Creates `cloudinary-urls-list.js` with all Cloudinary URLs organized by category
- Shows you a summary of uploaded files

**Output Example:**
```javascript
const cloudinaryUrls = {
    imageMe: {
        Baby: [
            { name: 'baby_photo_1.jpg', url: 'https://res.cloudinary.com/...' },
            ...
        ],
        Dance: [ ... ],
        Family: [ ... ],
        Me: [ ... ]
    },
    imageUs: {
        anniversary: [ ... ],
        'Date night': [ ... ],
        ...
    },
    videoUs: {
        name: 'VN20260613_171108.mp4',
        url: 'https://res.cloudinary.com/...'
    }
};
```

---

### Step 3: Update script.js (Manual or Semi-Auto)

Your current `script.js` uses placeholder names like:
```javascript
video: 'videosUs/memories.mp4',
videoPoster: 'videosUs/poster.png',
items: [
    { id: 1, src: 'imagesUs/memories1.jpeg', title: 'At the Coffee Shop' },
    ...
]
```

#### Option A: Manual Update (Recommended for first time)
1. Open `cloudinary-urls-list.js` to see all your uploaded URLs
2. Open `script.js`
3. Replace the video URL at line 15-16:
   ```javascript
   video: 'https://res.cloudinary.com/dwmcugijh/video/upload/v.../VN20260613_171108.mp4',
   ```
4. Map actual images to your sections by category

#### Option B: Create Custom Script
Your actual file names are in `Final/imageMe/` and `Final/imageUs/` folders. The script will generate URLs for them. You'll need to map them to your gallery sections.

---

## 🎯 RESULT

After deployment:
- ✅ All images hosted on Cloudinary (not in repo)
- ✅ All videos hosted on Cloudinary (not in repo)
- ✅ Logos stay in repo
- ✅ Website loads media from Cloudinary
- ✅ Repo is lightweight (no large media files)
- ✅ Can clone on other laptop and just run upload script again

---

## 📱 On Your Other Laptop

1. Clone the repo: `git clone [your-repo-url]`
2. Copy/add your media to the `Final/` folder
3. Run: `.\upload-media-to-cloudinary.ps1`
4. Run: `.\generate-script-from-urls.ps1`
5. Update `script.js` with new Cloudinary URLs
6. Commit and push the updated `script.js`

---

## 🔧 Configuration Files

- **config.eventMapping.json** - Cloudinary credentials & folder structure
- **cloudinary-urls-mapping.json** - Generated after upload with all URLs
- **cloudinary-urls-list.js** - Generated reference file with organized URLs
- **.gitignore** - Excludes `Final/`, `imagesMe/`, `imagesUs/`, `videosMe/`, `videosUs/`

---

## ✅ CHECKLIST BEFORE UPLOADING

- [ ] Cloudinary account set up with:
  - Cloud Name: `dwmcugijh`
  - Upload Preset: `static_page`
- [ ] Media organized in `Final/imageMe/`, `Final/imageUs/`, `Final/videoUs/`
- [ ] Running scripts from: `C:\Users\pranava\StaticPage\StaticPage`
- [ ] Git tracking is set up (.gitignore configured)

---

## 🆘 TROUBLESHOOTING

**"ERROR: Final folder not found"**
- Make sure you're running the script from the StaticPage folder
- Check that `Final/` folder exists and has media in it

**"Upload failed: Unauthorized"**
- Verify Cloudinary credentials in `config.eventMapping.json`
- Check that upload preset exists on Cloudinary dashboard

**"Files uploaded but no URLs"**
- Check `cloudinary-urls-mapping.json` was created
- Run `generate-script-from-urls.ps1` to extract URLs

---

**Ready to go! Run the first PowerShell script and let me know if you hit any issues.** 🚀
