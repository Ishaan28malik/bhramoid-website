/**
 * Utility functions to export 3D models as images or GIFs
 */

/**
 * Capture a single frame from a Three.js canvas
 * @param {THREE.WebGLRenderer} renderer - The Three.js renderer
 * @param {string} format - Image format ('png', 'jpg', 'webp')
 * @returns {Promise<string>} - Data URL of the image
 */
export const captureFrame = (renderer, format = 'png') => {
  return new Promise((resolve) => {
    // For WebGL, we need to read pixels and create a canvas
    const width = renderer.domElement.width;
    const height = renderer.domElement.height;
    
    // Create a temporary canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // Draw the WebGL canvas to the 2D canvas
    ctx.drawImage(renderer.domElement, 0, 0);
    
    // Convert to data URL
    const dataURL = canvas.toDataURL(`image/${format}`, 1.0);
    resolve(dataURL);
  });
};

/**
 * Download an image from a data URL
 * @param {string} dataURL - Data URL of the image
 * @param {string} filename - Name of the file to download
 */
export const downloadImage = (dataURL, filename = 'brahmoid-model.png') => {
  const link = document.createElement('a');
  link.href = dataURL;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Capture multiple frames for GIF creation
 * @param {THREE.WebGLRenderer} renderer - The Three.js renderer
 * @param {Function} renderFunction - Function to call for each frame
 * @param {number} frameCount - Number of frames to capture
 * @param {number} frameDelay - Delay between frames in ms
 * @returns {Promise<Array<string>>} - Array of data URLs
 */
export const captureFrames = async (
  renderer,
  renderFunction,
  frameCount = 30,
  frameDelay = 100
) => {
  const frames = [];
  
  for (let i = 0; i < frameCount; i++) {
    // Render the scene
    renderFunction();
    
    // Wait for the frame to render
    await new Promise((resolve) => setTimeout(resolve, frameDelay));
    
    // Capture the frame
    const dataURL = renderer.domElement.toDataURL('image/png');
    frames.push(dataURL);
  }
  
  return frames;
};

/**
 * Create an animated GIF from frames
 * @param {Array<string>} frames - Array of image data URLs
 * @param {number} delay - Delay between frames in centiseconds (1/100th of a second)
 * @param {Function} onProgress - Progress callback
 * @returns {Promise<Blob>} - GIF blob
 */
export const createGIF = async (frames, delay = 10, onProgress = null) => {
  return new Promise((resolve, reject) => {
    // Dynamically import gif.js
    import('gif.js').then((GIF) => {
      // Get dimensions from first frame
      const img = new Image();
      img.onload = () => {
        const gif = new GIF.default({
          workers: 2,
          quality: 10,
          width: img.width,
          height: img.height,
        });

        gif.on('finished', (blob) => {
          resolve(blob);
        });

        gif.on('progress', (p) => {
          if (onProgress) {
            onProgress(p);
          }
        });

        // Add all frames to GIF
        let loadedFrames = 0;
        frames.forEach((frameDataURL) => {
          const frameImg = new Image();
          frameImg.onload = () => {
            gif.addFrame(frameImg, { delay });
            loadedFrames++;
            if (loadedFrames === frames.length) {
              gif.render();
            }
          };
          frameImg.src = frameDataURL;
        });
      };
      img.src = frames[0];
    }).catch(reject);
  });
};

/**
 * Download a GIF blob
 * @param {Blob} blob - GIF blob
 * @param {string} filename - Name of the file
 */
export const downloadGIF = (blob, filename = 'brahmoid-model.gif') => {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Save image to public folder (for development - requires server-side code)
 * This is a placeholder - actual saving to public folder requires backend
 */
export const saveToPublicFolder = async (dataURL, filename) => {
  // Convert data URL to blob
  const response = await fetch(dataURL);
  const blob = await response.blob();
  
  // In a real implementation, you would send this to your backend
  // For now, we'll just download it
  console.log('To save to public folder, implement backend endpoint');
  downloadImage(dataURL, filename);
};
