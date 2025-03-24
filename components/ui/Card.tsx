import React from 'react';
import { StyleSheet, Text, Pressable, PressableProps } from 'react-native';

type CardProps = {
    color: string;
    value: string;
    onPress?: () => void;
} & PressableProps;

export const Card = ({ color, onPress, ...rest }: CardProps) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.card, 
                { backgroundColor: color },
                pressed && styles.pressed
            ]}
            onPress={onPress}
            {...rest}
        >
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        alignItems: 'center',
        borderRadius: 8,
        elevation: 5,
        justifyContent: 'center',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    pressed: {
        opacity: 0.7,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    },
});