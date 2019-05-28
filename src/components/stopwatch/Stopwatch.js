import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {appStyles} from '../../common'

class Stopwatch extends React.Component{

  state ={
    status: false,
    runningTime: 0,
  }

  handleClick = () => {
    this.setState(state => {
      if(state.status){
        clearInterval(this.timer);
      }else{
        const startTime = Date.now() - state.runningTime;
        this.timer = setInterval(() => {
          this.setState({runningTime: Date.now() - startTime });
        });
      }
      return { status: !state.status };
    });
  }

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ runningTime: 0, running: false });
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }


  render(){
    const { status, runningTime } = this.state;

    return(
      <View>
        <Text>{runningTime}ms</Text>
        
        <TouchableOpacity
          onPress={this.handleClick}
          style={appStyles.button}>
          <Text style={appStyles.buttonText}>
            {status ? 'Stop' : 'Start'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={this.handleReset}
          style={appStyles.button}>
          <Text style={appStyles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Stopwatch;