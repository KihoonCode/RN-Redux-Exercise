import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => {
    const favoriteMeals = useSelector(state => state.meals.favoriteMeal);

    /**
     * Renders appropriate meal based on selected category.
     */
    const renderMealItems = itemData => {
        const isFav = favoriteMeals.some(meal => meal.id === itemData.item.id);

        return (
            <MealItem
                onSelected={() => {
                    props.navigation.navigate(
                        {
                            routeName: 'MealDetail',
                            params: {
                                mealId: itemData.item.id,
                                title: itemData.item.title,
                                isFav: isFav 
                            }
                        })
                }}
                title={itemData.item.title}
                bgImage={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.data}
                renderItem={renderMealItems}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
});

export default MealList;