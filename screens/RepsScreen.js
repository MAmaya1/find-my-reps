import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

// Import RepsList Component

import RepsList from '../components/RepsList';

const RepsView = props => {
    return (
        <View>
            {props.fetchingReps && (
                <Text>Loading reps...</Text>
            )}
            {props.reps && !props.fetchingReps && (
                <RepsList reps={props.reps} />
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