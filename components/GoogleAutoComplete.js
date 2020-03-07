import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import _ from 'lodash';
import { GOOGLE_KEY } from 'react-native-dotenv';

const GoogleAutoComplete = props => {
    const [addressPredictions, setPredictions] = useState([]);

    getPredictions = async () => {
        const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${GOOGLE_KEY}&input=${props.userInput}&radius=2000&components=country:us`;
        
        try {
            const res = await fetch(apiUrl);
            const resJson = await res.json();
            setPredictions(resJson.predictions);
        } catch (err) {
            console.log(err);
        }
    }

    getPredictionsDebounced = _.debounce(getPredictions, 1000);

    useEffect(() => {
        getPredictionsDebounced();
    }, [props.userInput]) 

    return (
        <View style={styles.container}>
            {addressPredictions.length > 0 && (
                <View style={styles.predictionsBox}>
                    {addressPredictions.map(prediction => (
                        <Text 
                            key={prediction.id}
                            onPress={() => { 
                                props.setCompleteAddress(prediction.description.slice(0, -5));
                                setPredictions([]);
                            }}
                            style={styles.address}
                        >
                            {prediction.description.slice(0, -5)}
                        </Text>
                    ))}
                    <Image 
                        source={require('../img/powered_by_google.png')}
                        style={styles.image}
                        resizeMode='contain'
                    />
                </View>
            )}
        </View>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    predictionsBox: {
        backgroundColor: '#B7D8D6',
        width: 250,
        padding: 5
    },
    address: {
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 3,
        paddingBottom: 3,
        borderBottomWidth: 1,
        borderColor: '#81878F'
    },
    image: {
        width: 100,
        marginTop: 4
    }
})

export default GoogleAutoComplete;