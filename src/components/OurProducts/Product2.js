import React from "react";
import {
  ProductContainer,
  Image2,
  InfoContainer,
  ProductHeadingText,
  ListContainer,
  BulletPoint,
  List,
  ListText,
  KnowMoreButton,
  MProductContainer,
  MImage,
  MProductHeadingText,
  MKnowMoreButton,
  MInfoContainer
} from "./style";
import TourismApp from '../../assets/TourismProduct.png';

const Product1 = () => {
  return (
    <>
    <ProductContainer>
      <Image2 src={TourismApp} />
      <InfoContainer>
        <ProductHeadingText>
            AI Driven Tourism Platform
        </ProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Single platform to manage tourists and vendors</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Detailed analytics of tourists which helps boosting tourism</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Tracking of tourists in restricted areas</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>App for tourists</ListText>
          </List>
        </ListContainer>
        <KnowMoreButton to="/product#tourismplatform">Know more</KnowMoreButton>
      </InfoContainer>
    </ProductContainer>
    <MProductContainer>
      <MImage src={TourismApp}/>
      <MInfoContainer>
        <MProductHeadingText>AI Driven Tourism Platform</MProductHeadingText>
        <ListContainer>
          <List>
            <BulletPoint />
            <ListText>Single platform to manage tourists and vendors</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Detailed analytics of tourists which helps boosting tourism</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>Tracking of tourists in restricted areas</ListText>
          </List>
          <List>
            <BulletPoint />
            <ListText>App for tourists</ListText>
          </List>
        </ListContainer>
        <MKnowMoreButton to="/product#tourismplatform">Know more</MKnowMoreButton>
      </MInfoContainer>
    </MProductContainer>
    </>
  );
};

export default Product1;
