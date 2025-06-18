import React from 'react';
import '../Components/Publish.css';

function Publish() {
  return (
    <div className="publish-container">
      <h2>Publish Settings</h2>
      <p className="subtext">Configure how and when your course will be available</p>

      <div className="publish-grid">
        {/* Left Column */}
        <div className="column">
          <div className="form-section">
            <label className="section-title">Publication Status</label>
            <div className="radio-group">
              <label><input type="radio" name="status" /> Save as Draft</label>
              <label><input type="radio" name="status" defaultChecked /> Publish Now</label>
            </div>
          </div>

          <div className="form-section">
            <label className="section-title">Course Duration</label>
            <div className="input-row">
              <input type="number" placeholder="Duration (hours)" defaultValue={2} />
              <input type="number" placeholder="Days to Complete" defaultValue={30} />
            </div>
          </div>

          <div className="form-section">
            <label className="section-title">Visibility Period</label>
            <div className="input-row">
              <input type="date" />
              <input type="date" />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="column">
          <div className="form-section">
            <label className="section-title">Access Control</label>
            <div className="radio-group">
              <label><input type="radio" name="access" /> Private<br /><span className="desc">Only invited users can access</span></label>
              <label><input type="radio" name="access" defaultChecked /> Organization-wide<br /><span className="desc">All members of your organization can access</span></label>
              <label><input type="radio" name="access" /> Public<br /><span className="desc">Anyone with the link can access</span></label>
            </div>
          </div>

          <div className="form-section">
            <label className="section-title">Completion Settings</label>
            <div className="checkbox-group">
              <label>
                <input type="checkbox" /> Issue Certificate<br />
                <span className="desc">Learners receive a certificate upon completion</span>
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Track Progress<br />
                <span className="desc">Monitor learner progress and completion rates</span>
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Send Notifications<br />
                <span className="desc">Notify learners about course updates</span>
              </label>
            </div>
          </div>

          <div className="note-box">
            <strong>⚠ Important Note</strong>
            <p>
              Once published, your course will be available to the selected audience. You can still make edits after publishing, but learners who have already started the course will not see the changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish;
