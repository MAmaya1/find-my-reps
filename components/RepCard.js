import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';

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
                <Text style={Dimensions.get('window').height > 1000 && styles.tabletTitle}>{props.repTitle.name}</Text>
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
        paddingTop: Dimensions.get('window').height > 1000 ? 12 : 8,
        paddingBottom: Dimensions.get('window').height > 1000 ? 12 : 8,
        paddingLeft: Dimensions.get('window').height > 1000 ? 12 : 8,
        paddingRight: Dimensions.get('window').height > 1000 ? 12 : 8
    },
    image: {
        width: Dimensions.get('window').height > 1000 ? 80 : 64,
        height: Dimensions.get('window').height > 1000 ? 100 : 80,
        marginRight: Dimensions.get('window').height > 1000 ? 12 : 8
    },
    textbox: {
        justifyContent: 'center'
    },
    name: {
        fontSize: Dimensions.get('window').height > 1000 ? 20 : 16,
        fontWeight: 'bold'
    },
    tabletTitle: {
        fontSize: 18
    },
    blue : {
        color: '#1B72AB',
        fontWeight: 'bold'
    },
    red: {
        color: '#FE615A',
        fontWeight: 'bold'
    },
    grey: {
        color: 'grey',
        fontWeight: 'bold'
    }
})

export default RepCard;