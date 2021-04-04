import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';

const FavoritesScreen = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeal);

    if (favoriteMeals.length === 0 || !favoriteMeals) {
        return (
            <View style={styles.defaultText}>
                <Text>No Favorite meals found. Start adding some!</Text>
            </View>
        );
    }

    return (
        <MealList data={favoriteMeals} navigation={props.navigation} />
    );
};

const styles = StyleSheet.create({
    defaultText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;