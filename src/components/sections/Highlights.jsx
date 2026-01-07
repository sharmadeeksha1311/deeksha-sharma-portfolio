import React, { useState } from 'react';

const Highlights = () => {
  const [activeCard, setActiveCard] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "Ace Extra mile Award",
      organization: "Accenture",
      date: "June 2025",
      description: "One of the Accenture greatest rewards to few among vast no. of projects.",
      icon: "🏆",
      color: "#0ea5e9",
      stats: { rewardPoints: "20000" }
    },
    {
      id: 2,
      title: "On the Spot Award",
      organization: "TCS",
      date: "April 2019",
      description: "Handled alone a project revamp with the latest tech. and performance optimization by 40%.",
      icon: "🥇",
      color: "#6366f1",
      stats: { daysWorked: "180", rewardpoints: "2000" }
    },
    {
      id: 3,
      title: "Opn the Spot Team Award",
      organization: "TCS",
      date: "October 2018",
      description: "Created an internal app to resolve and automate the project hiring on level 1.",
      icon: "💻",
      color: "#0ea5e9",
      stats: { rewardPoints: "500" }
    }
  ];

  return (
    <section id='projects' className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-header">
          <span className="achievements-badge">Recognition</span>
          <h2 className="achievements-title">Achievements & Certifications</h2>
          <p className="achievements-subtitle">
            Milestones and recognitions that showcase my journey in tech
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`achievement-card ${activeCard === achievement.id ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveCard(achievement.id)}
              onMouseLeave={() => setActiveCard(null)}
              style={{ '--accent-color': achievement.color }}
            >
              <div className="achievement-card__glow"></div>
              
              <div className="achievement-card__icon">
                <span>{achievement.icon}</span>
              </div>

              <div className="achievement-card__content">
                <h3 className="achievement-card__title">{achievement.title}</h3>
                <div className="achievement-card__meta">
                  <span className="achievement-card__org">{achievement.organization}</span>
                  <span className="achievement-card__separator">•</span>
                  <span className="achievement-card__date">{achievement.date}</span>
                </div>
                <p className="achievement-card__description">{achievement.description}</p>

                <div className="achievement-card__stats">
                  {Object.entries(achievement.stats).map(([key, value]) => (
                    <div key={key} className="achievement-stat">
                      <span className="achievement-stat__value">{value}</span>
                      <span className="achievement-stat__label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="achievement-card__shine"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Highlights;