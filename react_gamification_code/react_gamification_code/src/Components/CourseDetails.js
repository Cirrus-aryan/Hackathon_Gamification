import React from 'react';
import '../Components/CourseDetails.css';

function CourseDetails() {
  return (
    <div className="course-details-container">
      <div className="form-section">
        <div className="form-left">
          <label>Course Title</label>
          <input type="text" placeholder="Enter course title" />

          <label>Description</label>
          <textarea rows="5" placeholder="Describe your course"></textarea>

          <label>Tags</label>
          <input type="text" defaultValue="GRC, Compliance, Risk Management" />
          <small>Separate tags with commas</small>

          <label>Target Audience</label>
          <select>
            <option>Select target audience</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="form-right">
          <label>Course Thumbnail</label>
          <div className="upload-box">
            <div className="upload-icon">🖼️</div>
            <p>Drag and drop an image or click to browse</p>
            <button className="upload-btn">⬆️ Upload Image</button>
            <span className="upload-hint">Recommended size: 1280x720px (16:9)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
