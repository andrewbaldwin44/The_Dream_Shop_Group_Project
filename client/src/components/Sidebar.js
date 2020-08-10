import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AddIcon from '@material-ui/icons/Add';

const Sidebar = () => {
  const brands = useSelector(state => state.items.brands);
  const bodyLocation = useSelector(state => state.items.bodyLocation);

  console.log(brands)

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
          <ul>
            {brands.map(brand => {
              return (
                <li key={brand.id}>{brand.name}</li>
              )
            })}
          </ul>
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
          <ul>
            {bodyLocation.map((location, index) => {
              return (
                <li key={`location${index}`}>{location}</li>
              )
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  height: 100%;
  min-height: 100vh;
  width: 250px;
  border-right: 2px solid lightgrey;
`;

const ListHeader = styled.span`
  font-weight: bold;
`;

export default Sidebar;
