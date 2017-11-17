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
import AutoComplete from '../Components/AutoComplete';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      origin: '',
      destination: '',

    }
  }

  onAutocompletePress(value, details, isOrigin) {
    if(isOrigin) {
      this.setState({
        origin: details.geometry.location
      })
    } else {
      this.setState({
        destination: details.geometry.location
      })
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
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../Components/Images/top.png')}
            />
          </View>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.container1}>
              <AutoComplete text='Origin' onPress={ this.onAutocompletePress.bind(this) } isOrigin={ true }/>
              <AutoComplete text='Destination' onPress={ this.onAutocompletePress.bind(this) } isOrigin={ false }/>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress= {() => {
                    navigate('Map', {origin: this.state.origin, destination: this.state.destination})}
                }
              >
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
    backgroundColor: '#FFFFFF',
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
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 10,
    textAlign: 'center',
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
  logoContainer: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'center'
  },
  logo: {
     width: 125,
     height: 50
  },
});
