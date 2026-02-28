const fs = require('fs');
const path = require('path');

// Use public/content as the single source of truth. Do NOT copy root content/ over it.
// The app loads from /content/ which is served from public/content.
// If you need to seed public/content from root content/, run that copy manually or
// add a separate script. This script no longer overwrites public/content.
const publicContentDir = path.join(__dirname, '../public/content');

if (!fs.existsSync(publicContentDir)) {
  const rootContent = path.join(__dirname, '../content');
  if (fs.existsSync(rootContent)) {
    function copyRecursiveSync(src, dest) {
      const exists = fs.existsSync(src);
      const stats = exists && fs.statSync(src);
      const isDirectory = exists && stats.isDirectory();
      if (isDirectory) {
        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }
        fs.readdirSync(src).forEach((childItemName) => {
          copyRecursiveSync(
            path.join(src, childItemName),
            path.join(dest, childItemName)
          );
        });
      } else {
        fs.copyFileSync(src, dest);
      }
    }
    copyRecursiveSync(rootContent, publicContentDir);
    console.log('✅ Seeded public/content from content/ (public/content was missing)');
  } else {
    fs.mkdirSync(publicContentDir, { recursive: true });
    console.log('✅ public/content directory ensured');
  }
} else {
  console.log('✅ Using existing public/content (source of truth)');
}
