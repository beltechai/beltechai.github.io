import styled from "styled-components";
import Colors from "../../styles/color";

export const ContactUsForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-bottom: 165px;
  @media (max-width: 770px) {
    width: 90%;
    padding-bottom: 120px;
  }
`;

export const NameInput = styled.input`
  max-width: 736px;
  height: 50px;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  color: black;
  padding: 12px;
  font-size: 16px;
`;

export const EmailInput = styled.input`
  max-width: 736px;
  height: 50px;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  margin-top: 30px;
  padding: 12px;
  font-size: 16px;
`;

export const PhoneNumberInput = styled.input`
  max-width: 736px;
  height: 50px;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  margin-top: 30px;
  padding: 12px;
  font-size: 16px;
`;

export const OrganisationName = styled.input`
  max-width: 736px;
  height: 50px;
  border: 1px solid #7d7d7d;
  border-radius: 6px;
  margin-top: 30px;
  padding: 12px;
  font-size: 16px;
`;

export const RequirementContainer = styled.div`
    margin-top: 80px;
    max-width: 757px;
`;

export const RequirementField = styled.textarea`
  width: 100%;
  height: 261px;
  border: 1px solid #05052c;
  border-radius: 6px;
  padding: 15px;
`;

export const ProductText = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.3px;
  color: ${Colors.primaryColor};
  margin-top: 70px;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const ProductCheckBox = styled.div`
  min-width: 200px;
  margin-bottom: 20px;
  margin-right: 40px;
`;

export const Label = styled.label`
  margin-left: 7px;
  font-size: 18px;
`;

export const Button = styled.button`
    background-color: ${Colors.primaryColor};
    width: 192px;
    height: 50px;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 20px;
    margin-top: 90px;
    cursor: pointer;
    @media (max-width: 770px) {
      align-self: center;
      margin-top: 60px;
    }
`;

export const ErrorText = styled.div`
  color: red;
  padding-left: 5px;
`;