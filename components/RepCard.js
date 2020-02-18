import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RepCard = props => {
    return(
        <View>

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
           
        </View>
    )
}

export default RepCard;