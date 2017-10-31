import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView} from 'react-native';
import SearchForm from './SearchForm';
import { StackNavigator } from 'react-navigation';
import Map from './Map';

export default class Home extends React.Component {
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
                source={require('../images/chickenOrigin.png')}
              />
              <Text style={styles.title}>
                An application for bus routing in third world countries
              </Text>
            </View>
            <View style={styles.formContainer}>
              <SearchForm />
            </View>
          </KeyboardAvoidingView>
        </View>
        );
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
    }
});
