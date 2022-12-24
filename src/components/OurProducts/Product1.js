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
  MProductContainer,
  MImage,
  MInfoContainer,
  MProductHeadingText,
  MKnowMoreButton,
  DummyProductContainer
} from "./style";
import Traffic from "../../assets/Traffic.png";
import IntegratedSecurity from '../../assets/Integrated_Security.png';

const Product1 = () => {
  return (
    <>
    <ProductContainer>
      <Image src={IntegratedSecurity} />
      <InfoContainer>
        <ProductHeadingText>
          AI Driven Integrated Security Platform
        </ProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Detects suspicious/illegal activities</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Criminal Detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Suspicious people detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Customisable intelligence parameters</ListText>
          </List>
        </ListContainer>
        <KnowMoreButton to="/product#security">Know more</KnowMoreButton>
      </InfoContainer>
    </ProductContainer>
    <MProductContainer>
      <MImage src={Traffic}/>
      <MInfoContainer>
        <MProductHeadingText>AI Driven Integrated Security Platform</MProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Detects suspicious/illegal activities</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Criminal Detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Suspicious people detection</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Customisable intelligence parameters</ListText>
          </List>
        </ListContainer>
        <MKnowMoreButton to="/product#security">Know more</MKnowMoreButton>
      </MInfoContainer>
    </MProductContainer>
    </>
  );
};

export default Product1;
