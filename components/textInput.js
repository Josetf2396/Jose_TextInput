import {TextInput as NativeTextInput } from 'react-native';
import React from 'react';
import {styles} from './textInput.sytles';


export const TextInput = ({
  isSensitive = false,
  style:customStyles,
  ...rest
}) => {

  return (
    <NativeTextInput
      style={[styles.textInputStyles, customStyles]}
      secureTextEntry={isSensitive}
      {...rest}
    />
  );
};