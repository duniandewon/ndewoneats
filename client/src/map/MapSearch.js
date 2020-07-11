import React, { useCallback } from 'react';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';

import {
  ComboboxInput,
  ComboboxPopover,
  ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';

import { SearchBox, ResultSuggestions } from './MapSearchBox';

const MapSearch = ({ setMap }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutoComplete();

  const onSelect = useCallback(async address => {
    setValue(address, false);
    clearSuggestions();
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setMap(curr => ({
        ...curr,
        geometry: { lat, lng },
        zoom: 19,
        address
      }));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <SearchBox onSelect={onSelect}>
      <ComboboxInput
        value={value}
        onChange={e => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search address and places"
      />
      <ComboboxPopover>
        <ResultSuggestions>
          {status === 'OK' &&
            data.map(({ id, description }) => (
              <ComboboxOption key={id} value={description} />
            ))}
        </ResultSuggestions>
      </ComboboxPopover>
    </SearchBox>
  );
};

export default MapSearch;
