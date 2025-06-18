import React from 'react';
import '../Components/MicroGames.css';

function MicroGames() {
  const games = [
    { icon: '🐍', title: 'Snake Word Match', description: 'Match words by controlling a snake' },
    { icon: '🎯', title: 'Funshot Shooter', description: 'Answer questions by shooting targets' },
    { icon: '🛠️', title: 'Drag & Drop Builder', description: 'Build concepts by dragging elements' },
    { icon: '📍', title: 'Hotspot Image Selector', description: 'Identify areas on images' },
    { icon: '🧩', title: 'Puzzle Builder', description: 'Solve puzzles to reveal concepts' },
    { icon: '🧠', title: 'Memory Flip Cards', description: 'Match pairs of related concepts' },
    { icon: '🔊', title: 'Audio Scenario Match', description: 'Listen and match scenarios' },
    { icon: '⏱️', title: 'Timed Decision Game', description: 'Make quick decisions under time pressure' },
  ];

  return (
    <div className="microgames-container">
      <h2>Gamify Your Learning</h2>
      <p>Select micro-games to make your course more engaging and interactive</p>

      <div className="game-grid">
        {games.map((game, idx) => (
          <div key={idx} className="game-card">
            <div className="icon">{game.icon}</div>
            <div className="info">
              <h4>{game.title}</h4>
              <p>{game.description}</p>
            </div>
            <div className="toggle">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        ))}
      </div>

      <div className="game-settings">
        <h4>⚙️ Game Settings</h4>
        <p>Configure global settings for all enabled games</p>

        <div className="settings-row">
          <div className="setting-group">
            <label>Difficulty Level</label>
            <select>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Time Limit (seconds)</label>
            <input type="number" value={60} />
          </div>

          <div className="setting-group">
            <label>Max Attempts</label>
            <input type="number" value={3} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MicroGames;
