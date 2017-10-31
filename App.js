import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,  Image, KeyboardAvoidingView } from 'react-native';
import Expo from 'expo';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
//import Home from './components/Home';
//import Map from './components/Map';
//import Search from './components/SearchForm';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
          <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('./images/chickenOrigin.png')}
              />
              <Text style={styles.title}>
                An application for bus routing in third world countries
              </Text>
            </View>
            <View style={styles.container1}>
                <TextInput
                    style={styles.input}
                    placeholder='Origin'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    //onSubmitEditing: {() => this.destinationInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Destination'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='go'
                    //ref:{(input) => this.destinationInput = input}
                />

                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress= {()=> navigate('Map')}>
                    <Text style={styles.button}> SEARCH
                    </Text>
                </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>
        );
    }
}

class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView style={styles.container} initialRegion={initialRegion.location} provider={MapView.PROVIDER_GOOGLE} />
      </View>
    );
  }
}

class SearchForm extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
    render() {
        return (
            <View style={styles.container1}>
                <TextInput
                    style={styles.input}
                    placeholder='Origin'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='next'
                    //onSubmitEditing: {() => this.destinationInput.focus()}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Destination'
                    placeholderTextColor='rgba(255, 255, 255, 0.7)'
                    returnKeyType='go'
                    //ref:{(input) => this.destinationInput = input}
                />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}
                      onPress= {()=> navigate('Map')}>
                      SEARCH1
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen },
  Map: { screen: MapScreen },
  Search: { screen: SearchForm},
  },
);

export default class App extends React.Component {
  render() {
    return <NavigationApp/>;
      //(
      //<View style={styles.container}>
      //    <Home />
      //</View>
      //);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498DB'
  },
  logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center'
  },
  logo: {
      width: 100,
      height: 100
  },
  title: {
      color: '#FFF',
      marginTop: 10,
      textAlign: 'center'
  },
  container1: {
      padding: 20
  },
  input: {
      height: 40,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      marginBottom: 10,
      paddingHorizontal: 10
  },
  buttonContainer: {
      backgroundColor: '#2980B9',
      paddingVertical: 15
  },
  button: {
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: '700'
  }
});

const initialRegion = {
    location: {
      latitude: 12.136389,
      longitude: -86.251389,
      latitudeDelta: 0.922,
      longitudeDelta: 0.9421,
    }
}
