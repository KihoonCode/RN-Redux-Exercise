import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
    const categoryID = props.navigation.getParam('categoryID');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const selectedMeals = availableMeals.filter(meal =>
        meal.categoryIds.indexOf(categoryID) >= 0);

    if (selectedMeals.length === 0) {
        return (
            <View style={styles.defaultText}>
                <Text> No meals found with applied filters.</Text>
            </View>
        );
    }

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

const styles = StyleSheet.create({
    defaultText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealScreen;