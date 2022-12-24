import React from "react";
import {
  ProductContainer,
  Image,
  InfoContainer,
  ProductHeadingText,
  ListContainer,
  BulletPoint,
  List,
  ListText,
  KnowMoreButton,
  Image2,
  MProductContainer,
  MImage,
  MInfoContainer,
  MProductHeadingText,
  MKnowMoreButton
} from "./style";
import TrafficManagment from "../../assets/TrafficManagement.png";

const Product1 = () => {
  return (
    <>
    <ProductContainer>
      <Image2 src={TrafficManagment} />
      <InfoContainer>
        <ProductHeadingText>
          AI Driven Traffic Management Platform
        </ProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Reduces traffic congestion by controlling traffic signals using AI</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Automatically detects traffic violations and generates challans</ListText>
          </List>
        </ListContainer>
        <KnowMoreButton to="/product#trafficManagement">Know more</KnowMoreButton>
      </InfoContainer>
    </ProductContainer>
    <MProductContainer>
      <MImage src={TrafficManagment}/>
      <MInfoContainer>
        <MProductHeadingText>AI Driven Traffic Management Platform</MProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Reduces traffic congestion by controlling traffic signals using AI</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Automatically detects traffic violations and generates challans</ListText>
          </List>
        </ListContainer>
        <MKnowMoreButton to="/product#trafficManagement">Know more</MKnowMoreButton>
      </MInfoContainer>
    </MProductContainer>
    </>
  );
};

export default Product1;
