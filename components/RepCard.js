import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const RepCard = props => {
    return(
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Representative Details', {
                repInfo: props.rep,
                repTitle: props.repTitle.name
            })}
        >

            {/* Verify Rep photo source */}
            <Image 
                style={{width: 100, height: 100}}
                source={props.rep.photoUrl ? {uri: props.rep.photoUrl} : require('../img/profile.jpg')}
            />

            {/* Rep name */}
            <Text>{props.rep.name}</Text>
            
            {/* Rep title */}
            <Text>{props.repTitle.name}</Text>

            {/* Party Preference */}
            {props.rep.party.includes('Democrat') ? (
                <Text>(D)</Text>
            ) : props.rep.party.includes('Republican') ? (
                <Text>(R)</Text>
            ) : props.rep.party.includes('Nonpartisan') ? (
                <Text>(NP)</Text>
            ): <Text>{props.rep.party}</Text>}
        </TouchableOpacity>
    )
}

export default RepCard;