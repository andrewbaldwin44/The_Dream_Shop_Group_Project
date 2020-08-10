import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const Sidebar = () => {
  return (
    <Wrapper>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Brands</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Category Shirts</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
            <li>Placeholder</li>
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
