import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class Settings extends Component {

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>
        this will be user settings
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
