import React from 'react';
import './Dashboard.css';

const Dashboard = ({ plan, calories, onReset }) => {
    return (
        <div className="dashboard animate-fade-in">
            <div className="dashboard-header card">
                <div className="dashboard-title-area">
                    <h2>Your Personalized Plan</h2>
                    <p>Stick to this plan to reach your goals.</p>
                </div>
                <div className="calorie-summary">
                    <div className="calorie-box">
                        <span className="calorie-label">Daily Target</span>
                        <span className="calorie-value">{calories} <small>kcal</small></span>
                    </div>
                    <button className="btn btn-outline reset-btn" onClick={onReset}>
                        Start Over
                    </button>
                </div>
            </div>

            <div className="plan-grid">
                {plan.map((dayPlan, index) => (
                    <div
                        key={dayPlan.day}
                        className={`card day-card animate-slide-up stagger-${(index % 4) + 1}`}
                    >
                        <div className="day-header">
                            <h3>Day {dayPlan.day}</h3>
                        </div>

                        <div className="meal-section">
                            <span className="meal-type">Breakfast</span>
                            <p className="meal-desc">{dayPlan.breakfast}</p>
                        </div>

                        <div className="meal-section">
                            <span className="meal-type">Lunch</span>
                            <p className="meal-desc">{dayPlan.lunch}</p>
                        </div>

                        <div className="meal-section">
                            <span className="meal-type">Snack</span>
                            <p className="meal-desc">{dayPlan.snack}</p>
                        </div>

                        <div className="meal-section">
                            <span className="meal-type">Dinner</span>
                            <p className="meal-desc">{dayPlan.dinner}</p>
                        </div>

                        <div className="water-section">
                            <span className="water-icon">💧</span>
                            <span>{dayPlan.water}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
