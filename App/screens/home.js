import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Map from './Map';
import AutoComplete from './AutoComplete';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',
    }
  }

  render() {
    const { navigate } = this.props.navigation;
      return (
        <ScrollView style={styles.container}>
          <Text style ={styles.title}>
            ChickenBus
          </Text>
          <Text style={styles.description}>
            Building Bus Routes and Networks
            for 3rd World Countries
          </Text>
          <KeyboardAvoidingView behavior='padding'>
            <View style={styles.container1}>
              <AutoComplete text='Origin'/>
              <AutoComplete text='Destination'/>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress= {() => navigate('Map')}>
                <Text style={styles.button}>
                    SEARCH
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
  },

  title: {
    color: '#e3aa1a',
    marginTop: 60,
    textAlign: 'center',
    fontSize: 60,
    fontWeight: '500',
    fontFamily: 'Avenir',
  },
  container1: {
    marginBottom: 40,
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#8BC34A',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  button: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  // logoContainer: {
  //     alignItems: 'center',
  //     flexGrow: 1,
  //     justifyContent: 'center'
  // },
  // logo: {
  //     width: 375,
  //     height: 200
  // },
});
