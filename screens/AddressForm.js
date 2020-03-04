import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

const AddressForm = props => {

    const [userAddress, setAddress] = useState(null);

    // Store user address to AsyncStorage
    storeAddress = async () => {
        try {
            await AsyncStorage.setItem('address', userAddress)
        } catch (error) {
            console.log(error)
        }
    }

    // Submit user address
    submitAddress = () => {
        // TODO: add address validation besides successful API call
        storeAddress();
        props.navigation.navigate('My Representatives');
    }

    return (
        <View style={styles.container}>
            <Text>Please enter your address</Text>
            <TextInput
                style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setAddress(text)}
            />
            <Button
                title='Submit'
                onPress={submitAddress}
            />
        </View>
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
      justifyContent: 'center',
    },
  });

export default connect(mapStateToProps, {})(AddressForm);