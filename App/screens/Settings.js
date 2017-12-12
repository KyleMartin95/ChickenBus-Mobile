import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Profile from './Profile'
//display profile user and icon or login button
//language
//country of search
//about
export default class Settings extends Component {
  static navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Components/Images/settings.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  }

  constructor(props) {
    super(props);
    this.state = {}
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          this will be user settings
        </Text>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.buttonContainer}
            onPress= { () => { navigate('Profile')}}>
            <Text style={styles.button}> Profile / Login </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.info}>
          About Us Info and Page
        </Text>
        <Text style={styles.info}>
          Users language
        </Text>
        <Text style={styles.info}>
          Country of route search
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
    title: {

    },
    searchContainer: {

    },
    buttonContainer: {

    },
    button: {

    },
    info: {

    },
  });
