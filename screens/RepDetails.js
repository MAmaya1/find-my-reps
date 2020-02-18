import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const RepDetails = ({ route })=> {

    const { repInfo } = route.params;
    console.log('repINFO====>', repInfo)

    return(
        <View>
            <Text>{repInfo.name}</Text>
            <Text></Text>
        </View>
    )
}

export default RepDetails;