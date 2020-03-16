import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from 'react-native';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

// Import Screens
import RepsScreen from './screens/RepsScreen';
import RepDetails from './screens/RepDetails';
import HomeScreen from './screens/HomeScreen';

// Import Components
import AddressForm from './components/AddressForm';

// Redux Persistence
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['reps']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux Store
const store = createStore(persistedReducer, applyMiddleware(thunk));

// Persist Store
const persistor = persistStore(store);

// Stack Navigator
const Stack = createStackNavigator();

// Extended StyleSheet
EStyleSheet.build();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName={'Home'}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#81878F',
                height: 80
              },
              headerTitleStyle: {
                fontSize: 20,
                color: '#FFF',
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen 
              name='Home' 
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Address Form'
              component={AddressForm}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name='My Representatives' 
              component={RepsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name='Representative Profile' 
              component={RepDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}