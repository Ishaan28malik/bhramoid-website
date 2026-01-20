import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
// import { captureFrame, downloadImage, captureFrames, createGIF, downloadGIF } from '../utils/export3DModel';
import './BrahMoID3D.css';
// import './ModelExporter.css';

// Model 1: Brahma-Inspired with Multiple Heads
function BrahMoIDLogo1() {
  const groupRef = useRef();
  const head1Ref = useRef();
  const head2Ref = useRef();
  const head3Ref = useRef();
  const head4Ref = useRef();
  const bodyRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.3;
      groupRef.current.position.y = Math.sin(time * 0.4) * 0.1;
    }
    
    // Slight independent head movements
    if (head1Ref.current) {
      head1Ref.current.rotation.y = Math.sin(time * 0.5) * 0.1;
    }
    if (head2Ref.current) {
      head2Ref.current.rotation.y = Math.cos(time * 0.5) * 0.1;
    }
    if (head3Ref.current) {
      head3Ref.current.rotation.y = Math.sin(time * 0.6) * 0.1;
    }
    if (head4Ref.current) {
      head4Ref.current.rotation.y = Math.cos(time * 0.6) * 0.1;
    }
    if (bodyRef.current) {
      bodyRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - Android-like torso */}
      <mesh ref={bodyRef} position={[0, -0.5, 0]}>
        <boxGeometry args={[1.2, 1.5, 0.8]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#000000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Four heads representing Brahma - arranged in cardinal directions */}
      {/* Head 1 - Front */}
      <group ref={head1Ref} position={[0, 0.8, 0.6]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#ffffff"
            emissiveIntensity={0.25}
          />
        </mesh>
        {/* Eyes */}
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Head 2 - Right */}
      <group ref={head2Ref} position={[0.6, 0.8, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#ffffff"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Head 3 - Back */}
      <group ref={head3Ref} position={[0, 0.8, -0.6]} rotation={[0, Math.PI, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#ffffff"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Head 4 - Left */}
      <group ref={head4Ref} position={[-0.6, 0.8, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <mesh>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#ffffff"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Connecting neck structure */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.6, 16]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>

      {/* Arms - Android style */}
      <mesh position={[-0.8, -0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, -0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Legs */}
      <mesh position={[-0.4, -1.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, -1.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Decorative elements - representing knowledge/wisdom */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.2,
              1.5,
              Math.sin(angle) * 1.2,
            ]}
            rotation={[0, angle, 0]}
          >
            <coneGeometry args={[0.15, 0.4, 8]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#000000" : "#ffffff"} 
              metalness={0.8} 
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Model 2: Android-Brahma Hybrid with Central Core
function BrahMoIDLogo2() {
  const groupRef = useRef();
  const centralHeadRef = useRef();
  const bodyRef = useRef();
  const antennaRef = useRef();

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.25;
      groupRef.current.position.y = Math.sin(time * 0.3) * 0.08;
    }
    
    if (centralHeadRef.current) {
      centralHeadRef.current.rotation.y = Math.sin(time * 0.4) * 0.15;
    }
    
    if (bodyRef.current) {
      bodyRef.current.rotation.y = time * 0.15;
    }
    
    if (antennaRef.current) {
      antennaRef.current.position.y = 1.8 + Math.sin(time * 0.8) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body - Rounded Android-like */}
      <mesh ref={bodyRef} position={[0, -0.3, 0]}>
        <boxGeometry args={[1.4, 1.6, 0.9]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#000000"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Central head - Main face */}
      <group ref={centralHeadRef} position={[0, 0.9, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.85} 
            roughness={0.15}
            emissive="#ffffff"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Eyes - Android style */}
        <mesh position={[-0.2, 0.15, 0.41]}>
          <boxGeometry args={[0.15, 0.2, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.2, 0.15, 0.41]}>
          <boxGeometry args={[0.15, 0.2, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        {/* Mouth */}
        <mesh position={[0, -0.15, 0.41]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.15, 0.05, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

      {/* Three additional smaller heads around main head - Brahma concept */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        return (
          <group
            key={i}
            position={[
              Math.cos(angle) * 0.9,
              0.9,
              Math.sin(angle) * 0.9,
            ]}
            rotation={[0, angle + Math.PI / 2, 0]}
          >
            <mesh>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial 
                color={i % 2 === 0 ? "#ffffff" : "#000000"} 
                metalness={0.85} 
                roughness={0.15}
                emissive={i % 2 === 0 ? "#ffffff" : "#000000"}
                emissiveIntensity={0.2}
              />
            </mesh>
            {/* Small eyes */}
            <mesh position={[-0.1, 0.08, 0.26]}>
              <sphereGeometry args={[0.05, 6, 6]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#000000" : "#ffffff"} />
            </mesh>
            <mesh position={[0.1, 0.08, 0.26]}>
              <sphereGeometry args={[0.05, 6, 6]} />
              <meshStandardMaterial color={i % 2 === 0 ? "#000000" : "#ffffff"} />
            </mesh>
          </group>
        );
      })}

      {/* Antenna - Android style */}
      <mesh ref={antennaRef} position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 2.0, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>

      {/* Arms - More Android-like with rounded joints */}
      <group position={[-0.9, 0.1, 0]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.25, 1.0, 0.25]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Hand */}
        <mesh position={[-0.5, -0.5, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>
      
      <group position={[0.9, 0.1, 0]}>
        <mesh rotation={[0, 0, -Math.PI / 4]}>
          <boxGeometry args={[0.25, 1.0, 0.25]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
        {/* Hand */}
        <mesh position={[0.5, -0.5, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Legs - Android style */}
      <mesh position={[-0.5, -1.2, 0]}>
        <boxGeometry args={[0.3, 0.9, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.5, -1.2, 0]}>
        <boxGeometry args={[0.3, 0.9, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Decorative elements - representing the four directions */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i / 4) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 1.5,
              -0.5,
              Math.sin(angle) * 1.5,
            ]}
          >
            <boxGeometry args={[0.2, 0.4, 0.2]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#000000" : "#ffffff"} 
              metalness={0.8} 
              roughness={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Export controls component (commented out - can be enabled when needed)
// function ExportControls({ gl, scene, camera }) {
//   const [isExporting, setIsExporting] = useState(false);
//   const [exportProgress, setExportProgress] = useState(0);
//   const [exportType, setExportType] = useState('image');

//   const handleExportImage = async () => {
//     if (!gl || !scene || !camera) return;
//     setIsExporting(true);
//     try {
//       gl.render(scene, camera);
//       await new Promise(resolve => setTimeout(resolve, 200));
//       const dataURL = await captureFrame(gl, 'png');
//       downloadImage(dataURL, 'brahmoid-3d-model.png');
//       setIsExporting(false);
//     } catch (error) {
//       console.error('Error exporting image:', error);
//       setIsExporting(false);
//     }
//   };

//   const handleExportGIF = async () => {
//     if (!gl || !scene || !camera) return;
//     setIsExporting(true);
//     setExportProgress(0);
//     try {
//       const frameCount = 30;
//       const frameDelay = 100;
      
//       const frames = await captureFrames(
//         gl,
//         () => gl.render(scene, camera),
//         frameCount,
//         frameDelay
//       );
      
//       setExportProgress(50);
//       const gifBlob = await createGIF(
//         frames,
//         10,
//         (progress) => setExportProgress(50 + (progress * 0.5))
//       );
      
//       downloadGIF(gifBlob, 'brahmoid-3d-model.gif');
//       setExportProgress(100);
//       setIsExporting(false);
//     } catch (error) {
//       console.error('Error exporting GIF:', error);
//       setIsExporting(false);
//     }
//   };

//   if (!gl) return null;

//   return (
//     <div className="model-exporter">
//       <div className="exporter-controls">
//         <select 
//           value={exportType} 
//           onChange={(e) => setExportType(e.target.value)}
//           disabled={isExporting}
//           className="export-type-select"
//         >
//           <option value="image">Export as Image (PNG)</option>
//           <option value="gif">Export as Animated GIF</option>
//         </select>
        
//         <button
//           onClick={exportType === 'image' ? handleExportImage : handleExportGIF}
//           disabled={isExporting}
//           className="export-btn"
//         >
//           {isExporting ? 'Exporting...' : `Export ${exportType === 'image' ? 'Image' : 'GIF'}`}
//         </button>
//       </div>
      
//       {isExporting && (
//         <div className="export-progress">
//           <div className="progress-bar">
//             <div 
//               className="progress-fill" 
//               style={{ width: `${exportProgress}%` }}
//             />
//           </div>
//           <span className="progress-text">{Math.round(exportProgress)}%</span>
//         </div>
//       )}
//     </div>
//   );
// }

// Component to capture renderer context (commented out - can be enabled when needed)
// function RendererCapture({ onReady }) {
//   const { gl, scene, camera } = useThree();
//   
//   React.useEffect(() => {
//     if (gl && scene && camera && onReady) {
//       onReady({ gl, scene, camera });
//     }
//   }, [gl, scene, camera, onReady]);

//   return null;
// }

function BrahMoID3D({ model = 1, className = '' }) {
  // const [currentModel, setCurrentModel] = useState(model);
  // const [rendererContext, setRendererContext] = useState(null);

  return (
    <div className={`brahmoid-3d-container ${className}`}>
      {/* Model selector buttons */}
      {/* <div className="model-selector">
        <button 
          className={`model-btn ${currentModel === 1 ? 'active' : ''}`}
          onClick={() => setCurrentModel(1)}
        >
          Model 1
        </button>
        <button 
          className={`model-btn ${currentModel === 2 ? 'active' : ''}`}
          onClick={() => setCurrentModel(2)}
        >
          Model 2
        </button>
      </div> */}

      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        key={model}
      >
        {/* <RendererCapture onReady={setRendererContext} /> */}
        <PerspectiveCamera makeDefault position={[0, 0, 8]} />
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} />
        <pointLight position={[0, 10, 0]} intensity={0.6} />
        {model === 1 ? <BrahMoIDLogo1 /> : <BrahMoIDLogo2 />}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.3}
        />
        <Environment preset="city" />
      </Canvas>
      
      {/* Export controls outside Canvas */}
      {/* {rendererContext && (
        <ExportControls 
          gl={rendererContext.gl} 
          scene={rendererContext.scene} 
          camera={rendererContext.camera} 
        />
      )} */}
    </div>
  );
}

export default BrahMoID3D;
