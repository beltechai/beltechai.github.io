import React from "react";
import { MainContainer, Container, HeadingContainer, HeadingSubContainer, HeadingText, Circle, Card, InfoDiv, CardHeadingText, CardSubHeadingText, LinkDiv, ProductsContainer, ProductHeadingText, ProductHeadingContainer, UnderLine } from "./style";
import ProductBackground from '../../assets/ProductBackground.png';

const CardComponent = ({image, heading, subHeading, link}) => {
    return (
        <Card image={image}>
            <InfoDiv>
                <CardHeadingText>
                    {heading}
                </CardHeadingText>
                <CardSubHeadingText>
                    {subHeading}
                </CardSubHeadingText>
                <LinkDiv to={link}>Learn more &rarr;</LinkDiv>
            </InfoDiv>
        </Card>
    );
}

const MobileProductPage = () => {
  return (
    <MainContainer>
      <Container>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>Products</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Integrated Traffic Management</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={ProductBackground} heading="Traffic Management System" subHeading="Optimizes traffic flow by reducing congestion..." link="/trafficManagement"/>
        <CardComponent image={ProductBackground} heading="Traffic Violation System" subHeading="Automatically detects traffic violations Violation proof and payment link..." link="/trafficManagement"/>
        <CardComponent image={ProductBackground} heading="Reduction in Toxic Emissions" subHeading="Reduction in idle time at junctions, 200 tons of toxic emissions reduced per ..." link="/trafficManagement"/>
        <CardComponent image={ProductBackground} heading="AI Ways Online Dashboard" subHeading="Control traffic signals remotely. View of all traffic violations..." link="/trafficManagement"/>
        <CardComponent image={ProductBackground} heading="AI Driven Challan Collection" subHeading="Live location of vehicles with unpaid traffic violations near the authorities..." link="/trafficManagement"/>
      </ProductsContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Integrated Security Platform</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={ProductBackground} heading="Crime Detection" subHeading="AI automatically detects any suspicisous/violent activities..." link="/securityPlatform"/>
        <CardComponent image={ProductBackground} heading="Criminal Detection" subHeading="Detects people of interest and alerts authorities of their presence..." link="/securityPlatform"/>
        <CardComponent image={ProductBackground} heading="Women Safety" subHeading="AI automatically detects any suspicisous/violent activities.." link="/securityPlatform"/>
        <CardComponent image={ProductBackground} heading="Intrusion Detection" subHeading="Registers users (temporary or permanent) allowed within premises..." link="/securityPlatform"/>
      </ProductsContainer>
      <ProductsContainer>
        <ProductHeadingContainer>
            <ProductHeadingText>AI Driven Tourism Platform</ProductHeadingText>
            <UnderLine />
        </ProductHeadingContainer>
        <CardComponent image={ProductBackground} heading="Tourist Platform for Authorities" subHeading="Registers and tracks tourists in sensitive areas..." link="/tourismPlatform"/>
        <CardComponent image={ProductBackground} heading="App for Tourists" subHeading="Online booking of tickets, online application and approvals of permits..." link="/tourismPlatform"/>
      </ProductsContainer>
      </Container>
    </MainContainer>
  );
};

export default MobileProductPage;
