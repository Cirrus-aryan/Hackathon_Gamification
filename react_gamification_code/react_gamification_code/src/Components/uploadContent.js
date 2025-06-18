import React from 'react';
import '../Components/uploadContent.css';
function uploadContent() {
  return (
    <div className="upload-content-container">
      <div className="upload-box-wrapper">
        <h2>Upload Learning Content</h2>
        <p>Upload your PDF files to generate AI-powered learning cards and questions</p>

        <div className="upload-area">
          <div className="upload-icon">📄</div>
          <p>Drag and drop your PDF files here</p>
          <span>or</span>
          <button className="browse-button">📁 Browse Files</button>
          <div className="upload-note">Maximum file size: 50MB</div>
        </div>

        <div className="attach-section">
          <div className="attach-box">
            <h4>📘 Policies</h4>
            <label>Select Policy</label>
            <select>
              <option>Choose a policy</option>
            </select>
            <button className="plus-button">＋</button>
          </div>

          <div className="attach-box">
            <h4>🛡️ Controls</h4>
            <label>Select Control</label>
            <select>
              <option>Choose a control</option>
            </select>
            <button className="plus-button">＋</button>
          </div>

          <div className="attach-box">
            <h4>📚 Frameworks</h4>
            <label>Select Framework</label>
            <select>
              <option>Choose a framework</option>
            </select>
            <button className="plus-button">＋</button>
          </div>
        </div>

        <div className="attached-content">
          <label>Attached Content</label>
          <div className="attached-box">
            <p>No content attached yet. Use the dropdowns above to select content.</p>
          </div>

          <div className="uploaded-file">
            <div className="file-name">📄 GRC_Compliance_Guide_2023.pdf</div>
            <div className="file-info">24 pages • 4.2MB</div>
            <div className="file-progress">
              <div className="progress-bar">
                <div className="progress-filled" style={{ width: '100%' }}></div>
              </div>
              <div className="progress-status">AI is processing your content...</div>
            </div>
          </div>
        </div>

        <div className="footer-buttons">
          <button className="discard">🗑️ Discard Changes</button>
          <div className="footer-right">
            <button className="gray">👁️ Preview Course</button>
            <button className="gray">💾 Save as Draft</button>
            <button className="blue">🚀 Publish Course</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default uploadContent;
