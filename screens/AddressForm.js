import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { connect } from 'react-redux';

// Import Actions

import { getReps } from '../actions/index';

const AddressForm = props => {

    const [userAddress, setAddress] = useState('');

    submitAddress = () => {
        // TODO: add address validation besides successful API call
        props.getReps(userAddress);
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

export default connect(mapStateToProps, {getReps})(AddressForm);