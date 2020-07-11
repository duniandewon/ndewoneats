import styled from 'styled-components';
import { Combobox, ComboboxList } from '@reach/combobox';

export const SearchBox = styled(Combobox)`
  position: absolute;
  width: 70%;
  top: 0.8rem;
  left: 0.8rem;
  z-index: 10;

  > input {
    width: 100%;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 5px;
    outline: none;
  }
`;

export const ResultSuggestions = styled(ComboboxList)`
  [data-reach-combobox-option] {
    padding: 0.8rem 0 0.8rem 2.5rem;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 40%;
      left: 1rem;
      border-radius: 50% 50% 50% 0;
      border: 3px solid #000;
      width: 5px;
      height: 5px;
      transform: rotate(-45deg);
    }
  }

  [data-reach-combobox-option] + [data-reach-combobox-option] {
    border-top: 1px solid #e0e0e0;
  }
`;
