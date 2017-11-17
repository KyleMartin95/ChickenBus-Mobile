import React from 'react';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import Home from './App/Screens/Home';
import Map from './App/Screens/Map';

var Root = TabNavigator({
  Home: { screen: Home },
  Map: { screen: Map },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'blue',
    inactiveTintColor: 'black',
    inactiveBackgroundColor: 'orange',
    labelStyle: {
      fontSize: 16,
      padding: 0,
      fontFamily: 'Avenir',
    }
  }
}
);

Root.navigationOptions = {
  title: "SearchUX"
};

export default Root;
