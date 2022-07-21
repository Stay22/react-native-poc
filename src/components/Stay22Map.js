import React from 'react';
import { WebView } from 'react-native-webview';

const Stay22Map = ({parameters, address='Stay22, Mont-Royal Avenue East, Montreal, QC, Canada'}) => {

  const domain = 'https://www.stay22.com';
  const parametersDefaults = {
    aid: 'stay22',  // required
    campaign: 'stay22-poc',
    venue: 'stay22',
    invmode: 'accommodation',
    maincolor: '293BFF',
    showsearchbar: false,
    navimage: null,
    markerimage: null
  };

  const params = {...parametersDefaults, ...parameters};

  const generateURI = () => {
    const URI = new URL(`${domain}/embed/gm`);

    for (const [key, value] of Object.entries(params)) {
      URI.searchParams.append(key, encodeURIComponent(value));
    }

    URI.searchParams.append('address', encodeURIComponent(address));

    return URI.href;
  };

  return (
    <WebView
      originWhitelist={['*']} 
      source={{ uri: generateURI() }}
      style={{ width:'100%',height:'100%'}}
    />
  );
};
export default Stay22Map;