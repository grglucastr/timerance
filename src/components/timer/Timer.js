import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {appStyles} from '../../common';

class Timer extends React.Component{

  state = {
    milis: 0,
    second: 0,
    minute: 0,
    hour: '00',
  }

  componentDidMount(){
    this.mounted = true;
    setInterval(function(){

      let millis = new Date().getMilliseconds();
      let minutes = new Date().getMinutes();
      let second = new Date().getSeconds();

      if(this.mounted){
        this.setState(state => ({
          ...state,
          minute: minutes < 10 ? `0${minutes}` : minutes,
          second: second < 10 ? `0${second}` : second,
          milliseconds: millis < 1000 ? `0${millis}` : millis,
        }));
      }
      
    }.bind(this), 0.1);   
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.time}>
          {this.state.minute}:{this.state.second}:{this.state.milliseconds}
        </Text>
        <TouchableOpacity style={[appStyles.button, {marginTop: '10%', height: '30%',  justifyContent: 'center', borderRadius: 100}]}>
          <Text style={[appStyles.buttonText, {fontSize:30, fontWeight: 'bold', }]}>
            Track
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  time:{
    fontWeight: 'bold',
    fontSize:55,
    marginTop: 45,
  },
})

export default Timer;