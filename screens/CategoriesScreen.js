import React from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from '../components/CustomHeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    /**
     * Returns touchable category menu that is linked to corresponding detail menu.
     */
    const renderData = itemData => {
        return (
            <CategoryGridTile
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals',
                        params: {
                            categoryID: itemData.item.id
                        }
                    })
                }}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        );
    }

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderData}
        />
    );
};

// Top header style 
CategoriesScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='DrawerNav'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    };
}

// Ovearall Style
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default CategoriesScreen;