import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import InformationAccordion from './InformationAccordion';

import { AuthContext } from '../AuthContext';

function Admin() {
  const {
    appUser,
    idToken,
  } = useContext(AuthContext);

  const [status, setStatus] = useState('loading');
  const [userData, setUserData] = useState(null);

  const sendIDToken = idToken => {
    return fetch('/admin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken
      }),
    })
  }

  useEffect(() => {
    if (idToken) {
      sendIDToken(idToken)
        .then(response => response.json())
        .then(data => {
          const { admin } = data;

          if (!data.decodedToken.admin) {
            setStatus('unauthorized');
          }
          else {
            const { userData } = data;

            setUserData(Object.values(userData));
            setStatus('idle');
          }
        })
        .catch(e => setStatus('unauthorized'));
    }
  }, [idToken]);

  if (status === 'loading') {
    return (
      <div>loading...</div>
    )
  }
  else if (status === 'idle' && userData) {
    return (
      <Wrapper>
        <Title>Welcome Admin!</Title>
        {userData.map((user, index) => {
          const {
            amountDue,
            email,
            shippingData
          } = user;

          if (typeof shippingData === 'undefined') return;
          console.log(shippingData);

          const { personalInfo, paymentInfo, shippingDetails } = shippingData;

          return (
            <Accordion key={`user${index}`}>
                <StyledAccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                    {email}
                </StyledAccordionSummary>
                <HighestAccordionDetails>

                  <InformationAccordion
                    title='Personal Information'
                    informationData={personalInfo}
                    id='personalinfo'
                  />
                  <InformationAccordion
                    title='Payment Information'
                    informationData={paymentInfo}
                    id='paymentInfo'
                  />
                  <InformationAccordion
                    title='Shipping Details'
                    informationData={shippingDetails}
                    id='shippingdetails'
                  />

                </HighestAccordionDetails>
            </Accordion>
          )
        })}
      </Wrapper>
    )
  }
  else {
    return (
      <Redirect from='/admin' to="/" />
    )
  }
}

const Wrapper = styled.div`
  margin: 50px auto;
  width: 70%;
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 2.2em;
  margin-bottom: 40px;
`;

const HighestAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
`;

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

export default Admin;
