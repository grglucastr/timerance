import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import {appStyles, Button} from '../../common'

class Stopwatch extends React.Component{

  state = { 
    running: false,
    runningTime: 0,
    limitTime: 3,
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
    const proceed = window.confirm('All the data will be lost! Are you sure?');
    if(proceed){

      this.setState({ 
        running: false,
        runningTime: 0,
        limitTime: 3,
        laps: [],
      });

    }
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
        
        <Button clickAction={this.handleClick} style={{width:100}}>
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

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <Button clickAction={this.resetTimer} >Restart</Button>
          <Button>Save</Button>
        </View>

        
      </View>
    )
  }
}

export default Stopwatch;