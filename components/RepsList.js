import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';

// Import RepCard Component

import RepCard from './RepCard';

const RepsList = props => {
    // Collecting division names in an array
    const divisionNames = Object.keys(props.reps.divisions);

    return(
        <ScrollView>
            {divisionNames.map((division, index) => (
                props.reps.divisions[division].officeIndices !== undefined && (
                    <View key={index}>
                        <Text style={styles.division}>{props.reps.divisions[division].name}</Text>
                        {props.reps.divisions[division].officeIndices.map(officeIndex => (
                                props.reps.offices[officeIndex].officialIndices.map((officialIndex, index) => (
                                    <RepCard 
                                        key={index}
                                        rep={props.reps.officials[officialIndex]}
                                        repTitle={props.reps.offices[officeIndex]}
                                        navigation={props.navigation}
                                    />
                                ))
                        ))}
                    </View>
                )
            ))}
        </ScrollView>      
    )
}

// StyleSheet

const styles = StyleSheet.create({
    division: {
      backgroundColor: '#B2DED8',
      paddingLeft: Dimensions.get('window').height > 1000 ? 12 : 7,
      paddingRight: Dimensions.get('window').height > 1000 ? 12 : 7,
      paddingTop: Dimensions.get('window').height > 1000 ? 15 : 8,
      paddingBottom: Dimensions.get('window').height > 1000 ? 15 : 8,
      fontSize: Dimensions.get('window').height > 1000 ? 20 : 16.5,
      borderBottomWidth: 2,
      borderTopWidth: 1,
      borderColor: 'lightgrey',
    },
  });

export default RepsList;