import React from "react";
import {
  AboutUsContent,
  BoldText,
  Container,
  ContentContainer,
  HeadingText,
  Image,
  MainContainer,
  Text,
} from "./style";
import AI from "../../assets/AI.png";
import CV from "../../assets/CV.png";

const AboutUs = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingText>About Us</HeadingText>
        <ContentContainer>
          <AboutUsContent>
            <Image src={AI} />
            <Text>
              We build AI to make cities smarter, safer and more effective
            </Text>
          </AboutUsContent>
          <AboutUsContent>
            <Image src={CV} />
            <Text>
             Our technological focus is <BoldText>Computer Vision</BoldText>
            </Text>
          </AboutUsContent>
        </ContentContainer>
      </Container>
    </MainContainer>
  );
};

export default AboutUs;
