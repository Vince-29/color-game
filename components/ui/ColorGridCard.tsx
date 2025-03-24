// this will layout the card component in a 3 x 3 grid

import React from 'react';
import { FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Card } from './Card';

export const ColorGridCard = () => {
    const colors = [
        { id: '1', color: 'red', value: 'red' },
        { id: '2', color: 'green', value: 'green' },
        { id: '3', color: 'blue', value: 'blue' },
        { id: '4', color: 'yellow', value: 'yellow' },
        { id: '5', color: 'purple', value: 'purple' },
        { id: '6', color: 'pink', value: 'pink' },
        { id: '7', color: 'orange', value: 'orange' },
        { id: '8', color: 'brown', value: 'brown' },
        { id: '9', color: 'gray', value: 'gray' },
    ];

    type ColorItem = {
        id: string;
        color: string;
        value: string;
    };

    const renderItem = ({ item }: { item: ColorItem }) => (
        <View style={styles.cardContainer}>
            <Card color={item.color} value={item.value} />
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={colors}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 4,
        alignContent: 'center',
        justifyContent: 'center'
    },
    cardContainer: {
        flex: 1,
        padding: 5,
        height: Dimensions.get('window').width / 3.5,
    },
        
});
