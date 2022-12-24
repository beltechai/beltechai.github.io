import React from "react";
import {
  Container,
  HeadingContainer,
  HeadingText,
  MainContainer,
  ViewAllButton,
  MViewAllButton,
  ViewAllButtonContainer,
  MViewAllButtonContainer,
  NextIcon,
  PrevIcon,
  NextButton,
  PrevButton
} from "./style";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Product1 from "./Product1";
import Product2 from "./Product2";
import Product3 from './Product3';
import Next from '../../assets/Right.png';
import Left from '../../assets/Left.png';

const OurProducts = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingText>Our Products</HeadingText>
        </HeadingContainer>
        <ViewAllButtonContainer>
          <ViewAllButton to="/product">
            <div>View All</div>
            <div>&#8594;</div>
          </ViewAllButton>
        </ViewAllButtonContainer>
        <Carousel 
        renderArrowNext={(clickHandler, hasNext, labelPrev) => 
          hasNext && (
            <NextButton onClick={clickHandler}>
              <NextIcon src={Next} />
            </NextButton>
          )
        }
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <PrevButton onClick={clickHandler}>
              <PrevIcon src={Left} />
            </PrevButton>
          )
        }
        showStatus={false}>
            <Product3 />
            <Product1 />
            <Product2 />
        </Carousel>
        <MViewAllButtonContainer>
          <MViewAllButton to="/product">
            <div>View All</div>
            <div>&#8594;</div>
          </MViewAllButton>
        </MViewAllButtonContainer>
      </Container>
    </MainContainer>
  );
};

export default OurProducts;
