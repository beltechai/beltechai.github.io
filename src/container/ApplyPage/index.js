import React from "react";
import {
  Container,
  MainContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  FormContainer,
} from "./style";
import Spinner from "../../components/Spinner";

const ApplyPage = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>Apply</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <FormContainer>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdkDta-ET-_Em4cc5mdZY9hqsAqquws7TIhd3FKdHJSj6M8Dg/viewform?embedded=true"
            width="640"
            height="1337"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            <Spinner />
          </iframe>
        </FormContainer>
      </Container>
    </MainContainer>
  );
};

export default ApplyPage;
