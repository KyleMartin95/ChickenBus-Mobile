import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class SearchForm extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };
    render() {
        return (
            <View style={styles.container}>
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
                    SEARCH1</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
