import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    TextInput,
    View, 
    ImageBackground, 
    TouchableWithoutFeedback, 
    TouchableOpacity,
    Keyboard, 
    KeyboardAvoidingView
} from 'react-native';
import { connect } from 'react-redux';

// Import Components
import GoogleAutoComplete from './GoogleAutoComplete';

// Import Actions
import { getReps } from '../actions/index';

const AddressForm = props => {

    const [userAddress, setAddress] = useState('');
    const [completeAddress, setCompleteAddress] = useState('');
    const [addressError, setAddressError] = useState(false);

    // Submit user address
    submitAddress = () => {
        if (userAddress.length === 0) {
            setAddressError(true);
        } else {
            props.getReps(completeAddress);
            setCompleteAddress('');
            setAddress('');
            props.navigation.navigate('My Representatives');
            setAddressError(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../img/background.png')}
                    style={styles.backgroundImage}
                >
                    <KeyboardAvoidingView
                        behavior='position'
                        keyboardVerticalOffset={180}
                    >
                        <View style={styles.content}>
                            <Text style={styles.mainHeading}>Welcome to Find My Reps</Text>
                            <Text style={styles.subHeading}>Find My Reps is provided as a public service to find your elected officials along with their website, email, phone number, and mailing address.</Text>
                            <View style={styles.textInputWrapper}>
                                {!addressError ?
                                    <Text style={styles.addressText}>Please enter your registered voting address</Text> 
                                    : <Text style={styles.errorMessage}>Please enter your registered voting address</Text>
                                }
                                <TextInput
                                    placeholder='Search'
                                    style={styles.textInput}
                                    onChangeText={text => setAddress(text)}
                                    defaultValue={completeAddress}
                                />

                                {/* Address Autocomplete */}
                                <GoogleAutoComplete 
                                    userInput={userAddress} 
                                    setCompleteAddress={setCompleteAddress} 
                                />

                                {/* Submit Button */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={submitAddress}
                                    style={styles.submitButton}
                                >
                                    <Text style={styles.buttonText}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

// Map State to Props

const mapStateToProps = state => {
    return {
        reps: state.reps
    }
}

// StyleSheet

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    content: {
        marginTop: 70,
        marginLeft: 30,
        marginRight: 30,
    },
    textInputWrapper: {
        backgroundColor: '#86B0AC',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 10,
        paddingRight: 10,
        minHeight: 170
    },
    mainHeading: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10
    },
    subHeading: {
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 40
    },
    addressText: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        padding: 5,
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#FAF9F7'
    },
    submitButton: {
        width: 140,
        height: 40,
        bottom: 20,
        backgroundColor: '#EED074',
        alignSelf: 'center',
        position: 'absolute'
    },
    buttonText: {
        textAlign: 'center',
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 1
    },
    errorMessage: {
        textAlign: 'center',
        color: '#CC3B33',
        paddingBottom: 10,
        letterSpacing: 0.1
    }
  });

export default connect(mapStateToProps, {getReps})(AddressForm);