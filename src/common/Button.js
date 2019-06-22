import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({clickAction, children=null, ...rest}) => {
  return (
    <View>
      <TouchableOpacity {...rest}
                      style={rest.disabled ? styles.buttonDisabled: styles.button}
                      onPress={clickAction}>
        <Text style={rest.disabled ? styles.buttonDisabledText : styles.buttonText}>
          {children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button;