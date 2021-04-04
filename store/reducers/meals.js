import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import { SET_FILTERS } from '../actions/meals';

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
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updatedFilteredMeals};
        default:
            return state;
    }
};

export default mealsReducer;