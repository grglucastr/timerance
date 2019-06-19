import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width:'90%',
    alignSelf: 'center',
  },

  button: {
    backgroundColor: '#ccc',
    borderRadius:3,
    width:'60%',
    padding: 10,
    marginTop:25,
    alignSelf: 'center',
  },

  buttonText:{
    color: '#000',
    textAlign: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 1,
  },

  buttonCancelText:{
    color: '#c0392b',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  roundedImage:{
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  modal:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContentContainer:{
    width: 300,
    height: 250,
    backgroundColor: '#f5f6fa',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  
  modalText:{
    fontSize: 16,
    lineHeight:25,
    textAlign:'center',
    color: 'black',
  },

  timerText: {
    fontSize: 65,
    textAlign: 'center',
    marginTop:10,
  },

});
export default styles;