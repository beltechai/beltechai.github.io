import React from "react";
import {
  MainContainer,
  Container,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  ContactContainer,
} from "./style";

import ContactForm from "../../components/ContactUs";
import Address from "../../components/Address";

const ContactUs = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>Contact Us</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <ContactContainer>
          <ContactForm />
          <Address />
        </ContactContainer>
      </Container>
    </MainContainer>
  );
};

export default ContactUs;
