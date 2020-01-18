import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {defaultOptions} from '../../config';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};

const MapViewComponent = () => {
  return (
    <MapView
      style={{flex: 1}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1,
      }}
    >
        <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={defaultOptions.googleApiKey}
        />
    </MapView>
  );
};

export default MapViewComponent;
