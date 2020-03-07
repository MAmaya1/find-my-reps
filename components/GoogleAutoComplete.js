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
        <>
            {addressPredictions.length > 0 && (
                <View>
                    {addressPredictions.map(prediction => (
                        <Text 
                            key={prediction.id}
                            onPress={() => { props.setCompleteAddress(prediction.description); setPredictions([]);}}
                        >
                            {prediction.description}
                        </Text>
                    ))}
                    <Image source={require('../img/powered_by_google.png')}/>
                </View>
            )}
        </>
    )
}

export default GoogleAutoComplete;