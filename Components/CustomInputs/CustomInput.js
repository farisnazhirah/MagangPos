import { View, StyleSheet } from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        setValue={setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}>
      </TextInput>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6E6E6',
    width: '100%',

    borderColor: '#E6E6E6',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
  },
  input: {
    paddingHorizontal: 10,
  },
});

export default CustomInput;
