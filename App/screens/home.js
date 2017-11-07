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
import Map from './map';
import Profile from './profile';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

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
          <Text style={styles.title}>
            Building Bus Routes and Networks
            for 3rd World Countries
          </Text>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('./images/chickenOrigin.png')}
            />
          </View>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.container1}>
              <Profile text='Origin' onPress={ this.onAutocompletePress } isOrigin={ true }/>
              <Profile text='Destination' onPress={ this.onAutocompletePress } isOrigin={ false }/>
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress= {() => navigate('Map', {origin: this.state.origin, destination: this.state.destination})}>
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
    backgroundColor: '#1E6578',
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      width: 375,
      height: 200
  },
  title: {
      color: '#FFF',
      marginTop: 60,
      textAlign: 'center'
  },
  container1: {
      marginBottom: 40,
      flex: 1,
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      //marginTop: 30,
      paddingHorizontal: 10,
      textAlign: 'center',
  },
  buttonContainer: {
      backgroundColor: '#2980B9',
      paddingVertical: 15,
      paddingHorizontal: 10,
      marginBottom: 20
  },
  button: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  }
});
