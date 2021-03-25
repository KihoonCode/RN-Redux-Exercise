import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Platform, Switch } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from '../components/CustomHeaderButton';
import Colors from '../constants/Colors'

const CustomSwitch = props => {
    return (
        <View style={styles.filterSwitch}>
            <Text style={styles.filterTitle}>{props.title}</Text>
            <Switch
                value={props.value}
                onValueChange={(newValue) => props.setValue(newValue)}
                trackColor={{ true: Colors.primaryColor }}
            />
        </View>
    );
};

const FilterScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegitarian, setIsVegitarian] = useState(false);

    const saveFilter = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegitarian: isVegitarian
        };

        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegitarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilter});
    }, [saveFilter]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <CustomSwitch
                title="Gluten-free"
                value={isGlutenFree}
                setValue={setIsGlutenFree}
            />
            <CustomSwitch
                title="Lactose-free"
                value={isLactoseFree}
                setValue={setIsLactoseFree}
            />
            <CustomSwitch
                title="Vegan"
                value={isVegan}
                setValue={setIsVegan}
            />
            <CustomSwitch
                title="Vegitarian"
                value={isVegitarian}
                setValue={setIsVegitarian}
            />
        </View>
    );
};

FilterScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Filter Meals',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Drawer Nav'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Drawer Nav'
                    iconName='ios-save'
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center'
    },
    title: {
        padding: 10,
        textAlign: 'center',
        fontSize: 22,
        fontFamily: 'open-sans-bold'
    },
    filterSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 50
    },
    filterTitle: {
        fontFamily: 'open-sans-bold'
    }
});

export default FilterScreen;