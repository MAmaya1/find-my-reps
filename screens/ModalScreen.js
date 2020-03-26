import React from 'react';
import { StyleSheet, View, Button, Linking, TouchableOpacity, Text, Dimensions } from 'react-native';
import Modal from "react-native-modal";

const ModalScreen = props => {
    return (
        <Modal 
            isVisible={props.modalOpen}
            animationIn='fadeIn'
            animationOut='fadeOut'
            onBackdropPress={() => props.closeModal()}
            onSwipeComplete={() => props.closeModal()}
            hideModalContentWhileAnimating={true}
        >
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => { props.closeModal(); return props.navigation.navigate('Address Form')}}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Change Address</Text>
                </TouchableOpacity>

                <View style={styles.bottomButton}>
                    {/* Report Data Errors to Google */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLScFpFTOkTpm0YoerLLprY_ySS9PRXLsu27SM01hebHqkefW2Q/viewform')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Report Data Error</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        height: 160,
        width: Dimensions.get('window').height > 1000 ? Dimensions.get('window').width * .60 : 'auto',
        marginLeft: Dimensions.get('window').height > 1000 ? 'auto' : 30,
        marginRight: Dimensions.get('window').height > 1000 ? 'auto' : 30,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#86B0AC'
    },
    button: {
        height: 80,
        margin: 0
    },
    bottomButton: {
        borderTopWidth: 1,
        borderColor: '#FFF',
        width: '100%'
    },
    buttonText: {
        lineHeight: 80,
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default ModalScreen;