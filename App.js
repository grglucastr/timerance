import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './components/home';

export default class App extends React.Component {
  render() {
    return (
      <Home />   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
