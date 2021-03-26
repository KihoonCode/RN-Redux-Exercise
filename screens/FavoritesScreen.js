import React from 'react';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeal);

    return (
        <MealList data={favoriteMeals} navigation={props.navigation} />
    );
};

export default FavoritesScreen;