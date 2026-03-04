export const calculateCalories = (age, gender, weight, height, activityLevel, goal) => {
    // Using precise Mifflin-St Jeor Equation based on gender
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);

    if (gender === 'male') {
        bmr += 5;
    } else {
        bmr -= 161;
    }

    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725
    };

    const tdee = Math.round(bmr * (activityMultipliers[activityLevel] || 1.2));

    let targetCalories = tdee;
    if (goal === 'loss') targetCalories -= 500;
    if (goal === 'gain') targetCalories += 500;

    return {
        tdee,
        targetCalories: Math.max(1200, targetCalories) // Minimum safe calories
    };
};

const mealsDatabase = {
    vegetarian: {
        breakfast: [
            "Puttu with Kadala Curry and a serving of Papadam",
            "Appam with Vegetable Stew",
            "Idli with Sambar and Coconut Chutney",
            "Dosa with Tomato Chutney and Sambar",
            "Upma with mixed vegetables and Bananas",
            "Kerala style Aval (Poha) with grated coconut",
            "Oats porridge with almonds and apple slices"
        ],
        lunch: [
            "Kerala Matta Rice with Parippu (Dal), Cabbage Thoran, and Moru (Buttermilk)",
            "Chapati with Paneer Butter Masala and Cucumber Salad",
            "Vegetable Biryani with Raita and Pappadam",
            "Matta Rice with Sambar, Beans Mezhukkupuratti, and Pickle",
            "Quinoa Palak (Spinach) Khichdi with Curd",
            "Kerala Sadya style Rice with Avial, Olan, and Kalan",
            "Roti with Mixed Vegetable Kurma and Mixed Salad"
        ],
        dinner: [
            "Chapati with Green Gram (Cherupayar) Curry",
            "Wheat Dosa with Chutney",
            "Vegetable Soup with 2 Slices Whole Wheat Bread",
            "Idiyappam with Vegetable Mappas",
            "Kanji (Rice Gruel) with Payar (Green Gram) and Pappadam",
            "Roti with Dal Tadka and a side of Greens",
            "Paneer Tikka with Mint Chutney and a light Salad"
        ],
        snacks: [
            "Roasted Makhana (Fox nuts)",
            "Pazham Pori (Banana Fritters) - baked/air-fried version",
            "A handful of Almonds and Walnuts",
            "Roasted Peanuts with Jaggery",
            "Fresh tender coconut water",
            "Bowl of sliced Papaya or Watermelon",
            "Sprouted Moong Dal Chaat"
        ]
    },
    'non-vegetarian': {
        breakfast: [
            "Appam with Egg Roast",
            "Puttu with Mutta (Egg) Curry",
            "Idiyappam with Chicken Stew",
            "2 Boiled Eggs with Whole Wheat Bread",
            "Chicken Keema stuffed Paratha with Curd",
            "Dosa with Egg Bhurji",
            "Omelette (2 eggs) with sautéed mushrooms and spinach"
        ],
        lunch: [
            "Matta Rice with Kerala Fish Curry (Meen Curry) and Cabbage Thoran",
            "Chicken Biryani (measured portion) with Raita",
            "Rice with Beef Ularthiyathu and Moru Curry (Buttermilk)",
            "Chapati with Chicken Curry and Cucumber Salad",
            "Matta Rice with Prawn Roast and Moru",
            "Grilled Fish with Steamed Vegetables",
            "Quinoa with Kerala Chicken Roast and Salad"
        ],
        dinner: [
            "Chapati with Chicken Kurma",
            "Appam with Fish Moly (Fish in Coconut Milk)",
            "Grilled Chicken Breast with sautéed broccoli",
            "Wheat Dosa with Egg Curry",
            "Clear Chicken Soup with a slice of bread",
            "Kerala style Fish Fry (shallow fried) with Salad",
            "Roti with Mutton Stew"
        ],
        snacks: [
            "Boiled Egg white (2 pieces)",
            "A handful of Almonds and Walnuts",
            "Fresh fruit bowl (Apple/Banana)",
            "Tender coconut water",
            "Roasted seeds (Pumpkin/Sunflower)",
            "Peanut Butter on Apple slices",
            "Spicy Boiled Chana (Chickpeas)"
        ]
    },
    vegan: {
        breakfast: [
            "Puttu with Kadala Curry",
            "Appam with Vegetable Stew (Coconut milk base)",
            "Idli with Sambar and Coconut Chutney",
            "Upma with mixed vegetables",
            "Oats cooked in Almond milk with fruits",
            "Kerala style Aval (Poha) with jaggery and coconut",
            "Smoothie with Banana, Spinach, and Peanut Butter"
        ],
        lunch: [
            "Matta Rice with Parippu, Cabbage Thoran, and Avial",
            "Vegetable Biryani with simple Cucumber Salad",
            "Matta Rice with Sambar and Beans Mezhukkupuratti",
            "Quinoa Khichdi with lots of veggies",
            "Roti with Mixed Vegetable Kurma",
            "Rice with Dal Makhani (vegan version) and Salad",
            "Chickpea (Chole) Curry with Rice"
        ],
        dinner: [
            "Chapati with Green Gram (Cherupayar) Curry",
            "Idiyappam with Vegetable Mappas",
            "Kanji (Rice Gruel) with Payar (Green Gram)",
            "Tofu Curry with Roti",
            "Vegetable clear soup with salad",
            "Wheat Dosa with Chutney",
            "Soya Chunks dry roast with Chapati"
        ],
        snacks: [
            "Roasted Makhana",
            "A handful of mixed nuts",
            "Roasted Peanuts",
            "Fresh tender coconut water",
            "Bowl of sliced fruits",
            "Sprouted Moong Dal Chaat",
            "Roasted Chickpeas"
        ]
    }
};

export const generateDietPlan = (dietPref) => {
    const pref = dietPref.toLowerCase();
    const db = mealsDatabase[pref] || mealsDatabase.vegetarian;

    const plan = [];

    for (let i = 1; i <= 7; i++) {
        plan.push({
            day: i,
            breakfast: db.breakfast[(i - 1) % db.breakfast.length],
            lunch: db.lunch[(i - 1) % db.lunch.length],
            dinner: db.dinner[(i - 1) % db.dinner.length],
            snack: db.snacks[(i - 1) % db.snacks.length],
            water: "2.5 - 3 Liters"
        });
    }

    // Shuffle arrays occasionally or just use standard rotation
    return plan;
};
