import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

// Import RepsList Component
import RepsList from '../components/RepsList';

// Import ModalScreen
import ModalScreen from '../screens/ModalScreen';

const RepsView = props => {

    // Open and close modal
    const [modalOpen, setModalOpen] = useState(false);
    
    // Header navigaion options
    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity 
                style={styles.highlight}
                onPress={() => setModalOpen(true)}
            >
                <FontAwesome
                    name='gear'
                    size={30}
                    style={styles.gear}
                />
            </TouchableOpacity>
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
                <View>
                <ActivityIndicator style={styles.loader} size='large' color='#4D6466' />
                </View>
            )}
            {Object.keys(props.reps).length > 0 && !props.fetchingReps && (
                <RepsList 
                    reps={props.reps}
                    navigation={props.navigation}
                />
            )}
            {Object.keys(props.reps).length === 0 && !props.fetchingReps && !props.fetchingRepsError && (
                <Text style={styles.message}>There are no reps to display.</Text>
            )}
            {props.fetchingRepsError && (
                <Text style={styles.errorMessage}>There are no Representatives listed for this address</Text>
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

// StyleSheet

const styles = StyleSheet.create({
    loader: {
        height: '100%'
    },
    gear: {
        color: 'lightgrey',
        marginRight: 18
    },
    message: {
        marginTop: 18,
        marginLeft: 18,
        fontStyle: 'italic'
    },
    errorMessage: {
        marginTop: 18,
        marginLeft: 18,
        color: '#CC3B33'
    }
})

export default connect(mapStateToProps, {})(RepsView);