import React from "react";
import Spinner from "../Spinner";
import { Container, MainContainer, SpinnerContainer } from "./style";

const SpinnerDiv = () => {
  return (
    <MainContainer>
      <Container>
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      </Container>
    </MainContainer>
  );
};

export default SpinnerDiv;
