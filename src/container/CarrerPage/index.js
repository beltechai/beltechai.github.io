import React from "react";
import {
  MainContainer,
  Container,
  CarrerInfo,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  InfoContainer,
  InfoHeading,
  BulletTextContainer,
  BulletContainer,
  Bullet,
  BulletText
} from "./style";
import CarrerSearch from "../../components/CareerSearch";

const CarrerPage = () => {
  return (
    <MainContainer>
      <Container>
        <CarrerInfo>
          <HeadingContainer>
            <HeadingSubContainer>
              <HeadingText>We are looking for</HeadingText>
              <Circle />
            </HeadingSubContainer>
          </HeadingContainer>
          <InfoContainer>
            <InfoHeading>We value trajectory of growth over years of experience. Join us if you:</InfoHeading>
            <BulletTextContainer>
                <BulletContainer>
                    <Bullet />
                    <BulletText>Are motivated by big gnarly problems, not by titles.</BulletText>
                </BulletContainer>
                <BulletContainer>
                    <Bullet />
                    <BulletText>Are a generalist looking for a challenge to prove yourself.</BulletText>
                </BulletContainer>
                <BulletContainer>
                    <Bullet />
                    <BulletText>Are hungry for learning, winning and have something outstanding to show for it.</BulletText>
                </BulletContainer>
                <BulletContainer>
                    <Bullet />
                    <BulletText>Understand when to make trade-offs and are insistent that quality doesn't always have to compromise speed.</BulletText>
                </BulletContainer>
                <BulletContainer>
                    <Bullet />
                    <BulletText>Are a team player and understand a certain level of empathy is required to empower an entire team over the individual.</BulletText>
                </BulletContainer>
            </BulletTextContainer>
          </InfoContainer>
        </CarrerInfo>
        <CarrerSearch />
      </Container>
    </MainContainer>
  );
};

export default CarrerPage;
