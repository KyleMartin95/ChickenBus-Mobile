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
        activeMarkers: [],
        activePolylines: [],
        routeInfo: null
      }
    }

    render() {
      return (
        <View style = { styles.container }>
          <MapView 
            style = { styles.container }
            initialRegion = { initialRegion.location }
            provider = { MapView.PROVIDER_GOOGLE } >
            { this.state.activeMarkers ? this.state.activeMarkers : null }
            { this.state.activePolylines ? this.state.activePolylines : null }
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
                  if (responseJson.directions.length > 0) {
                      let properties = responseJson.routesInfo;
                      console.log(properties)
                      responseJson.directions.forEach((direction, index) => {
                        // Add origin stop only for first route so there are no overlapping markers
                        if(index == 0) {
                          activeMarkers.push(<MapView.Marker
                                              key={"marker_"+index}
                                              title={"Origin"}
                                              coordinate={{
                                                latitude: direction.orig[0],
                                                longitude: direction.orig[1]
                                              }}/>)
                        }
                        // Add destination stop for all routes.
                        activeMarkers.push(<MapView.Marker
                                              key={"marker_"+(index+1)}
                                              title={properties[index].properties.notes + " Destination"}
                                              description={"Cost: $"+properties[index].properties.cost + '\n' + "Duration: " + properties[index].properties.duration + " minutes"+ '\n' + properties[index].properties.notes}
                                              coordinate={{
                                                latitude: direction.dest[0],
                                                longitude: direction.dest[1]
                                              }}/>)
                        activePolylines.push(<MapView.Polyline
                                              key={"polyLine_"+index}
                                              geodesic={true}
                                              coordinates={[
                                                {
                                                  latitude: direction.orig[0],
                                                  longitude: direction.orig[1]
                                                },
                                                {
                                                  latitude: direction.dest[0],
                                                  longitude: direction.dest[1]
                                                }
                                              ]}/>)
                      });
                      this.setState({
                        activeMarkers: activeMarkers,
                        activePolylines: activePolylines
                      });
                  }
              }).catch(e => {
                this.setState({
                  activeMarkers: undefined,
                  activePolylines: undefined
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
