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
    KeyboardAvoidingView, 
    AsyncStorage 
} from 'react-native';
import { connect } from 'react-redux';

// Import Actions
import { getReps } from '../actions/index';

// Import Components
import GoogleAutoComplete from '../components/GoogleAutoComplete';

const AddressForm = props => {

    const [userAddress, setAddress] = useState('');
    const [completeAddress, setCompleteAddress] = useState('');
    const [addressError, setAddressError] = useState(false);

    // Store user address to AsyncStorage
    // storeAddress = async () => {
    //     try {
    //         await AsyncStorage.setItem('address', userAddress)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // 

    // Submit user address
    submitAddress = () => {
        if (userAddress.length === 0) {
            setAddressError(true);
        } else {
            props.getReps(completeAddress);
            // storeAddress();
            setCompleteAddress('');
            setAddress('')
            props.navigation.navigate('My Representatives');
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <ImageBackground 
                    source={require('../img/background.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.content}>
                        <Text style={styles.mainHeading}>Welcome to Find My Reps</Text>
                        <Text style={styles.subHeading}>Find My Reps is provided as a public service to find your elected officials along with their website, email, phone number, and mailing address.</Text>
                        <KeyboardAvoidingView 
                            style={styles.shiftingContainer}
                            behavior='position'
                            keyboardVerticalOffset={15}
                            enabled
                        >
                            <View style={styles.textInputWrapper}>
                                <Text style={styles.addressText}>Please enter your registered voting address</Text>
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
                                    activeOpacity={0.7}
                                    onPress={submitAddress}
                                    style={styles.submitButton}
                                >
                                    <Text style={styles.buttonText}>Submit</Text>
                                </TouchableOpacity>
                                {addressError && (
                                    <Text style={styles.errorMessage}>Please enter a valid address</Text>
                                )}
                            </View>
                        </KeyboardAvoidingView>
                    </View>
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
    shiftingContainer: {
        height: 400
    },
    textInputWrapper: {
        backgroundColor: '#B7D8D6',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        height: 170
    },
    mainHeading: {
        fontSize: 25,
        textAlign: 'center',
        paddingBottom: 10
    },
    subHeading: {
        fontSize: 15,
        textAlign: 'center',
        paddingBottom: 20
    },
    addressText: {
        textAlign: 'center',
        paddingBottom: 10
    },
    textInput: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        padding: 5,
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },
    submitButton: {
        width: 140,
        height: 40,
        bottom: 20,
        backgroundColor: 'blue',
        alignSelf: 'center',
        position: 'absolute'
    },
    buttonText: {
        textAlign: 'center',
        lineHeight: 40
    },
    errorMessage: {
        textAlign: 'center',
        color: 'red'
    }
  });

export default connect(mapStateToProps, {getReps})(AddressForm);