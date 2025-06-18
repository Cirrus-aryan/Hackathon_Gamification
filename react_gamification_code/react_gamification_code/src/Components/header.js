import React, { useState } from 'react';
import '../Components/header.css';
import CourseDetails from './CourseDetails';
import UploadContent from './uploadContent'; // ✅ Step 1: Import
import AiContent from './AiContent';
import MicroGames from './MicroGames';
import Assessment from './Assessment';
import Publish from './Publish';

function Header() {
  const [activeTab, setActiveTab] = useState('Course Details');
  const tabs = ['Course Details', 'Upload Content', 'AI Content', 'Micro-Games', 'Assessment', 'Publish'];

  return (
    <div className="header-wrapper">
      <div className="top-bar">
        <div className="left">
          <h1>Design Your Course</h1>
          <span className="badge">Draft</span>
        </div>
        <div className="right">
          <button className="btn preview">👁️ Preview</button>
          <button className="btn save">📝 Save Draft</button>
          <button className="btn publish">✅ Publish Course</button>
        </div>
      </div>

      <div className="tabs-bar">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ✅ Conditionally render each tab content below */}
      {activeTab === 'Course Details' && <CourseDetails />}
      {activeTab === 'Upload Content' && <UploadContent />}
      {activeTab === 'AI Content' && <AiContent />}
       {activeTab === 'Micro-Games' && <MicroGames />}
       {activeTab === 'Assessment' && <Assessment />}
        {activeTab === 'Publish' && <Publish />}
    </div>
  );
}

export default Header;
