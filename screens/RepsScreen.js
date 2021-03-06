import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

// Import Components
import Header from '../components/Header';
import RepsList from '../components/RepsList';

// Import ModalScreen
import ModalScreen from '../screens/ModalScreen';

const RepsView = props => {

    // Open and close modal
    const [modalOpen, setModalOpen] = useState(false);
    
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../img/reps_background.png')}
                style={styles.backgroundImage}
            >
                <Header 
                    navigation={props.navigation}
                    setModalOpen={setModalOpen}
                />
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
                {Object.keys(props.reps).length > 0 && !props.fetchingReps && !props.fetchingRepsError && (
                    <RepsList 
                        reps={props.reps}
                        navigation={props.navigation}
                    />
                )}
                {/* For valid address entry, but no Rep data */}
                {Object.keys(props.reps).length === 0 && !props.fetchingReps && !props.fetchingRepsError && (
                    <Text style={styles.message}>There are no no representatives listed for this address.</Text>
                )}
                {/* For invalid address entry */}
                {props.fetchingRepsError && (
                    <Text style={styles.errorMessage}>Please enter a valid address.</Text>
                )}
            </ImageBackground>
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
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    loader: {
        height: '100%'
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