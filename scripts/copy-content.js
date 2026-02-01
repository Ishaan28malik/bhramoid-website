const fs = require('fs');
const path = require('path');

// Copy content folder to public folder
const sourceDir = path.join(__dirname, '../content');
const destDir = path.join(__dirname, '../public/content');

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

// Copy content to public
if (fs.existsSync(sourceDir)) {
  copyRecursiveSync(sourceDir, destDir);
  console.log('✅ Content files copied to public/content');
} else {
  console.warn('⚠️  Content directory not found');
}
