import React from "react";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import moment from 'moment';

import { StyledAccordionSummary, InformationContainer } from './InformationAccordion';

function OrderHistoryAccordion({ title, informationData, id }) {
  return (
    <Accordion>
      <StyledAccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        {title}:
      </StyledAccordionSummary>
      <InformationContainer>
        {typeof informationData !== 'undefined' && (
          Object.values(informationData).map((information, index) => {
            const { datePurchased, amountPaid, itemsPurchased } = information;

            return (
              <Accordion key={`${id}${index}`}>
                <OrderHeader
                  expandIcon={<ExpandMoreIcon />}
                >
                  <span>Order on {moment(datePurchased).format('MMMM Do YYYY, h:mm:ss a')}</span>
                  <Green>${amountPaid}</Green>
                </OrderHeader>
                <AccordionDetails>
                    {itemsPurchased.map((item, index) => {
                      const {
                        itemDetails: {
                          name,
                          price,
                        },
                        quantity
                      } = item;

                      return (
                        <ItemDetails key={`itempurchased${index}`}>
                            <span>{quantity}</span>
                            <span>x</span>
                            <span>{name}</span>
                            <Green>{price}</Green>
                        </ItemDetails>
                      )
                    })}
                </AccordionDetails>
              </Accordion>
            )
          })
        )}
      </InformationContainer>
    </Accordion>
  )
}

const OrderHeader = styled(AccordionSummary)`
  span:first-child {
    padding-right: 20px;
  }
`;

const Green = styled.span`
  color: #47D688;
`;

const ItemDetails  =styled.div`
  padding-left: 20px;

  span:nth-child(2) {
    padding: 0 20px;
  }

  span:nth-child(3) {
    padding-right: 40px;
  }
`;

export default OrderHistoryAccordion;
