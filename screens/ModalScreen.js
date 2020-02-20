import React from 'react';
import { Stylesheet, View, Button } from 'react-native';
import Modal from "react-native-modal";

const ModalScreen = props => {
    return (
        <Modal 
            isVisible={props.modalOpen}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={() => props.closeModal()}
            onSwipeComplete={() => props.closeModal()}

            backdropColor='black'
            backdropOpacity={0.1}
        >
            <View>
                <Button 
                    title='Change Address'
                    onPress={() => props.navigation.navigate('Home')}
                />
            </View>
        </Modal>
    )
}

export default ModalScreen;