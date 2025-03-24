import React from 'react';
import { StyleSheet, TextInput as RNTextInput, TextInputProps as RNTextInputProps } from 'react-native';

type TextInputProps = {
  placeholder?: string;
} & RNTextInputProps;

export const TextInput = ({ placeholder, ...textInputProps }: TextInputProps) => {
  return <RNTextInput placeholder={placeholder} {...textInputProps} style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#e4e4e4',
    borderRadius: 8,
    fontSize: 16,
    padding: 16,
  },
});






