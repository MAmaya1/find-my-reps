import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens

import AddressForm from './screens/AddressForm';
import RepsScreen from './screens/RepsScreen';
import RepDetails from './screens/RepDetails';

// Redux Store

const store = createStore(rootReducer, applyMiddleware(thunk));

// Stack Navigator

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={AddressForm} />
          <Stack.Screen name='My Representatives' component={RepsScreen} />
          <Stack.Screen name='Representative Profile' component={RepDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}