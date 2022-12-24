import styled from "styled-components";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  padding: 30px 108px 30px 108px;
  z-index: 0;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`;

export const HeadingSubContainer = styled.div`
  /* display: flex; */
  position: relative;
`;

export const Circle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  right: -5%;
  z-index: -1;
`;

export const HeadingText = styled.h1`
  font-size: 40px;
`;

export const UnderLine = styled.div`
  height: 1.5px;
  background: #c1c0c0;
`;

export const PrivacyContianer = styled.div`
  padding: 0px 108px 100px 108px;
`;

export const PrivacyDiv = styled.div`
  margin-top: 60px;
`;

export const PrivacyHeading = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #161616;
`;

export const PrivacyText = styled.div`
  margin-top: 20px;
  font-weight: normal;
  font-size: 18px;
  color: grey;
`;
