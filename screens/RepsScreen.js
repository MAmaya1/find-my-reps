import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

// Import RepsList Component
import RepsList from '../components/RepsList';

// Import ModalScreen
import ModalScren from '../screens/ModalScreen';
import ModalScreen from '../screens/ModalScreen';

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
            {props.reps && !props.fetchingReps && (
                <RepsList 
                    reps={props.reps}
                    navigation={props.navigation}
                />
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
        reps: state.reps,
        fetchingReps: state.fetchingReps,
        fetchingRepsError: state.fetchingRepsError
    }
}

export default connect(mapStateToProps, {})(RepsView);