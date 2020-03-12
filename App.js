import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from 'react-native';

// Import Screens

import AddressForm from './screens/AddressForm';
import RepsScreen from './screens/RepsScreen';
import RepDetails from './screens/RepDetails';

// Redux Store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Stack Navigator
const Stack = createStackNavigator();

// Extended StyleSheet
EStyleSheet.build();

export default function App() {

  const [storedAddress, setStoredAddress] = useState(null);

  // Check AsyncStorage for stored address
  const checkAddress = async () => {
    try {
        const address = await AsyncStorage.getItem('address');
        
        if (address !== null) {
            setStoredAddress(address);
            console.log('STORED ADDRESS ===>', storedAddress)
        }
    } catch (err) {
        console.log('Error retrieving stored address');
    }
  }

  useEffect(() => {
    checkAddress();
  })

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator 
          // If address exists in AsyncStorage navigate to 'My Reps', if not navigate to 'Home'
          initialRouteName={'Home'}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#81878F'
            },
            headerTitleStyle: {
              color: '#FFF',
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen 
            name='Home' 
            component={AddressForm}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name='My Representatives' 
            component={RepsScreen}
            options={{
              headerLeft: null
            }}
          />
          <Stack.Screen name='Representative Profile' component={RepDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}