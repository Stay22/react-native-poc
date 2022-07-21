import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = ({onPress}) => {
  return (
    <GooglePlacesAutocomplete
      minLength={2}
      placeholder='Search'
      onPress={onPress}
      query={{
        key: 'YOUR_API_KEY',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;