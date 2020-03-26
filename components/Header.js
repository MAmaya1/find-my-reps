import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Header = props => {
    return(
        <View style={styles.headerStyles}>
            <Text style={styles.headerText}>My Representatives</Text>
            <TouchableOpacity 
                style={styles.highlight}
                onPress={() => props.setModalOpen(true)}
            >
                <FontAwesome
                    name='gear'
                    size={30}
                    style={styles.gear}
                />
            </TouchableOpacity>
        </View>
    )
}

// StyleSheet

const styles = StyleSheet.create({
    headerStyles: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        height: Dimensions.get('window').height > 1000 ? 100 : 80,
        paddingTop: 38,
        backgroundColor: '#81878F'
    },
    headerText: {
        fontSize: Dimensions.get('window').height > 1000 ? 32 : 20,
        color: '#FFF',
        fontWeight: 'bold',
        marginLeft: 18
    },
    gear: {
        color: 'lightgrey',
        marginRight: 18,
        marginTop: Dimensions.get('window').height > 1000 ? 10 : 0
    }
})

export default Header;