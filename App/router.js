import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import Home from './Screens/Home';
import Map from './Screens/Map';
import Profile from './Screens/Profile';

export const Stack = StackNavigator({
  Home: {
    screen: Home,
  },
  Map: {
    screen: Map,
  },
  Profile: {
    screen: Profile,
  }

});

export const Tabs = TabNavigator({

  Home:{
    screen: Home,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Home',
      //icon: ({ tintColor }) => <Icon name="list" size ={35} color={tintColor}/>
    },
  },
  Map:{
    screen: Map,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Map',
      //icon: ({ tintColor }) => <Icon name="egg" size ={35} color={tintColor}/>
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Profile',
      //icon: ({ tintColor }) => <Icon name="account-circle" size ={35} color={tintColor}/>
    }
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
});
