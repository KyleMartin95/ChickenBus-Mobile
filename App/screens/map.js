import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

export default class Map extends React.Component {

    static navigationOptions = {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../Components/Images/pin.png')}
          style={{width: 22, height: 22, tintColor: 'white'}}>
        </Image>
      )
    }

    constructor(props) {
      super(props);
      this.state = {
        origin: {
          lat: 0,
          lng: 0,
        },
        destination: {
          lat: 0,
          lng: 0,
        },
        activeMarkers: [],
        activePolylines: [],
        routeInfo: null
      }
    }

    render() {
      {console.log(this.state)}
      return (
        <View style = { styles.container }>
          <MapView style = { styles.container }
            initialRegion = { initialRegion.location }
            provider = { MapView.PROVIDER_GOOGLE } >
            { this.state.origin ?
              <MapView.Marker
                coordinate={{
                  latitude: this.state.origin.lat,
                  longitude: this.state.origin.lng
                }}
              />: null }
            { this.state.destination ?
              <MapView.Marker
                coordinate={{
                  latitude: this.state.destination.lat,
                  longitude: this.state.destination.lng
                }}
              />: null }
            </MapView>
          </View>

        );
      }

      componentWillReceiveProps(newProps) {
            if(newProps.navigation.state.params) {
                let activeMarkers = [];
                let activePolylines = [];
              // Set up variables for api call to get points and line between two points
              var origin = newProps.navigation.state.params.origin;
              var destination = newProps.navigation.state.params.destination;
              fetch('http://backend-einsler.cloudapps.unc.edu/api/routes/find-near?latOrig='
                + origin.lat
                +'&lngOrig=' + origin.lng
                +'&lngDest=' + destination.lng
                +'&latDest=' + destination.lat
              )
              .then(response => response.json())
              .then(responseJson => {
                  console.log(responseJson)
                  if (responseJson.directions.length == 1) {
                      this.setState({
                        origin: {
                          lat: responseJson.directions[0].orig[0],
                          lng: responseJson.directions[0].orig[1],
                        },
                        destination: {
                          lat: responseJson.directions[0].dest[0],
                          lng: responseJson.directions[0].dest[1],
                        }
                      });
                  }
              }).catch(e => {
                this.setState({
                  origin: undefined,
                  destination: undefined,
              });
              });
            }
      }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

const initialRegion = {
    location: {
      latitude: 12.136389,
      longitude: -86.251389,
      latitudeDelta: 0.922,
      longitudeDelta: 0.9421,
    }
}
