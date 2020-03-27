import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Import Modal Screen
import ModalScreen from '../screens/ModalScreen';

const RepDetails = ({ route, ...props })=> {

    const { repInfo } = route.params;
    const { repTitle } = route.params;

    // Open and close modal
    const [modalOpen, setModalOpen] = useState(false);

    // Header navigaion options
    props.navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity 
                style={styles.highlight}
                onPress={() => setModalOpen(true)}
            >
                <FontAwesome
                    name='gear'
                    size={30}
                    style={styles.gear}
                />
            </TouchableOpacity>
        )
    })

    // Get Party Preference to render alongside Rep Name
    let partyPreference = repInfo.party !== undefined && (
        repInfo.party.toLowerCase().includes('democrat') ? (
            <Text style={styles.blue}>D</Text>
        ) : repInfo.party.toLowerCase().includes('republican') ? (
            <Text style={styles.red}>R</Text>
        ) : repInfo.party.toLowerCase().includes('nonpartisan') ? (
            <Text style={styles.grey}>NP</Text>
        ): <Text>{repInfo.party}</Text>
    )

    return(
        <View style={styles.main}>

            <ModalScreen 
                modalOpen={modalOpen}
                closeModal={() => setModalOpen(false)}
                navigation={props.navigation}
            />

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
                                <Text style={styles.text}>{'\n'}{address['line1']}</Text>
                                {address['line2'] && <Text style={styles.text}>{address['line2']} {address['line3']}</Text>}
                                <Text style={styles.text}>{address['city']}, {address['state']} {address['zip']}</Text>
                            </View>
                        ))}
                    </View>
                    )}
                </View>
            </View>

            {/* Verify Rep Phone */}
            {repInfo.phones !== undefined && (
                <View style={styles.container}>
                    <Text style={styles.text}>Phone</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(`tel: ${repInfo.phones[0]}`)}>{repInfo.phones}</Text>
                </View>
            )}

            {/* Verify Rep email */}

            {repInfo.emails !== undefined && (
                <View style={styles.container}>
                    <Text style={styles.text}>Email</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(`mailto: ${repInfo.emails[0]}`)}>{repInfo.emails}</Text>
                </View>
            )}

            {/* Verify Rep website */}
            {repInfo.urls !== undefined && (
                <View style={styles.container}>
                    <Text style={styles.text}>Website</Text>
                    <Text style={styles.link} onPress={() => Linking.openURL(repInfo.urls[0])}>{repInfo.urls}</Text>
                </View>
            )}

            {/* Verify repInfo contains channels before mapping */}
            {repInfo.channels !== undefined && (
                repInfo.channels.map((channel, index) => (
                    channel.type.toLowerCase() === 'facebook' ? (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text}>Facebook</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(`https://facebook.com/${channel.id}`)}>{channel.id}</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'twitter' ? (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text}>Twitter</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL(`https://twitter.com/${channel.id}`)}>{channel.id}</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'youtube' ? (
                        <View style={styles.container} key={index}>
                            <Text style={styles.text}>YouTube</Text>
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
        paddingTop: Dimensions.get('window').height > 1000 ? 20 : 15,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        marginLeft: Dimensions.get('window').height > 1000 ? 20 : 18,
        marginRight: 18
    },
    gear: {
        color: 'lightgrey',
        marginRight: 18
    },
    container: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingTop: Dimensions.get('window').height > 1000 ? 20 : 15,
        paddingBottom: Dimensions.get('window').height > 1000 ? 20 : 15,
        marginLeft: Dimensions.get('window').height > 1000 ? 20 : 18,
        marginRight: Dimensions.get('window').height > 1000 ? 20 : 18,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    image: {
        width: Dimensions.get('window').height > 1000 ? 200 : 120,
        height: Dimensions.get('window').height > 1000 ? 250 : 160,
        marginRight: Dimensions.get('window').height > 1000 ? 20 : 18
    },
    infobox: {
        width: '55%'
    },
    name: {
        fontSize: Dimensions.get('window').height > 1000 ? 28 : 18,
        fontWeight: 'bold'
    },
    title: {
        fontSize: Dimensions.get('window').height > 1000 ? 20 : 16,
        flexShrink: 1
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
    },
    text: {
        fontSize: Dimensions.get('window').height > 1000 ? 20 : 14
    },
    link: {
        color: '#1B72AB',
        fontSize: Dimensions.get('window').height > 1000 ? 20 : 14
    }
  });

export default RepDetails;