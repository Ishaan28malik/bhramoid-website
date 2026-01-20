import React from 'react';
import BrahMoID3D from '../components/BrahMoID3D';
import './ExportTest.css';

const ExportTest = () => {
  return (
    <div className="export-test-page">
      <div className="container">
        <h1>3D Model Export Test</h1>
        <p>Use the export controls in the bottom-left corner to save the model as PNG or GIF</p>
        <div className="model-display">
          <BrahMoID3D model={2} />
        </div>
      </div>
    </div>
  );
};

export default ExportTest;
