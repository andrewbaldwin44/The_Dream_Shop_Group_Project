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

const Nav = styled.ul`
  padding: 10px 5px;

  li {
    cursor: pointer;
  }
`;

const ListHeader = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
`;

export default Sidebar;
