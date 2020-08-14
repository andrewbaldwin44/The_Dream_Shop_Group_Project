import React from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function InformationAccordion({ title, informationData, id }) {
  return (
    <Accordion>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {title}:
      </StyledAccordionSummary>
      <InformationContainer>
        {typeof informationData !== 'undefined' && (
          Object.entries(informationData).map(([informationType, information], index) => {
            return (
              <div key={`${id}${index}`}>
                <span>{informationType}:</span>
                <span>{information}</span>
              </div>
            )
          })
        )}
      </InformationContainer>
    </Accordion>
  )
}

const StyledAccordionSummary = styled(AccordionSummary)`
  font-weight: bold;
`;

const InformationContainer = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 20px;

    span:first-child {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

export default InformationAccordion;
