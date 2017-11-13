import React from 'react';
import { TabNavigator, StackNavigator} from 'react-navigation';
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
  },
});

export const Tabs = TabNavigator({
  Home:{
    screen: Home,
    navigationOptions: {
      headerStyle: {backgroundColor: "#2196F3"},
      tabBarLabel: 'Home',
      //icon: ({ tintColor }) => <Icon name="list" size ={35} color={tintColor}/>
    },
  },
  Map:{
    screen: Map,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Map',
    }
  },
  Profile:{
    screen: Profile,
    navigationOptions: {
      headerStyle: {backgroundColor: "#2196F3"},
      tabBarLabel: 'Profile',
    },
  },
 }, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#2196F3',
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: '#e3aa1a',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  }
});
