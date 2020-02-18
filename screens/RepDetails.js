import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const RepDetails = ({ route })=> {

    const { repInfo } = route.params;
    const { repTitle } = route.params;

    return(
        <View>
            <View style={styles.container}>
                <Image 
                    style={{width: 180, height: 180}}
                    source={{uri: repInfo.photoUrl}}
                />
                <Text>{repInfo.name}</Text>

                 {/* Party Preference */}
                {repInfo.party.includes('Democrat') ? (
                    <Text>(D)</Text>
                ) : repInfo.party.includes('Republican') ? (
                    <Text>(R)</Text>
                ) : repInfo.party.includes('Nonpartisan') ? (
                    <Text>(NP)</Text>
                ): <Text>{repInfo.party}</Text>}
                <Text>{repTitle}</Text>
            </View>

            {/* Verify repInfo contains address before mapping*/}
            {repInfo.address !== undefined && (
                <View style={styles.container}>
                    <Text>Address</Text>
                    {repInfo.address.map(address => (
                     <View>
                        <Text>{address['line1']}</Text>
                        <Text>{address['line2']} {address['line3']}</Text>
                        <Text>{address['city']}, {address['state']} {address['zip']}</Text>
                     </View>
                 ))}
             </View>
            )}

            <View style={styles.container}>
                <Text>Phone</Text>
                <Text>{repInfo.phones}</Text>
            </View>

            <View style={styles.container}>
                <Text>Email</Text>
                <Text>{repInfo.emails}</Text>
            </View>

            <View style={styles.container}>
                <Text>Website</Text>
                <Text>{repInfo.urls}</Text>
            </View>

            {/* Verify repInfo contains channels before mapping */}
            {repInfo.channels !== undefined && (
                repInfo.channels.map(channel => (
                    channel.type.toLowerCase() === 'facebook' ? (
                        <View style={styles.container}>
                            <Text>Facebook</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'twitter' ? (
                        <View style={styles.container}>
                            <Text>Twitter</Text>
                        </View>
                    ) : channel.type.toLowerCase() === 'youtube' ? (
                        <View style={styles.container}>
                            <Text>YouTube</Text>
                        </View>
                    ) : null
                ))
            )}
        </View>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: 'grey'
    },
  });

export default RepDetails;