import styled from "styled-components";
import Color from "../../styles/color";

export const TrafficManagementContainer = styled.div`

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
    top: 10%;
    left: -4%;
    z-index: -1;
    @media (max-width: 1120px) {
      width: 60px;
      height: 60px;
      left: 7%;
    }
`;

export const HeadingText = styled.h1`
  font-size: 40px;
  width: 500px;
  text-align: center;
  @media (max-width: 1120px) {
    font-size: 33px;
  }
`;

export const ImpactContentContainer = styled.div`

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 135px;
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  margin-bottom: 135px;
`;

export const GraphContentContainer = styled.div`
  position: relative;
  max-width: 545px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1120px) {
    max-width: 450px;
  }
`;

export const TextContentContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1120px) {
    max-width: 450px;
    padding-left: 40px;
  }
`;

export const Image = styled.img`
  margin-top: 45px;
  max-width: 471px;
  @media (max-width: 1120px) {
    max-width: 380px;
    margin-top: 38px;
  }
`;

export const TextContentHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  @media (max-width: 1120px) {
    font-size: 30px;
  }
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 8px;
  min-height: 8px;
  border-radius: 5px;
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const BulletPointText = styled.div`
  margin-left: 7px;
  font-size: 20px;
  @media (max-width: 1120px) {
    font-size: 17px;
  }
`;

export const BackGroundCircle = styled.div`
  width: 440px;
  height: 400px;
  border-radius: 220px;
  background-color: #F9F9F9;
  position: absolute;
  z-index: -1;
  @media (max-width: 1120px) {
    width: 320px;
    height: 320px;
  }
`;

export const BackGroundCircle1 = styled.div`
    width: 440px;
    height: 400px;
    border-radius: 220px;
    background: rgba(255, 247, 217, 0.6);
    position: absolute;
    z-index: -1;
    @media (max-width: 1120px) {
      width: 380px;
      height: 380px;
    }
`;

export const GraphText = styled.div`
  font-size: 14px;
`;

export const GraphAnalysis = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 7px;
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
  @media (max-width: 1120px) {
    font-size: 27px;
  }
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 35px;
  margin-right: 10px;
  @media (max-width: 1120px) {
    font-size: 27px;
  }
`;

export const AnalysisText = styled.div`
  font-size: 24px;
  font-weight: 700;
  @media (max-width: 1120px) {
    font-size: 20px;
  }
`;

export const GraphAnalysisContainer = styled.div`
  position: relative;
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
  @media (max-width: 1120px) {
    width: 460px;
    right: -98%;
  }
`;

export const HoverImage = styled.img`
  @media (max-width: 1120px) {
    width: 390px;
  }
`;

export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 5px;
`;

export const GraphText1 = styled.div`
  font-size: 14px;
  position: relative;
  top: -120%;
  left: 5%;
  @media (max-width: 1120px) {
    width: 319px;
  }
`;

export const AnalysisText1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  @media (max-width: 1120px) {
    font-size: 20px;
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