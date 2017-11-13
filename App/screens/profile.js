import React, { Component} from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Profile extends Component {

  render(){
    return(
      <ScrollView>
        <Text>
        This will be a user profile
        </Text>
        </ScrollView>
      )
    }
}
