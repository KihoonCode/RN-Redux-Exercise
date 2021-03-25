import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import { MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const ListItem = props => {
    return (
        <View>
            {props.list.map(element => {
                return (
                    <View style={styles.listItem}>
                        <Text>{element}</Text>
                    </View>
                );
            })}
        </View>
    );
};

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const mealTitle = props.navigation.getParam('title');

    const meal = MEALS.find(elem => elem.id === mealId);

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: meal.imageUrl }} />
            <View style={styles.detail}>
                <Text>{meal.duration}</Text>
                <Text>{meal.complexity}</Text>
                <Text>{meal.affordability}</Text>
            </View>
            <Text style={styles.titleText}>Ingredients</Text>
            <ListItem list={meal.ingredients} />
            <Text style={styles.titleText}>Steps</Text>
            <ListItem list={meal.steps} />
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = navigationData => {
    const title = navigationData.navigation.getParam('title');

    return {
        headerTitle: title,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorite Icon'
                    iconName='ios-star'
                    onPress={() => console.log("Favorite Icon Pressed")}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    detail: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: Colors.accentColor
    },
    listItem: {
        marginVertical: 5,
        marginHorizontal: 3,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    titleText: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'open-sans-bold',
        marginTop: 15
    }
});

export default MealDetailScreen;