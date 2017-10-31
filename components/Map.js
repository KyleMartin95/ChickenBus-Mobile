import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class Map extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <MapView style={styles.container} initialRegion={initialRegion.location} provider={MapView.PROVIDER_GOOGLE} />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});

const initialRegion = {
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
}
