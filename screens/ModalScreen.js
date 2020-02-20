import React from 'react';
import { Stylesheet, View, Button, Linking } from 'react-native';
import Modal from "react-native-modal";

const ModalScreen = props => {
    return (
        <Modal 
            isVisible={props.modalOpen}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={() => props.closeModal()}
            onSwipeComplete={() => props.closeModal()}
            hideModalContentWhileAnimating
        >
            <View>
                <Button 
                    title='Change Address'
                    onPress={() => props.navigation.navigate('Home')}
                />
                {/* Report Data Errors to Google */}
                <Button
                    title='Report Data Error'
                    onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScFpFTOkTpm0YoerLLprY_ySS9PRXLsu27SM01hebHqkefW2Q/viewform')}
                />
            </View>
        </Modal>
    )
}

export default ModalScreen;