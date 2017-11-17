import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from './Home';

export default class Map extends React.Component {

constructor(props) {
  super(props);
  this.state = {}
}

render() {
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
        { this.state.coords ?
          <MapView.Polyline
            strokeWidth={4}
            coordinates={[...this.state.coords]}
          /> : null }
        </MapView>
      </View>
    );
  }

  componentWillReceiveProps(newProps) {
        if(newProps.navigation.state.params) {
          //console.log(newProps.navigation.state.params)
          // Set up variables for api call to get points for line between two points
          //var mode = 'driving';
          var origin = newProps.navigation.state.params.origin;
          var destination = newProps.navigation.state.params.destination;
          var APIKEY = 'AIzaSyBUAfME2CHwOHyq4fT9VuMzkm7fIKpWNnY';
          fetch('http://www.chickenbus-backend-einsler.cloudapps.unc.edu/api/routes/find-near?latOrig='
            + origin.lat
            +'&lngOrig=' + origin.lng
            +'&lngDest=' + destination.lng
            +'&latDest=' + destination.lat
          )
          .then(response => response.json())
          .then(responseJson => {
              if (responseJson.routes.length) {
                  this.setState({
                      //coords: this.decode(responseJson.routes[0].overview_polyline.points), // definition below
                      origin: origin,
                      destination: destination,
                  });
              }
          }).catch(e => {
            this.setState({
              //coords: undefined,
              origin: undefined,
              destination: undefined,
          });
            console.warn(origin.lng)
            console.warn(e)
          });
        }
  }
  // transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates
  decode(t,e){for(var n,o,u=0,l=0,r=0,d= [],h=0,i=0,a=null,c=Math.pow(10,e||5);u<t.length;){a=null,h=0,i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);n=1&i?~(i>>1):i>>1,h=i=0;do a=t.charCodeAt(u++)-63,i|=(31&a)<<h,h+=5;while(a>=32);o=1&i?~(i>>1):i>>1,l+=n,r+=o,d.push([l/c,r/c])}return d=d.map(function(t){return{latitude:t[0],longitude:t[1]}})}
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
