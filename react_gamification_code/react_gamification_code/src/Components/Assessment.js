import React from 'react';
import '../Components/Assessment.css';

function Assessment() {
  const questions = new Array(2).fill({
    type: 'Multiple Choice',
    question: 'What is the primary purpose of GRC in an organization?',
    options: [
      'To increase profits',
      'To ensure ethical behavior and regulatory compliance',
      'To reduce the workforce',
      'To increase market share',
    ],
    selected: [1],
    points: 10,
  });

  return (
    <div className="assessment-wrapper">
      <h2>Assessment Builder</h2>

      <div className="assessment-settings">
        <div className="settings-group">
          <label>Passing Score (%)</label>
          <input type="number" defaultValue={70} />
        </div>
        <div className="settings-group">
          <label>Time Limit (minutes)</label>
          <input type="number" defaultValue={30} />
        </div>
        <div className="settings-group">
          <label>Max Attempts</label>
          <input type="number" defaultValue={2} />
        </div>
        <div className="toggle-controls">
          <div className="toggle-box">
            <input type="checkbox" id="instant" />
            <label htmlFor="instant">Show results instantly</label>
          </div>
          <div className="toggle-box">
            <input type="checkbox" id="random" />
            <label htmlFor="random">Randomize questions</label>
          </div>
        </div>
        <button className="add-question-btn">➕ Add Question</button>
      </div>

      <div className="summary">
        <span>📋 8 Questions</span>
        <span>🏆 100 Points</span>
      </div>

      <div className="question-container">
        {questions.map((q, i) => (
          <div key={i} className="question-box">
            <div className="question-header">
              <span className="badge">{q.type}</span>
              <div className="points">
                <label>Points:</label>
                <input type="number" value={q.points} readOnly />
              </div>
            </div>
            <p className="question-text">{q.question}</p>
            <ul className="options">
              {q.options.map((opt, idx) => (
                <li key={idx}>
                  <input
                    type="checkbox"
                    checked={q.selected.includes(idx)}
                    readOnly
                  />
                  <label>{opt}</label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assessment;
