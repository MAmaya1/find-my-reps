import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const RepCard = props => {

    // Get Party Preference to render alongside Rep Name
    let partyPreference = props.rep.party.toLowerCase().includes('democrat') ? (
        <Text style={styles.blue}>D</Text>
    ) : props.rep.party.toLowerCase().includes('republican') ? (
        <Text style={styles.red}>R</Text>
    ) : props.rep.party.toLowerCase().includes('nonpartisan') ? (
        <Text style={styles.grey}>NP</Text>
    ): <Text>({props.rep.party})</Text>

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

                {/* Rep Name and Party Preference */}
                <Text style={styles.name}>{props.rep.name} ({partyPreference})</Text>
                
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
        paddingBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },
    image: {
        width: 64,
        height: 80,
        marginRight: 8
    },
    textbox: {
        justifyContent: 'center'
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