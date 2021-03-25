import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import Colors from '../constants/Colors';

const MealItem = props => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onSelected}>
                <View>
                    <View style={styles.mealMain}>
                        <ImageBackground
                            style={styles.bgImage}
                            source={{ url: props.bgImage }}
                        >
                            <View style={styles.title}>
                                <Text>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={styles.mealDetail}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity}</Text>
                        <Text>{props.affordability}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: Colors.accentColor,
        marginVertical: '5%',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealMain: {
        height: '90%',
        flexDirection: 'row'
    }, 
    title: {
        backgroundColor: Colors.accentColor,
        padding: 5
    },
    bgImage: {
        height: '100%',
        width: '100%'
    }
    ,
    mealDetail: {   
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        backgroundColor: Colors.accentColor
    }
});

export default MealItem;