import React from 'react';
import '../Components/AiContent.css';

function AiContent() {
  const cards = new Array(4).fill({
    title: "Key GRC Compliance Principles",
    content:
      "Governance, Risk, and Compliance (GRC) is an integrated approach to organizational governance. It ensures that an organization acts ethically correct and in accordance with its risk appetite, internal policies, and external regulations."
  });

  const questions = new Array(3).fill({
    type: "Multiple Choice",
    question: "What is the primary purpose of GRC in an organization?",
    options: [
      "To increase profits",
      "To ensure ethical behavior and regulatory compliance",
      "To reduce the workforce",
      "To increase market share"
    ],
    selected: [1] // selected options (e.g., index 1)
  });

  return (
    <div className="ai-content-wrapper">
      <div className="ai-content-header">
        <h2>AI-Generated Learning Content</h2>
      </div>

      <div className="ai-content-body">
        {/* Left Column - Cards */}
        <div className="cards-section">
          <div className="section-title">
            <span>ℹ️ Learning Cards</span>
            <span className="badge">{cards.length} cards</span>
          </div>
          {cards.map((card, idx) => (
            <div key={idx} className="card">
              <h4>{card.title}</h4>
              <p>{card.content}</p>
            </div>
          ))}
        </div>

        {/* Right Column - Questions */}
        <div className="questions-section">
          <div className="section-title">
            <span>📝 Assessment Questions</span>
            <span className="badge">{questions.length} questions</span>
          </div>

          <div className="action-buttons">
            <button className="btn">➕ Add Card</button>
            <button className="btn">🔃 Reorder</button>
          </div>

          {questions.map((q, i) => (
            <div key={i} className="question-card">
              <div className="question-type">{q.type}</div>
              <div className="question-text">{q.question}</div>
              <ul className="options-list">
                {q.options.map((option, j) => (
                  <li key={j}>
                    <input
                      type="checkbox"
                      checked={q.selected.includes(j)}
                      readOnly
                    />
                    <label>{option}</label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-footer-buttons">
        <button className="gray">🗑️ Discard Changes</button>
        <div>
          <button className="gray">👁️ Preview Course</button>
          <button className="gray">💾 Save as Draft</button>
          <button className="blue">🚀 Publish Course</button>
        </div>
      </div>
    </div>
  );
}

export default AiContent;
