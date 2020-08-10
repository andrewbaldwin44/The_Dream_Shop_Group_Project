import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';

import SearchBar from "./SearchBar";
import FilterList from "./FilterList";

const Sidebar = () => {
  const brands = useSelector(state => state.items.brands);
  const bodyLocation = useSelector(state => state.items.bodyLocation);

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
            <SearchBar />
            <FilterList
              list={brands}
              accessor="name"
            />
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

export default Sidebar;
