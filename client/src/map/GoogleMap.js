import React, { Fragment } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import MapSearch from './MapSearch';

const containerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '8px',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const libraries = ['places'];

const GoogleMaps = (props) => {
  const { map, setMap, onMarkerDragEnd } = props;
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY,
    libraries,
  });

  if (loadError) return <h2>Error loading maps</h2>;
  if (!isLoaded) return <h2>Loading map...</h2>;

  return (
    <Fragment>
      <MapSearch setMap={setMap} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={map.geometry}
        options={options}
        zoom={map.zoom}
      >
        <Marker
          position={map.geometry}
          draggable={true}
          onDragEnd={onMarkerDragEnd}
        />
      </GoogleMap>
    </Fragment>
  );
};

export default GoogleMaps;
