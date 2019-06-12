import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {appStyles} from '../../common'

class Stopwatch extends React.Component{

  state ={
    status: false,
    minute:0,
    second:0,
    milliseconds:0,
    runningTime: 0,
  }

  handleClick = () => {
    this.setState(state => {
      if(state.status){
        clearInterval(this.timer);
      }else{
        let startTime = Date.now() - state.runningTime;
        this.timer = setInterval(() => {

          let runningTime = Date.now() - startTime;
          let second = runningTime / 1000;
          let minute = this.state.minute;

          if(second >= 60){
            startTime =  Date.now() - state.runningTime;
            minute++;
          }

          this.setState(currentState => ({
            ...currentState,
            runningTime,
            second,
            minute,
          }));
          
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
    const { status, runningTime, second, minute } = this.state;
    
    return(
      <View>
        <Text>{minute}:{second}</Text>
        
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