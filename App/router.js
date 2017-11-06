import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
//import { Icon } from 'react-native-elements';

import home from './screens/home';
import map from './screens/map';
import profile from './screens/profile';

export const Stack = StackNavigator({
  home: {
    screen: home,
  },
  map: {
    screen: map,
  },
  profile: {
    screen: profile,
  }

});

export const Tabs = TabNavigator({

  home:{
    screen: home,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Home',
      //icon: ({ tintColor }) => <Icon name="list" size ={35} color={tintColor}/>
    },
  },
  map:{
    screen: map,
    navigationOptions: {
      header: null,
      tabBarLabel: 'Map',
      //icon: ({ tintColor }) => <Icon name="egg" size ={35} color={tintColor}/>
    }
  },
  profile:{
    screen: profile,
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
