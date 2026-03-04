import React, { useState } from 'react';
import './InputForm.css';

const InputForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        age: '',
        height: '',
        weight: '',
        activityLevel: 'sedentary',
        diet: 'vegetarian',
        goal: 'maintain'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            age: Number(formData.age),
            height: Number(formData.height),
            weight: Number(formData.weight),
            activityLevel: formData.activityLevel,
            diet: formData.diet,
            goal: formData.goal
        });
    };

    return (
        <div className="card form-card animate-slide-up">
            <h2 className="form-title">Enter Your Details</h2>
            <p className="form-subtitle">Let's craft the perfect diet plan for you.</p>

            <form onSubmit={handleSubmit} className="diet-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Age (years)</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                            required
                            min="10"
                            max="100"
                            placeholder="e.g. 25"
                        />
                    </div>
                    <div className="form-group">
                        <label>Height (cm)</label>
                        <input
                            type="number"
                            name="height"
                            value={formData.height}
                            onChange={handleChange}
                            required
                            min="100"
                            max="250"
                            placeholder="e.g. 175"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label>Weight (kg)</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        required
                        min="30"
                        max="200"
                        placeholder="e.g. 70"
                    />
                </div>

                <div className="form-group">
                    <label>Activity Level</label>
                    <select name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
                        <option value="sedentary">Sedentary (Little to no exercise)</option>
                        <option value="light">Lightly Active (Light exercise/sports 1-3 days/week)</option>
                        <option value="moderate">Moderately Active (Moderate exercise/sports 3-5 days/week)</option>
                        <option value="active">Very Active (Hard exercise/sports 6-7 days a week)</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Diet Preference</label>
                    <select name="diet" value={formData.diet} onChange={handleChange}>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-Vegetarian</option>
                        <option value="vegan">Vegan</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Health Goal</label>
                    <select name="goal" value={formData.goal} onChange={handleChange}>
                        <option value="maintain">Maintain Weight</option>
                        <option value="loss">Weight Loss</option>
                        <option value="gain">Muscle/Weight Gain</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                    Generate My Plan
                </button>
            </form>
        </div>
    );
};

export default InputForm;
