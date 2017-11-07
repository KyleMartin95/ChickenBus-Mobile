import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import Home from './home';

export default class Map extends React.Component {
constructor(props) {
  super(props);
  this.state = {}
}

  render() {
      console.log("in render")
      console.log(this.state.origin)
      console.log(this.state.destination)

          //const { latitude, longitude, etc } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <MapView style={styles.container} initialRegion={initialRegion.location} provider={MapView.PROVIDER_GOOGLE}>
          {this.state.origin ? <MapView.Marker
                                  coordinate={ {latitude: this.state.origin.lat, longitude: this.state.origin.lng}}
                                  />: null }
          {this.state.destination ?<MapView.Marker
                                  coordinate={ {latitude: this.state.destination.lat, longitude: this.state.destination.lng}}
                                  />: null }
        </MapView>
      </View>
    );
  }

  componentWillReceiveProps(newProps) {
      console.log(newProps)
        if(newProps.navigation.state.params) {
            this.setState({
                origin: newProps.navigation.state.params.origin,
                destination: newProps.navigation.state.params.destination,
            })
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
