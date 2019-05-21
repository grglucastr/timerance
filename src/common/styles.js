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

  roundedImage:{
    width: 80,
    height: 80,
    borderRadius: 40,
  }

});
export default styles;