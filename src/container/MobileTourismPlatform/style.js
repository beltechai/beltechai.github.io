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
    width: 35px;
    height: 35px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 13%;
    left: 6%;
    z-index: -1;
`;

export const HeadingText = styled.h1`
  font-size: 22px;
  width: 332px;
  text-align: center;
`;

export const ImpactContentContainer = styled.div`

`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const ContentContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
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
  max-width: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 10px;
`;

export const Image = styled.img`
  margin-top: 45px;
  max-width: 332px;
`;

export const TextContentHeading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  position: relative;
  top: 45px;
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 5px;
  min-height: 5px;
  border-radius: 5px;
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const BulletPointText = styled.div`
  margin-left: 7px;
  font-size: 14px;
`;

export const BackGroundCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 220px;
  background: #FFEFDD99;
  position: absolute;
  z-index: -1;
`;

export const BackGroundCircle2 = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 220px;
  background: #EBEFFF;
  position: absolute;
  z-index: -1;
  @media (max-width: 1120px) {
    width: 320px;
    height: 320px;
  }
`;

export const BackGroundCircle1 = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 220px;
    background: rgba(255, 247, 217, 0.6);
    position: absolute;
    z-index: -1;
`;

export const BackGroundCircle3 = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 220px;
    background: #E6FAF599;
    position: absolute;
    z-index: -1;
`;

export const GraphText = styled.div`
  font-size: 12px;
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
  font-size: 18px;
  font-weight: 700;
  margin-right: 4px;
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 35px;
  margin-right: 10px;
  font-size: 18px;
`;

export const AnalysisText = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const GraphAnalysisContainer = styled.div`
  position: relative;
  max-width: 320px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const HoverDiv = styled.div`
  position: absolute;
  top: 70%;
  width: 524px;
  height: 50px;
  display: none;
  ${GraphAnalysisContainer}:hover & {
    display: block;
  }
`;

export const HoverImage = styled.img`
  @media (max-width: 1120px) {
    width: 390px;
  }
`;

export const InfoIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
`;

export const GraphText1 = styled.div`
  font-size: 12px;
  position: relative;
  top: -120%;
  left: 5%;
`;

export const AnalysisText1 = styled.div`
  font-size: 16px;
  font-weight: 700;
  display: flex;
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