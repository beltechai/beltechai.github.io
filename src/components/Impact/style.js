import styled from "styled-components";
import Color from '../../styles/color';

export const MainContainer = styled.div`
  justify-content: center;
  min-height: 1900px;
  display: flex;
  @media (max-width: 1200px) {
    min-height: 1600px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const HeadingSubContainer = styled.div`
    /* display: flex; */
    position: relative;
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 19%;
    left: -15%;
    z-index: -1;
    @media (max-width: 1200px) {
      width: 60px;
      height: 60px;
      top: 25%;
    }
    @media (max-width: 500px) {
      width: 35px;
      height: 35px;
    }
`;

export const HeadingText = styled.h1`
   font-size: 50px;
   @media (max-width: 1200px) {
      font-size: 44px;
    }
    @media (max-width: 500px) {
      font-size: 24px;
    }
`;

export const ImpactContentContainer = styled.div`

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 135px;
  @media (max-width: 1007px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-bottom: 135px;
  @media (max-width: 1200px) {
    margin-bottom: 120px;
    padding-left: 25px;
  }
  @media (max-width: 1007px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
`;

export const GraphContentContainer = styled.div`
  position: relative;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextContentContainer = styled.div`
padding-top: 30px;
  max-width: 520px;
`;

export const Image = styled.img`
  margin-top: 45px;
  max-width: 471px;
  @media (max-width: 1200px) {
    max-width: 350px;
  }
  @media (max-width: 500px) {
    max-width: 270px;
  }
`;

export const TextContentHeading = styled.h1`
  font-size: 38px;
  font-weight: 700;
  @media (max-width: 1007px) {
    display: none;
  }
`;

export const TextContentHeading2 = styled.h1`
  font-size: 38px;
  font-weight: 700;
  display: none;
  @media (max-width: 1007px) {
    display: block;
    position: relative;
    top: 30px;
  }
  @media (max-width: 770px) {
    font-size: 32px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 8px;
  min-height: 8px;
  border-radius: 5px;
  @media (max-width: 770px) {
    min-width: 5px;
    min-height: 5px;
  }
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const BulletPointText = styled.div`
  margin-left: 7px;
  font-size: 21px;
  @media (max-width: 770px) {
    font-size: 19px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const BackGroundCircle = styled.div`
  width: 440px;
  height: 400px;
  border-radius: 220px;
  background-color: #F9F9F9;
  position: absolute;
  z-index: -1;
  @media (max-width: 1200px) {
    width: 320px;
    height: 320px;
  }
  @media (max-width: 500px) {
    width: 290px;
    height: 290px;
  }
`;

export const GraphText = styled.div`
  font-size: 14px;
`;

export const GraphText1 = styled.div`
  font-size: 14px;
  position: relative;
  top: -120%;
  left: 5%;
`;

export const GraphAnalysis = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

export const GraphAnalysisContainer = styled.div`
  position: relative;
`;

export const GraphAnalysis1 = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 7px;
  align-self: flex-start;
`;

export const PercentageText = styled.div`
  color: ${Color.primaryColor};
  font-size: 32px;
  font-weight: 700;
  margin-right: 4px;
  @media (max-width: 1200px) {
    font-size: 28px;
  }
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 35px;
  margin-right: 10px;
  @media (max-width: 1200px) {
    font-size: 29px;
  }
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const AnalysisText = styled.div`
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 1200px) {
    font-size: 21px;
  }
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const AnalysisText1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const HoverDiv = styled.div`
  position: absolute;
  right: -94%;
  top: 70%;
  width: 524px;
  height: 50px;
  display: none;
  ${GraphAnalysisContainer}:hover & {
    display: block;
  }
`;

export const HoverDiv2 = styled.div`
  position: absolute;
  top: 75%;
  left: 5%;
  width: 524px;
  height: 50px;
  display: none;
  ${GraphAnalysisContainer}:hover & {
    display: block;
  }
`;



export const HoverImage = styled.img`
`;

