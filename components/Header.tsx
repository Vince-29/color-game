import React from "react";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

//just create a header with "Color Game"
export const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>COLOR GAME</Text>
        </View>

    )


};

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: '800',
        marginBottom: 10,
    },
    container: {
        backgroundColor: 'white',
        borderColor: '#F3F4F6',
        paddingTop: 16,
        paddingLeft: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
});
