import React from 'react';
import { StyleSheet, Pressable, PressableProps, View } from 'react-native';

type CardProps = {
    color: string;
    value: string;
    isSelected?: boolean;
    onPress?: () => void;
} & PressableProps;

export const Card = ({ color, isSelected, onPress, ...rest }: CardProps) => {
    return (
        <Pressable 
            style={({ pressed }) => [
                styles.card, 
                { backgroundColor: color },
                pressed && styles.pressed,
                isSelected && styles.selected
            ]}
            onPress={onPress}
            {...rest}
        >
            {isSelected && <View style={styles.selectionIndicator} />}
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
    selected: {
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    selectionIndicator: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        right: 10,
        top: 10,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '800',
    },
});