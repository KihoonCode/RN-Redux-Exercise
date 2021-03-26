import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeal: []
};

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const currIndex = state.favoriteMeal.findIndex(
                meal => meal.id === action.mealId
            );
            if (currIndex >= 0) {
                const updatedFavs = [...state.favoriteMeal];
                updatedFavs.splice(currIndex, 1);
                return { ...state, favoriteMeal: updatedFavs };
            } else {
                const newMeal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeal: state.favoriteMeal.concat(newMeal) };
            }
        default:
            return state;
    }
};

export default mealsReducer;