import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Button = ({clickAction, children=null}) => {
  return (
    <TouchableOpacity style={styles.button}
                      onPress={clickAction}>
      <Text style={styles.buttonText}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

export default Button;