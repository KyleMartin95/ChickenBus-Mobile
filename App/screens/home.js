import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import map from './map';

export default class home extends React.Component {

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
        <View style={styles.container}>
        <Text style={styles.title}>
          Building Bus Routes and Networks
          for 3rd World Countries
        </Text>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.container1}>
              <TextInput
                style={styles.input}
                placeholder='ORIGIN'
                placeholderTextColor='rgba(255, 255, 255, 0.7)'
                //onChangeText={ (origin) => this.setState({origin}) }
                returnKeyType='next'
                //onSubmitEditing: {() => this.destinationInput.focus()}

              />
              <TextInput
                style={styles.input}
                placeholder='DESTINATION'
                placeholderTextColor='rgba(255, 255, 255, 0.7)'
                //onChangeText={ (destination) => this.setState({destination}) }
                returnKeyType='go'
                //ref:{(input) => this.destinationInput = input}

              />
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress= {() => navigate('map')}>
                <Text style={styles.button}>
                    SEARCH
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('./images/chickenOrigin.png')}
              />

            </View>
          </KeyboardAvoidingView>
        </View>
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
      marginTop: 60,
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
      marginTop: 20
  },
  button: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  }
});
