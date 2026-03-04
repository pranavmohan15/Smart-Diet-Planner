# Smart Diet Planner

Smart Diet Planner is a modern, responsive web application that generates personalized 7-day diet plans. Tailored specifically with Indian and Kerala cuisine preferences, it calculates your daily caloric needs and provides a clear, day-by-day meal guide to help you reach your health goals.

## 🚀 Features

- **Personalized Calorie Calculation**: Uses the Mifflin-St Jeor Equation to calculate your Total Daily Energy Expenditure (TDEE) and target calories based on your age, gender, height, weight, activity level, and health goal.
- **Customized Meal Plans**: Generates a full 7-day meal plan (Breakfast, Lunch, Dinner, Snacks) based on your selected diet preference:
  - Vegetarian
  - Non-Vegetarian
  - Vegan
- **Indian/Kerala Cuisine Focus**: Meal suggestions include popular and healthy regional dishes like Appam, Puttu, Matta Rice, and various curries/stews.
- **Hydration Tracking**: Includes daily water intake recommendations.
- **Premium Dark UI**: Features a sleek, modern dark mode design with vibrant accents, glassmorphism effects, and smooth animations.
- **Fully Responsive**: Optimized for seamless use across desktops, tablets, and mobile devices.
- **Client-Side Only**: Runs entirely in the browser with no backend or login required. Your data stays private.

## 🛠️ Tech Stack & Frontend Details

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) - For lightning-fast Hot Module Replacement (HMR) and optimized builds.
- **Styling**: Pure CSS (Vanilla CSS) using modern features like CSS Variables, Grid, Flexbox, and backdrop-filter for glassmorphism.
- **Typography**: [Outfit](https://fonts.google.com/specimen/Outfit) font from Google Fonts.
- **Icons**: SVG-based minimalistic icons.

### Project Structure
- `src/App.jsx`: Main application component, manages state (user info, generated plan) and handles navigation between the input form and the dashboard.
- `src/components/InputForm.jsx`: The data entry form where users input their biometrics and preferences.
- `src/components/Dashboard.jsx`: Displays the generated 7-day plan, daily calorie target, and provides an option to start over.
- `src/utils/dietGenerator.js`: The core logic engine. It contains the calorie calculation formulas and the extensive database of meal options, handling the generation of the final 7-day array.
- `src/index.css` & `src/App.css`: Global styles, theme variables, and component-specific styling.

## 🏃‍♂️ Running Locally

1. **Clone or Download the repository.**
2. **Navigate to the project directory:**
   ```bash
   cd "Smart Diet Planner"
   ```
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).
