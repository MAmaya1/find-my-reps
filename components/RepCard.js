import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';

const RepCard = props => {
    return(
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Representative Profile', {
                repInfo: props.rep,
                repTitle: props.repTitle.name
            })}
            style={styles.cardContainer}
        >

            {/* Verify Rep photo source */}
            <Image 
                style={styles.image}
                source={props.rep.photoUrl ? {uri: props.rep.photoUrl} : require('../img/profile.jpg')}
                resizeMode='contain'
            />

            <View style={styles.textbox}>
                <View style={styles.namebox}>
                    {/* Rep name */}
                    <Text style={styles.name}>{props.rep.name} </Text>

                    {/* Party Preference */}
                    {props.rep.party.toLowerCase().includes('democrat') ? (
                        <Text style={styles.blue}>(D)</Text>
                    ) : props.rep.party.toLowerCase().includes('republican') ? (
                        <Text style={styles.red}>(R)</Text>
                    ) : props.rep.party.toLowerCase().includes('nonpartisan') ? (
                        <Text style={styles.grey}>(NP)</Text>
                    ): <Text>({props.rep.party})</Text>}
                </View>
                
                {/* Rep title */}
                <Text>{props.repTitle.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        paddingTop: 8,
        paddingBottom: 8
    },
    image: {
        width: 80,
        height: 80
    },
    textbox: {
        justifyContent: 'center'
    },
    namebox: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    blue : {
        color: 'blue',
        fontWeight: 'bold'
    },
    red: {
        color: 'red',
        fontWeight: 'bold'
    },
    grey: {
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default RepCard;