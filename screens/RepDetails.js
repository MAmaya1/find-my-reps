import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';

const RepDetails = ({ route })=> {

    const { repInfo } = route.params;
    const { repTitle } = route.params;

    // Get Party Preference to render alongside Rep Name
    let partyPreference = repInfo.party.toLowerCase().includes('democrat') ? (
        <Text style={styles.blue}>D</Text>
    ) : repInfo.party.toLowerCase().includes('republican') ? (
        <Text style={styles.red}>R</Text>
    ) : repInfo.party.toLowerCase().includes('nonpartisan') ? (
        <Text style={styles.grey}>NP</Text>
    ) : <Text style={styles.grey}>{repInfo.party}</Text>

    return(
        <View style={styles.main}>

            {/* General profile */}
            <View style={styles.profileContainer}>

                <Image 
                    style={styles.image}
                    source={repInfo.photoUrl ? {uri: repInfo.photoUrl} : require('../img/profile.jpg')}
                    resizeMode='contain'
                />

                <View style={styles.infobox}>
        
                    {/* Name and Party Preference */}
                    <Text style={styles.name}>{repInfo.name} ({partyPreference})</Text>

                    {/* Rep job title */}
                    <Text style={styles.title}>{repTitle}</Text>

                    {/* Verify repInfo contains address before mapping*/}
                    {repInfo.address !== undefined && (
                        <View style={styles.addressBox}>
                            {repInfo.address.map((address, index) => (
                            <View key={index}>
                                <Text>{'\n'}{address['line1']}</Text>
                                {address['line2'] && <Text>{address['line2']} {address['line3']}</Text>}
                                <Text>{address['city']}, {address['state']} {address['zip']}</Text>
                            </View>
                        ))}
                    </View>
                    )}
                </View>
            </View>

            {/* TODO: refactor links for iOS */}
            <View style={styles.container}>
                <Text>Phone</Text>
                <Text style={styles.link} onPress={() => Linking.openURL(`tel: ${repInfo.phones[0]}`)}>{repInfo.phones}</Text>
            </View>

            {/* Verify Rep email */}

            {repInfo.emails !== undefined && (
                <View style={styles.container}>
                    <Text>Email</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(`mailto: ${repInfo.emails[0]}`)}>{repInfo.emails}</Text>
                </View>
            )}

            {/* Verify Rep website */}
            {repInfo.urls !== undefined && (
                <View style={styles.container}>
                    <Text>Website</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(repInfo.urls[0])}>{repInfo.urls}</Text>
                </View>
            )}

            {/* Verify repInfo contains channels before mapping */}
            {repInfo.channels !== undefined && (
                repInfo.channels.map((channel, index) => (
                    channel.type.toLowerCase() === 'facebook' ? (
                        <View style={styles.container} key={index}>
                            <Text>Facebook</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(`https://facebook.com/${channel.id}`)}>{channel.id}</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'twitter' ? (
                        <View style={styles.container} key={index}>
                            <Text>Twitter</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(`https://twitter.com/${channel.id}`)}>{channel.id}</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'youtube' ? (
                        <View style={styles.container} key={index}>
                            <Text>YouTube</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(`https://youtube.com/${channel.id}`)}>{channel.id}</Text>
                        </View>
                    ) : null
                ))
            )}
        </View>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: 18,
        marginRight: 18
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 18,
        marginRight: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    image: {
        width: 144,
        height: 180,
        marginRight: 18
    },
    infobox: {
        width: '55%'
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 16,
        flexShrink: 1
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
    },
    link: {
        color: 'blue'
    }
  });

export default RepDetails;