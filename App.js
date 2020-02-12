import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Hi there!</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
