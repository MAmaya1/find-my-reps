import React from 'react';
import { connect } from 'react-redux';

// Import RepsScreen
import RepsScreen from './RepsScreen';

// Import AddressForm
import AddressForm from '../components/AddressForm';

const HomeScreen = props => {
    return (
        <>
            {Object.keys(props.reps).length > 0 ? (
                props.navigation.navigate('My Representatives')
            ) : <AddressForm navigation={props.navigation} />}
        </>
    )
}

// MapStateToProps

const mapStateToProps = state => {
    return {
        reps: state.reps
    }
}

export default connect(mapStateToProps, {})(HomeScreen);