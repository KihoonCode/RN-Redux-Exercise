import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    // user selected meal 
    const selectedMeals = MEALS.filter(meal =>
        meal.categoryIds.indexOf(categoryID) >= 0);

    return (
        <MealList data={selectedMeals} navigation={props.navigation} />
    );
};

CategoryMealScreen.navigationOptions = navigationData => {
    const categoryID = navigationData.navigation.getParam('categoryID');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);

    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealScreen;