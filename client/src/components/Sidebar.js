import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';

import SearchBar from "./SearchBar";
import FilterList from "./FilterList";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function highlightMatches(input, match) {
  const highlightSubstring = new RegExp(`(.*)(${match})(.*)`, 'i');
  const matches = input.match(highlightSubstring);

  matches.splice(0, 1);

  return matches;
}

const Sidebar = ({ bodyLocationFilters, setBodyLocationFilters }) => {
  const [search, setSearch] = useState('');

  const brands = useSelector(state => state.items.brands);
  const bodyLocation = useSelector(state => state.items.bodyLocation);

  const searchedBrands = brands.reduce((searchedBrands, brandInfo) => {
    const normalizedBrandName = brandInfo.name.toLowerCase();

    if (search === '') {
      searchedBrands.push(brandInfo);
    }
    else if (normalizedBrandName.includes(search)) {
      const brandName = brandInfo.name;
      const brandNameMatches = highlightMatches(brandName, search);
      const searchedBrand = { ...brandInfo, name: brandNameMatches }

      searchedBrands.push(searchedBrand);
    }

    return searchedBrands;
  }, []);

  const toggleBodyLocationFilter = event => {
    const { checked, name } = event.target;

    if (checked) {
      setBodyLocationFilters([...bodyLocationFilters, name]);
    }
    else {
      const index = bodyLocationFilters.indexOf(name);
      const newBodyLocationFilters = [...bodyLocationFilters]
      newBodyLocationFilters.splice(index, 1);

      setBodyLocationFilters(newBodyLocationFilters)
    }
  }

  return (
    <Wrapper>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Brands</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <SearchBar setSearch={setSearch} />
            {searchedBrands.map((brand, index) => {
              const brandName = brand.name

              return (
                <li key={brand.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        inputProps={{ 'aria-label': `${brandName} checkbox` }}
                        />
                    }
                    label={
                      typeof brandName === "string"
                        ? brandName
                        : <span>
                            {brandName[0]}
                            <Bold>{brandName[1]}</Bold>
                            {brandName[2]}
                          </span>
                    }
                    />
                </li>
              )
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Filters</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <FilterList
              list={bodyLocation}
              clickCallback={toggleBodyLocationFilter}
              id="location"
            />
          </List>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 100%;
  height: 100vh;
  min-width: 250px;
  margin-right: 10px;
  padding-top: 10px;
  border-right: 2px solid lightgrey;
  overflow-y: scroll;

  &&::-webkit-scrollbar {
    display: none;
  }
`;

const ListHeader = styled.span`
  font-weight: bold;
`;

const List = styled.ul`
  line-height: 1.8;

  li {
    padding-left: 10px;
  }
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default Sidebar;
