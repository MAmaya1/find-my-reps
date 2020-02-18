import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RepCard = props => {
    return(
        <View>

            {/* Rep name */}
            <Text>{props.rep.name}</Text>
            
            {/* Rep title */}
           <Text>{props.repTitle.name}</Text>
        </View>
    )
}

export default RepCard;