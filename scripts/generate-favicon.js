const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  try {
    // Generate favicon.ico (16x16, 32x32, 48x48)
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Generate 16x16 PNG
    await sharp(svgBuffer)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));

    // Generate 32x32 PNG
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));

    // Generate favicon.ico (multi-size)
    const toIco = require('to-ico');
    const sizes = [16, 32, 48];
    const buffers = await Promise.all(
      sizes.map(size =>
        sharp(svgBuffer)
          .resize(size, size)
          .png()
          .toBuffer()
      )
    );
    
    const ico = await toIco(buffers);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);

    // Generate logo192.png
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'logo192.png'));

    // Generate logo512.png
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'logo512.png'));

    // Generate apple-touch-icon (180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    console.log('✅ Favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
