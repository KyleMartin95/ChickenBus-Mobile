import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
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

  static navigationOptions = {
    Map: 'Map',
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../Components/Images/search.png')}
        style={{width: 22, height: 22, tintColor: 'white'}}>
      </Image>
    )
  }

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
    //console.log(this.props.navigation)
    const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.logo}
              source={require('../Components/Images/top.png')}
              />
              <Text style={styles.description}>
                Building Bus Routes Globally
              </Text>
          </View>
          <KeyboardAvoidingView behavior='padding' style={styles.searchContainer}>
            <View style={styles.searchContainer}>
              <AutoComplete text='Origin' onPress={ this.onAutocompletePress.bind(this) } isOrigin={ true } keyType='next'/>
              <AutoComplete text='Destination' onPress={ this.onAutocompletePress.bind(this) } isOrigin={ false } keyType='search'/>
              <TouchableOpacity style={styles.buttonContainer}
                onPress= { () => { navigate(
                  'Map', {
                    origin: this.state.origin,
                    destination: this.state.destination
                  }
              )}}>
                <Text style={styles.button}> SEARCH </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
     alignItems: 'center',
     flexGrow: 1,
     justifyContent: 'center',
     height: '30%',
  },
  logo: {
     width: 300,
     height: 100,
     padding: 10,
  },
  description: {
    color: 'orange',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Avenir',
  },
  function: {

  },
  searchContainer: {
    flex: 1,
  },
  button: {
    textAlign: 'center',
    color: 'blue',
    fontWeight: '700',
    fontFamily: 'Avenir'
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginBottom: 20
  },
});
