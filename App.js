import React from 'react';
import Expo from 'expo';
import { TabNavigator } from 'react-navigation';
import Home from './App/screens/Home';
import Map from './App/screens/Map';
import Settings from './App/screens/Settings';
import Profile from './App/screens/Profile';

var Root = TabNavigator({
      Home: { screen: Home },
      Map: { screen: Map },
      Settings: { screen: Settings },
  }, {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#007EE9',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: '#FD9B21',
        labelStyle: {
          fontSize: 16,
          padding: 0,
          fontFamily: 'Avenir',
        }
      }
  });

Root.navigationOptions = {
  title: "SearchUX"
};

export default Root;
