import React from 'react';
import {View, Text, Modal, TouchableOpacity, Image} from 'react-native';
import { appStyles } from '../../common';

const ModalNFC = ({isVisible, onModalClose}) => {
  return(
    <Modal  transparent={true}
            visible={isVisible}>

      <View style={appStyles.modal}>            
        <View style={appStyles.modalContentContainer}>
          
          <Image
            style={{width: 100, height: 80}}
            source={require('../../../img/card_nfc.png')} />

            <Text style={ appStyles.modalText }>
              Approach the badge near to the NFC Reader in 
              order to get the employee's information.
            </Text>

            <TouchableOpacity onPress={onModalClose}
                              style={ appStyles.button }>
              <Text style={ appStyles.buttonCancelText }>
                Cancel
              </Text>
            </TouchableOpacity>          
        </View>
      </View>
    </Modal>
  );

}

export default ModalNFC;