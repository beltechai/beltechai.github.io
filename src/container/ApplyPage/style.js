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
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const HeadingSubContainer = styled.div`
  /* display: flex; */
  position: relative;
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  left: -10%;
  z-index: -1;
`;

export const HeadingText = styled.h1`
  font-size: 47px;
`;

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
    margin-top: 50px;
`;