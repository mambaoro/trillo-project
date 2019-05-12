/**
 *
 * Search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchIcon from '../SearchIcon/Loadable';

function Search() {
  return (
    <Form action="#">
      <SearchInput type="text" placeholder="Search hotels" />
      <SearchButton type="submit">
        <SearchIcon />
      </SearchButton>
    </Form>
  );
}

const Form = styled.form`
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  background-color: var(--color-grey-light-2);
  border: none;
  color: inherit;
  padding: 0.7rem 2rem;
  border-radius: 100px;
  width: 90%;
  margin-right: -3.25rem;
  transition: all 0.2s ease-in-out;

  :focus {
    outline: none;
    width: 100%;
    background-color: var(--color-grey-light-3);
  }

  :-webkit-input-placeholder {
    font-weight: 100;
    color: var(--color-light-grey-4);
  }

  input:focus + button {
    background-color: var(--color-grey-light-2);
  }
`;

const SearchButton = styled.button`
  border: none;
  transition: transform 0.2s ease-in-out;
  :focus {
    outline: none;
  }
  :active {
    transform: translateY(0.2rem);
  }
`;

Search.propTypes = {};

export default Search;
