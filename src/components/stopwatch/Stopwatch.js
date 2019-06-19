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
        this.setState( state => ({
          ...state,
          runningTime: new Date() - startDate
        }));
      });
      return { ...state, running: true, }
    });
  }

  trackLaps = () => {
    
    const { runningTime } = this.state;
    this.setState(state => ({
      ...state,
      laps: [...state.laps, runningTime],
      running: false,
      runningTime: 0,
    }));

    clearInterval(this.timer);    
  }

  stopTimer = () => {

  }

  resetTimer = () => {

  }

  handleReset = () => {
    clearInterval(this.timer);  
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }


  render(){
    const { running, runningTime} = this.state;
    
    return(
      <View>
        
        <Text style={appStyles.timerText}>{ runningTime }</Text>
        
        <Button clickAction={this.handleClick}>
          { running ? 'Stop' : 'Start' }
        </Button>


        <View>
          <Text>Laps:</Text>
          {
            this.state.laps.map(lap => {
              return <Text key={lap}>{lap}</Text>
            })
          }

        </View>

        
      </View>
    )
  }
}

export default Stopwatch;