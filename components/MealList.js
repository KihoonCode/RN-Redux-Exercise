import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native'

import MealItem from './MealItem';

const MealList = props => {
    /**
     * Renders appropriate meal based on selected category.
     */
    const renderMealItems = itemData => {
        return (
            <MealItem
                onSelected={() => {
                    props.navigation.navigate(
                        {
                            routeName: 'MealDetail',
                            params: {
                                mealId: itemData.item.id,
                                title: itemData.item.title
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