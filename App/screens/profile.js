import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Settings from './Settings'
//Login
//Picture
//Name
//Username
//Nationality
//Travel Experience
//Profile Type
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>
        This will be a user profile
        </Text>
        <Text>
        Login if not
        </Text>
        <Text>
        show picture, Name, Username, nationality, travel experience
        </Text>
        <Text>
        Profile Type
        </Text>
      </ScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
  });
