import React, { Component} from 'react';
import { Text, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class AutoComplete extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <GooglePlacesAutocomplete
        placeholder={this.props.text}
        minLength={2}
        autoFocus={false}
        returnKeyType={this.props.keyType}
        listViewDisplayed='auto'
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={(data, details = null) => {
          this.props.onPress(data, details, this.props.isOrigin);
        }}

        getDefaultValue={() => ''}

        query={{
          key: 'AIzaSyBUAfME2CHwOHyq4fT9VuMzkm7fIKpWNnY',
          language: 'en', // language of the results
          types: '(cities)' // default: 'geocode'
        }}

        styles={{
          textInput: {
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            textDecorationLine: 'underline',
          },
          textInputContainer: {
            borderColor: 'white',
            borderTopColor: 'white',
            backgroundColor: 'white',
            width: '100%',
          },
        }}


        nearbyPlacesAPI='GooglePlacesSearch'

        GoogleReverseGeocodingQuery={{
        }}
        GooglePlacesSearchQuery={{
          rankby: 'distance',
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

        debounce={200}

        renderRightButton={() => <Text></Text>}/>
        )
    }
}
