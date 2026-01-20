import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera } from '@react-three/drei';
import './ModelComparison.css';

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
        <mesh position={[-0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.1, 0.31]}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

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

      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 0.6, 16]} />
        <meshStandardMaterial 
          color="#000000" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>

      <mesh position={[-0.8, -0.2, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, -0.2, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

      <mesh position={[-0.4, -1.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.4, -1.3, 0]}>
        <boxGeometry args={[0.3, 0.8, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

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
        
        <mesh position={[-0.2, 0.15, 0.41]}>
          <boxGeometry args={[0.15, 0.2, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0.2, 0.15, 0.41]}>
          <boxGeometry args={[0.15, 0.2, 0.1]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        
        <mesh position={[0, -0.15, 0.41]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.15, 0.05, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>

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

      <mesh ref={antennaRef} position={[0, 1.8, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 2.0, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </mesh>

      <group position={[-0.9, 0.1, 0]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.25, 1.0, 0.25]} />
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
        </mesh>
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
        <mesh position={[0.5, -0.5, 0]}>
          <boxGeometry args={[0.3, 0.2, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      <mesh position={[-0.5, -1.2, 0]}>
        <boxGeometry args={[0.3, 0.9, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.5, -1.2, 0]}>
        <boxGeometry args={[0.3, 0.9, 0.3]} />
        <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
      </mesh>

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

const ModelComparison = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <div className="model-comparison-page">
      <div className="container">
        <h1 className="comparison-title">3D Model Comparison</h1>
        <p className="comparison-subtitle">Brahma + Android Inspired Designs</p>
        
        <div className="models-grid">
          {/* Model 1 */}
          <div className="model-card">
            <div className="model-header">
              <h2>Model 1: Four-Headed Brahma</h2>
              <p className="model-description">
                Features four heads in cardinal directions (representing Brahma's omniscience), 
                Android-like robotic body structure, and decorative elements. Classic geometric design.
              </p>
            </div>
            <div className="model-viewport">
              <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
              >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={1.0} />
                <pointLight position={[0, 10, 0]} intensity={0.6} />
                <BrahMoIDLogo1 />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.6}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.3}
                />
                <Environment preset="city" />
              </Canvas>
            </div>
            <button 
              className={`select-btn ${selectedModel === 1 ? 'selected' : ''}`}
              onClick={() => setSelectedModel(1)}
            >
              {selectedModel === 1 ? '✓ Selected' : 'Select Model 1'}
            </button>
          </div>

          {/* Model 2 */}
          <div className="model-card">
            <div className="model-header">
              <h2>Model 2: Central Head + Three Satellites</h2>
              <p className="model-description">
                Features a main Android-style head with three smaller heads orbiting around it, 
                rounded body design, antenna, and more modern Android aesthetic with rounded edges.
              </p>
            </div>
            <div className="model-viewport">
              <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
              >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <directionalLight position={[-10, -10, -5]} intensity={1.0} />
                <pointLight position={[0, 10, 0]} intensity={0.6} />
                <BrahMoIDLogo2 />
                <OrbitControls
                  enableZoom={true}
                  enablePan={false}
                  autoRotate
                  autoRotateSpeed={0.6}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 1.3}
                />
                <Environment preset="city" />
              </Canvas>
            </div>
            <button 
              className={`select-btn ${selectedModel === 2 ? 'selected' : ''}`}
              onClick={() => setSelectedModel(2)}
            >
              {selectedModel === 2 ? '✓ Selected' : 'Select Model 2'}
            </button>
          </div>
        </div>

        {selectedModel && (
          <div className="selection-confirmation">
            <p>You've selected <strong>Model {selectedModel}</strong>. This will be used in the hero section.</p>
            <p className="note">Note: You can switch between models using the toggle in the hero section.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModelComparison;
