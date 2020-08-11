import React from "react";
import styled from "styled-components";

function Dropdown({ items, id, clickCallback }) {
  return (
    <DropdownContainer>
      <DropdownButton>Categories</DropdownButton>
      <DropdownMenu className="dropdown-menu">
        {items.map((item, index) => {
          return (
            <DropdownItem
            key={`${id}${index}`}
              onClick={() => clickCallback(item)}
            >
              {item}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
  font-weight: bold;
  height: var(--navbar-height);
  width: 100px;

  &:hover .dropdown-menu {
    display: block;
  }
`;

const DropdownButton = styled.button`

`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  top: 68px;
  left: -12px;
  min-width: 230px;
  z-index: 1;
  backdrop-filter: blur(15px);
`;

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  z-index: 5;
  background-color: #fff;
  color: black;
  padding: 12px 16px;
  cursor: pointer;

  &:hover {
    background-color: #dcdcdc;
  }
`;

export default Dropdown;
