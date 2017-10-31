import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import Map from './components/Map';
import Search from './components/SearchForm';

const NavigationApp = StackNavigator({
  Map: { screen: Map },
  Home: { screen: Home },

  Search: { screen: Search},
  },
);

export default class App extends React.Component {
  render() {
    return <NavigationApp/>;
      //(
      //<View style={styles.container}>
      //    <Home />
      //</View>
      //);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
