import React from "react";
import {
  AddressContainer,
  ContactDetailsContainer,
  CorporateOffice,
  CorporateOfficeContainer,
  GeneralContainer,
  HeadingText,
  HRDepartement,
  RegisterOfficeText,
  RegistredOfficeContainer,
  SalesContainer,
  SubHeading,
  ContactText
} from "./style";

const Address = () => {
  return (
    <AddressContainer>
      <RegistredOfficeContainer>
        <HeadingText>Bangalore Office</HeadingText>
        <RegisterOfficeText>
          BELLAD CHAMBERS P.B Road, Vidyanagar Hubli Dharwad, Karnataka 580031
        </RegisterOfficeText>
      </RegistredOfficeContainer>
      <CorporateOfficeContainer>
        <HeadingText>Corporate Office</HeadingText>
        <CorporateOffice>
          3rd Floor, 9, Millers Rd, Kaverappa Layout, Vasanth Nagar, Bengaluru,
          Karnataka 560052
        </CorporateOffice>
      </CorporateOfficeContainer>
      <ContactDetailsContainer>
        <HeadingText>Contact Details</HeadingText>
        <HRDepartement>
          <SubHeading>HR Department</SubHeading>
          <ContactText>hr@beltech.ai</ContactText>
          <ContactText>+91-9686718809</ContactText>
        </HRDepartement>
        <SalesContainer>
            <SubHeading>Sales:</SubHeading>
            <ContactText>sales@beltech.ai</ContactText>
            <ContactText>+91-9874513456</ContactText>
        </SalesContainer>
        <GeneralContainer>
          <SubHeading>General:</SubHeading>
          <ContactText>office@beltech.ai</ContactText>
          <ContactText>+91 -9845102222</ContactText>
        </GeneralContainer>
      </ContactDetailsContainer>
    </AddressContainer>
  );
};

export default Address;
