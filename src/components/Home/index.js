import React from "react";
import {
  MainContainer,
  Container,
  Image,
  HeadingContainer,
  HeadingText,
  Circle,
  SubHeadingText,
  Circle2,
} from "./style";
import backgroundImg from "../../assets/Group.png";

const Home = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <Circle />
          <HeadingText>Building Cities of the Future</HeadingText>
          <SubHeadingText>With AI and IoT</SubHeadingText>
          <Circle2 />
        </HeadingContainer>
        <Image src={backgroundImg} />
      </Container>
    </MainContainer>
  );
};

export default Home;
