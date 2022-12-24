import styled from "styled-components";

export const AddressContainer = styled.div`
  width: 205px;
  @media (max-width: 770px) {
    width: 60%;
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    padding-left: 21px;
    padding-bottom: 40px;
  }
`;

export const HeadingText = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`;

export const CorporateOffice = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 35px;
  color: #05052c;
  margin-top: 11px;
`;

export const CorporateOfficeContainer = styled.div`
  margin-top: 101px;
  @media (max-width: 770px) {
    margin-top: 80px;
  }
`;

export const RegistredOfficeContainer = styled.div``;

export const RegisterOfficeText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #05052c;
  margin-top: 17px;
`;

export const ContactDetailsContainer = styled.div`
  margin-top: 89px;
  @media (max-width: 770px) {
    margin-top: 75px;
  }
`;

export const SubHeading = styled.div`
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-bottom: 7px;
`;

export const HRDepartement = styled.div`
  margin-top: 20px;
`;

export const SalesContainer = styled.div`
  margin-top: 34px;
`;

export const GeneralContainer = styled.div`
  margin-top: 34px;
`;

export const ContactText = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #05052c;
`;
