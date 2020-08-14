import React, { useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AddIcon from "@material-ui/icons/Add";

import SearchBar from "./SearchBar";
import FilterList from "./FilterList";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

function highlightMatches(input, match) {
  const highlightSubstring = new RegExp(`(.*)(${match})(.*)`, "i");
  const matches = input.match(highlightSubstring);

  matches.splice(0, 1);

  return matches;
}

const Sidebar = ({
  bodyLocationFilters,
  setBodyLocationFilters,
  brandFilters,
  setBrandFilters,
  stockFilter,
  setStockFilter,
  topPickFilter,
  setTopPickFilter,
  category,
}) => {
  const [search, setSearch] = useState("");

  const brands = useSelector((state) => state.items.brands);
  const products = useSelector((state) => state.category.category);
  const bodyLocation = useSelector((state) => state.items.bodyLocation);

  const searchedBrands = brands.reduce((searchedBrands, brandInfo) => {
    const normalizedBrandName = brandInfo.name.toLowerCase();

    if (search === "") {
      searchedBrands.push(brandInfo);
    } else if (normalizedBrandName.includes(search)) {
      const brandName = brandInfo.name;
      const brandNameMatches = highlightMatches(brandName, search);
      const searchedBrand = { ...brandInfo, name: brandNameMatches };

      searchedBrands.push(searchedBrand);
    }

    return searchedBrands;
  }, []);

  const addFilter = (state, setter, name) => {
    setter([...state, name]);
  };

  const removeFilter = (state, setter, name) => {
    const index = state.indexOf(name);
    const newState = [...state];
    newState.splice(index, 1);

    setter(newState);
  };

  const toggleChecked = (event, state, setter) => {
    const { checked, name } = event.target;

    if (checked) addFilter(state, setter, name);
    else removeFilter(state, setter, name);
  };

  const filterRelevant = (type, id) => {
    return products && products.some((product) => product[type] === id);
  };

  return (
    <Wrapper>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon color="secondary" />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Hot Offers</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <li key='toppicks'>
              <FormControlLabel
                control={
                    <Checkbox
                      inputProps={{ 'aria-label': `Top Picks checkbox` }}
                      name='Top Pick'
                      onChange={() => setTopPickFilter(!topPickFilter)}
                    />
                  }
                  label='Spicy Deals 🌶️🔥'
              />
            </li>
            <li key='instock'>
              <FormControlLabel
                control={
                    <Checkbox
                      inputProps={{ 'aria-label': `In Stock checkbox` }}
                      name='In Stock'
                      onChange={() => setStockFilter(!stockFilter)}
                    />
                  }
                  label='In Stock'
              />
            </li>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon color="secondary" />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Brands</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <SearchBar setSearch={setSearch} />
            {searchedBrands.map((brand, index) => {
              const brandName = brand.name;

              if (!filterRelevant) return;

              if (products) {
                if (!products.some((product) => product.companyId === brand.id))
                  return;
              }

              return (
                <li key={brand.id}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        inputProps={{ "aria-label": `${brandName} checkbox` }}
                        name={String(brand.id)}
                        onClick={(event) =>
                          toggleChecked(event, brandFilters, setBrandFilters)
                        }
                      />
                    }
                    label={
                      typeof brandName === "string" ? (
                        brandName
                      ) : (
                        <span>
                          {brandName[0]}
                          <Bold>{brandName[1]}</Bold>
                          {brandName[2]}
                        </span>
                      )
                    }
                  />
                </li>
              );
            })}
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddIcon color="secondary" />}
          aria-controls="panel1a-content"
        >
          <ListHeader>Filters</ListHeader>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <FilterList
              list={bodyLocation}
              clickCallback={toggleChecked}
              checkCallback={bodyLocationFilters}
              uncheckCallback={setBodyLocationFilters}
              conditionalCallback={filterRelevant}
              id="body_location"
            />
          </List>
        </AccordionDetails>
      </Accordion>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  height: 100%;
  height: 100vh;
  min-width: 280px;
  width: 280px;
  margin-right: 20px;
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
