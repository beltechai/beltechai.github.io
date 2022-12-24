import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
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
  position: relative;
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 22%;
  left: -10%;
  z-index: -1;
  @media (max-width: 770px) {
    width: 50px;
    height: 50px;
    top: 19%;
  }
`;

export const HeadingText = styled.h1`
  font-weight: 700;
  font-size: 47px;
  line-height: 72px;
  color: #130f26;
  @media (max-width: 770px) {
    font-size: 32px;
    margin: 0;
  }
`;

export const ContactContainer = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
  }
`;
