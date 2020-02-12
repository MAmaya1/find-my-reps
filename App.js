import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hi there!</Text>
      </View>
    </Provider>
  );
}

// StyleSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
