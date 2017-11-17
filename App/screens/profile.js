import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import Settings from './Settings'

export default class Profile extends Component {

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>
        This will be a user profile
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
