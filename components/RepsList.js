import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Import RepCard Component

import RepCard from './RepCard';

const RepsList = props => {
    // Collecting division names in an array
    const divisionNames = Object.keys(props.reps.divisions);

    return(
        <ScrollView>
            {divisionNames.map(division => (
                props.reps.divisions[division].officeIndices !== undefined && (
                    <View key={Math.random()}>
                        <Text style={styles.title}>{props.reps.divisions[division].name}</Text>
                        {props.reps.divisions[division].officeIndices.map(officeIndex => (
                                props.reps.offices[officeIndex].officialIndices.map(officialIndex => (
                                    <RepCard 
                                        key={Math.random()}
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
    title: {
      backgroundColor: 'lightblue'
    },
  });

export default RepsList;