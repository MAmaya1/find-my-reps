import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

// Import RepsList Component
import RepsList from '../components/RepsList';

// Import ModalScreen
import ModalScreen from '../screens/ModalScreen';

// Import Actions
import { getReps } from '../actions/index';

const RepsView = props => {

    // Open and close modal
    const [modalOpen, setModalOpen] = useState(false);
    
    // Header navigaion options
    props.navigation.setOptions({
        headerRight: () => (
            <FontAwesome
                name='gear'
                size={30}
                onPress={() => setModalOpen(true)}
            />
        )
    })

    // useEffect(() => {
    //     props.getReps(props.userAddress);
    // }, [])

    return (
        <View>
            <ModalScreen 
                modalOpen={modalOpen}
                closeModal={() => setModalOpen(false)}
                navigation={props.navigation}
            />
            {props.fetchingReps && (
                <Text>Loading reps...</Text>
            )}
            {Object.keys(props.reps).length > 0 && !props.fetchingReps && (
                <RepsList 
                    reps={props.reps}
                    navigation={props.navigation}
                />
            )}
            {Object.keys(props.reps).length === 0 && !props.fetchingReps && !props.fetchingRepsError && (
                <Text>No reps to show.</Text>
            )}
            {props.fetchingRepsError && (
                <Text>{props.fetchingRepsError}</Text>
            )}
        </View>
    )
}

// Map State To Props

const mapStateToProps = state => {
    return {
        userAddress: state.userAddress,
        reps: state.reps,
        fetchingReps: state.fetchingReps,
        fetchingRepsError: state.fetchingRepsError
    }
}

export default connect(mapStateToProps, {getReps})(RepsView);