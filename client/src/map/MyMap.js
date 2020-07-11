import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Geocode from 'react-geocode';
import Map from './GoogleMap';
import { setShippingAddress } from '../redux/actions/cartActions';

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_KEY);

const MyMap = ({ address, setShippingAddress }) => {
  const [map, setMap] = useState({
    address: '',
    zoom: 14,
    geometry: {
      lat: -6.402484,
      lng: 106.794243,
    },
  });

  const onMarkerDragEnd = useCallback(async (e) => {
    const newLat = e.latLng.lat();
    const newLng = e.latLng.lng();

    const geocode = await Geocode.fromLatLng(newLat, newLng);

    const address = geocode.results[0].formatted_address;

    setMap({
      ...map,
      geometry: {
        lat: newLat,
        lng: newLng,
      },
      address,
    });

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (map.address !== '') {
      setShippingAddress(map.address);
    }

    //eslint-disable-next-line
  }, [map.address]);

  return <Map map={map} setMap={setMap} onMarkerDragEnd={onMarkerDragEnd} />;
};

export default connect(null, { setShippingAddress })(MyMap);
