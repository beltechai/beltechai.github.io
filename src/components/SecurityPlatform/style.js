import styled from "styled-components";
import Color from "../../styles/color";

export const SecurityPlatformContainer = styled.div`
  background: linear-gradient(159.8deg, #151a4b 33.48%, #03336c 138.38%);
  padding-bottom: 10px;
`;

export const HeadingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  z-index: 0;
`;

export const HeadingSubContainer = styled.div`
  /* display: flex; */
  position: relative;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  background-color: #5277F7;;
  position: absolute;
  top: 10%;
  left: -4%;
  z-index: -1;
  @media (max-width: 1127px) {
    width: 65px;
    height: 65px;
    left: 3%;
  }
`;

export const HeadingText = styled.h1`
  font-size: 40px;
  width: 522px;
  text-align: center;
  color: white;
  @media (max-width: 1127px) {
    font-size: 35px;
  }
`;

export const SecurityContentContainer = styled.div`

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
  max-width: 515px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1127px) {
    max-width: 480px;
  }
`;

export const TextContentContainer = styled.div`
  max-width: 520px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const Video = styled.video`
  margin-top: 45px;
  max-width: 471px;
  @media (max-width: 1127px) {
    max-width: 430px;
  }
  @media (max-width: 935px) {
    max-width: 300px;
  }
`;

export const TextContentHeading = styled.h1`
  font-size: 34px;
  font-weight: 700;
  @media (max-width: 1127px) {
    font-size: 28px;
  }
`;

export const TextContentSubHeading = styled.div`
`;

export const BulletPoint = styled.div`
  background-color: ${Color.primaryColor};
  min-width: 10px;
  min-height: 10px;
  border-radius: 5px;
  @media (max-width: 1127px) {
    min-width: 8px;
    min-height: 8px;
  }
`;

export const BulletPointContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BulletPointText = styled.div`
  margin-left: 7px;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: 1127px) {
    font-size: 16px;
  }
`;

export const BackGroundCircle = styled.div`
  width: 440px;
  height: 400px;
  border-radius: 220px;
  background-color: #F9F9F9;
  position: absolute;
  z-index: -1;
`;

export const BackGroundCircle1 = styled.div`
    width: 440px;
    height: 400px;
    border-radius: 220px;
    background: rgba(255, 247, 217, 0.6);
    position: absolute;
    z-index: -1;
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
  font-size: 48px;
  font-weight: 700;
  margin-right: 4px;
`;

export const DownArrow = styled.div`
  color: #35D5A4;
  font-size: 48px;
  margin-right: 10px;
`;

export const AnalysisText = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
