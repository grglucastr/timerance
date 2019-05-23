import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, FlatList } from 'react-native';
import {appStyles} from '../../common'
import { ScrollView } from 'react-native-gesture-handler';

class Timer extends React.Component{

  state = {
    milliseconds: 0,
    second: 0,
    minute: 0,
    hour: '00',
    times: [],
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

  onTrackTime = () => {
    const { hour, minute, second, milliseconds } = this.state;
    const time = `${hour}:${minute}:${second}:${milliseconds}`;
    this.setState(state => ({
      ...state,
      times: state.times.length > 0 ? [...state.times, time] : [time],
    }));
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  render(){

    const {times} = this.state;

    return(
      <View style={styles.container}>
        <Text style={styles.time}>
          {this.state.minute}:{this.state.second}:{this.state.milliseconds}
        </Text>
        <TouchableOpacity 
          style={[appStyles.button, styles.trackButton]}
          onPress={this.onTrackTime}>
          <Text style={[appStyles.buttonText, styles.trackButtonText]}>
            Track
          </Text>
        </TouchableOpacity>

        <View style={styles.trackedTimeContainer}>
          <Text style={styles.trackedTimeTitle}>
            Tracked Times
          </Text>

          <FlatList 
            data={times}
            renderItem={({item}) => (
              <Text key={item}>{ item }</Text>
            )}>
          </FlatList>

        </View>
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
    color: '#000',
  },

  trackButton:{
    marginTop: '10%',
    height:'30%',
    justifyContent: 'center', 
    borderRadius: 100,
    elevation:2,
    shadowColor: 'black', 
  },

  trackButtonText:{
    fontSize:30, fontWeight: 'bold',
  },

  trackedTimeContainer: {
    alignSelf: 'flex-start', 
    marginLeft: 10
  },

  trackedTimeTitle:{
    alignSelf: 'flex-start', 
    fontWeight:'bold', 
    fontSize: 16, 
    marginTop: 30,
  },
})

export default Timer;