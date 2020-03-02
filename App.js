import React, { useState, useEffect } from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

// Import Screens

import AddressForm from './screens/AddressForm';
import RepsScreen from './screens/RepsScreen';
import RepDetails from './screens/RepDetails';

// Redux Store

const store = createStore(rootReducer, applyMiddleware(thunk));

// Stack Navigator

const Stack = createStackNavigator();

export default function App() {

  const [storedAddress, setStoredAddress] = useState(false);

  // Check for existing address in AsyncStorage
  const checkUserAddress = async () => {
    try {
      const userAddress = await AsyncStorage.getItem('address');

      if (userAddress) {
        setStoredAddress(userAddress);
        console.log('ADDRESS FROM STORAGE ====>', userAddress);
        console.log('STATE ADDRESS ===>', storedAddress);
      } else {
        setStoredAddress(false);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUserAddress();
  })

  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* If address exists in AsyncStorage navigate to 'My Reps', if not navigate to 'Home' */}
        <Stack.Navigator initialRouteName={`${!storedAddress ? 'Home' : 'My Representatives'}`}>
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