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
        activeBackgroundColor: '#D33338',
        inactiveTintColor: 'black',
        inactiveBackgroundColor: '#FBAE00',
        labelStyle: {
          fontSize: 16,
          fontFamily: 'Avenir',
        }
      }
  });

Root.navigationOptions = {
  title: "SearchUX"
};

export default Root;
