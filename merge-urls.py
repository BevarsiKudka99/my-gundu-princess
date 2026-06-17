import re
import json
from datetime import datetime
import os
import shutil

# Read cloudinary URLs
try:
    with open('cloudinary-urls.js', 'r', encoding='utf-16') as f:
        cloud_content = f.read()
except:
    with open('cloudinary-urls.js', 'r', encoding='utf-8') as f:
        cloud_content = f.read()

# Extract URLs using regex
url_pattern = r"url: '([^']+)',\s+name: '([^']*)',\s+type: '([^']+)'"
url_matches = re.findall(url_pattern, cloud_content)

print(f"\nFound {len(url_matches)} items in cloudinary-urls.js")

if not url_matches:
    print("No URLs found!")
    exit(1)

# Parse into items
items = [{'url': url, 'name': name, 'type': url_type} for url, name, url_type in url_matches]

# Group by folder from URL (including subfolders)
folders = {}
for item in items:
    # Extract folder path from URL: /upload/v123/folder/subfolder/file
    # We want to capture everything between /upload/version/ and the filename
    match = re.search(r'upload/[^/]+/(.*?)/[^/]+$', item['url'])
    if match:
        folder = match.group(1)
    else:
        folder = 'Others'
    
    if folder not in folders:
        folders[folder] = []
    folders[folder].append(item)

print("\nItems by folder:")
for folder in sorted(folders.keys()):
    print(f"  {folder}: {len(folders[folder])} items")

# Read script.js
with open('script.js', 'r', encoding='utf-8') as f:
    script_content = f.read()

# Create new sections for new folders
new_sections = []
for folder_name in sorted(folders.keys()):
    folder_items = folders[folder_name]
    clean_name = folder_name.replace('_', ' ').replace('/', ' - ')
    # Create section ID from folder path (convert to lowercase, replace / with -)
    section_id = folder_name.lower().replace('/', ' - ')
    
    # Check if this section already exists in script.js
    if f"id: '{section_id}'" in script_content:
        print(f"  → Skipping '{folder_name}' (already exists)")
        continue
    
    items_str = ""
    for idx, item in enumerate(folder_items, 1):
        items_str += f"                {{ id: {idx}, src: '{item['url']}', title: '{item['name']}' }}"
        if idx < len(folder_items):
            items_str += ",\n"
    
    section = f"""            {{ title: '{clean_name}', id: '{section_id}', items: [
{items_str}
            ] }}"""
    new_sections.append(section)

if not new_sections:
    print("\n✓ All items already in script.js!")
    exit(0)

print(f"\nAdding {len(new_sections)} new sections...")

# Find insertion point - look for the closing of sections array
# Pattern: first occurrence of "} },\n        ]" or similar
lines = script_content.split('\n')
insertion_line = -1

for i in range(len(lines)-1, -1, -1):
    if "'items:" in lines[i] or "items: [" in lines[i]:
        # Found items, now find the closing of that section
        for j in range(i+1, min(i+50, len(lines))):
            if lines[j].strip().startswith('] }'):
                insertion_line = j
                break
        if insertion_line > 0:
            break

if insertion_line < 0:
    # Alternative: find last occurrence of "} },"
    for i in range(len(lines)-1, -1, -1):
        if "} }," in lines[i]:
            insertion_line = i
            break

if insertion_line < 0:
    print("ERROR: Could not find insertion point in script.js")
    exit(1)

# Backup original
backup_path = f"script.js.backup.{int(datetime.now().timestamp())}"
shutil.copy('script.js', backup_path)
print(f"Backup created: {backup_path}")

# Insert new sections
lines.insert(insertion_line, ",")
for i, section in enumerate(new_sections):
    lines.insert(insertion_line + 1 + i, section)

new_content = '\n'.join(lines)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"✓ Updated script.js with {len(new_sections)} new sections!")
