import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {appStyles, Button} from '../../common'

class Stopwatch extends React.Component{

  state = { 
    running: false,
    runningTime: 0,
    laps: [],
  }

  handleClick = () => {
  
    if(!this.state.running){
      this.startTimer();
      return ;
    }

    this.trackLaps();
    
    /*
    stopTimer();
    resetTimer();
    */

    

  }

  startTimer = () => {
    this.setState(state => {
      const startDate = new Date();
      this.timer = setInterval(() => {
        this.setState({runningTime: new Date() - startDate});
      });
      return { ...state, running: true, }
    });
  }

  trackLaps = () => {
    
    const { runningTime } = this.state;
    this.setState(state => ({
      ...state,
      laps: [...state.laps, runningTime],
      runningTime: 0,
    }));

    clearInterval(this.timer);
    this.startTimer();

    console.log('laps', this.state.laps);
    
    
  }

  stopTimer = () => {

  }

  resetTimer = () => {

  }

  handleReset = () => {
    clearInterval(this.timer);  
  }

  componentWillUnmount(){
    
  }


  render(){
    const { running, runningTime, laps } = this.state;
    
    return(
      <View>
        
        <Text>{ runningTime }</Text>

        <Button clickAction={this.handleClick}>
          { running ? 'Lap' : 'Start' }
        </Button>


        <View>
          <Text>Laps:</Text>
          {laps.map(({lap}) => <Text key={lap} >{lap}</Text>)}

        </View>

        
      </View>
    )
  }
}

export default Stopwatch;