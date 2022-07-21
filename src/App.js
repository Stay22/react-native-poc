import React, { useState } from 'react';
import { StyleSheet, Button, View, Linking } from 'react-native';
import GooglePlacesInput from './components/GooglePlacesInput';
import Stay22Map from './components/Stay22Map';
import Stay22Allez from './lib/Stay22Allez';

export default function App() {
  const [address, setAddress] = useState(null);

  // Map implementation
  // Documentation 
  // https://www.stay22.com/docs/
  const s22MapParams = {
    aid: 'stay22', // required
    campaign: 'react-native-poc',  // recommended
    invmode: 'accommodation',
    showsearchbar: false,
    navimage: null, // branding - optional
    markerimage: null, // branding - optional
    maincolor: '293BFF', // branding - optional
  };

  // Allez implementation
  // Documentation 
  // https://www.stay22.com/letmeallez/
  const Stay22Allezparams = {
    aid: 'stay22',  // required
    campaign: 'react-native-poc',
    link: 'https://www.expedia.ca/Montreal-Hotels-The-Ritz-Carlton.h8767.Hotel-Information?chkin=2022-08-05&chkout=2022-08-06&x_pwa=1&rfrr=HSR&pwa_ts=1658443685185&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jYS9Ib3RlbC1TZWFyY2g%3D&useRewards=false&rm1=a2&regionId=178288&destination=Montreal+%28and+vicinity%29%2C+Quebec%2C+Canada&destType=MARKET&neighborhoodId=553248621532866191&guestRating=45&sort=PROPERTY_CLASS&top_dp=920&top_cur=CAD&semdtl=&userIntent=&selectedRoomType=200153795&selectedRatePlan=386415639'
  };
  const provider = 'expedia';
  const allezURL = Stay22Allez(provider, Stay22Allezparams);
  
  const handleGoogleSearch = (data) => {
    const { description } = data;
    setAddress(description);    
  }

  return (
    <>
    <View>
      <Button
        title="Click to open allez link"
        onPress={() => Linking.openURL(allezURL)}
      />
     </View> 
     <GooglePlacesInput onPress={handleGoogleSearch} />
     <Stay22Map parameters={s22MapParams} address={address} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
