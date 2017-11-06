import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import { StackNavigator } from 'react-navigation';
import home from './home';

export default class map extends React.Component {
  render() {
    //const { latitude, longitude, etc } = this.props.navigation.state.params;
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
      latitude: 12.136389,
      longitude: -86.251389,
      latitudeDelta: 0.922,
      longitudeDelta: 0.9421,
    }
}
