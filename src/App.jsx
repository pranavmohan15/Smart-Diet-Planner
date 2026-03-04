import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import Dashboard from './components/Dashboard'
import { generateDietPlan, calculateCalories } from './utils/dietGenerator'

function App() {
  const [dietPlan, setDietPlan] = useState(null)
  const [calories, setCalories] = useState(0)
  const [userInfo, setUserInfo] = useState(null)

  const handleGeneratePlan = (userData) => {
    setUserInfo(userData)

    const calData = calculateCalories(
      userData.age,
      userData.gender,
      userData.weight,
      userData.height,
      userData.activityLevel,
      userData.goal
    )

    const newPlan = generateDietPlan(userData.diet)

    setDietPlan(newPlan)
    setCalories(calData.targetCalories)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRegenerate = () => {
    if (userInfo) {
      const newPlan = generateDietPlan(userInfo.diet)
      setDietPlan(newPlan)
    }
  }

  const handleReset = () => {
    setDietPlan(null)
    setCalories(0)
    setUserInfo(null)
  }

  return (
    <div className="app-container slide-up">
      <header className="header">
        <h1>Smart Diet Planner</h1>
        <p>Your personalized 7-day Kerala/Indian meal guide</p>
      </header>

      <main className="main-content container">
        {!dietPlan ? (
          <InputForm onSubmit={handleGeneratePlan} />
        ) : (
          <Dashboard
            plan={dietPlan}
            calories={calories}
            userInfo={userInfo}
            onRegenerate={handleRegenerate}
            onReset={handleReset}
          />
        )}
      </main>

      <footer className="footer">
        <p>© 2026 Smart Diet Planner. Free tools for a healthier life.</p>
      </footer>
    </div>
  )
}

export default App
