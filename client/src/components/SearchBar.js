import React from "react";
import styled from "styled-components";

import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

function SearchBar({ setSearch }) {
  const handleInput = event => {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <SearchItem>
      <SearchImage />
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        onInput={handleInput}
      />
    </SearchItem>
  )
}

const SearchItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 0;
`;

const SearchImage = styled(SearchIcon)`
  margin-right: 5px;
  margin-bottom: 5px;
`;

export default SearchBar;
