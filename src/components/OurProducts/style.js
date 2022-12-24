import styled from "styled-components";
import Ai from "../../assets/AI2.png";
import Color from "../../styles/color";
import ravi from "../../assets/AI.png";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 810px;
  @media (max-width: 1200px) {
    height: 760px;
  }
  @media (max-width: 1007px) {
    height: 880px;
  }
  @media (max-width: 845px) {
    height: 820px;
  }
  @media (max-width: 520px) {
    height: 720px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background: #006AE9;
`;

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 79px;
  @media (max-width: 1200px) {
    margin-top: 65px;
  }
  @media (max-width: 1007px) {
    margin-top: 40px;
  }
`;

export const HeadingText = styled.div`
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  color: white;
  @media (max-width: 1200px) {
    font-size: 45px;
  }
  @media (max-width: 1007px) {
    font-size: 40px;
  }
  @media (max-width: 570px) {
    font-size: 30px;
  }
`;

export const ViewAllButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 100px;
  position: relative;
  @media (max-width: 1007px) {
    display: none;
  }
`;

export const MViewAllButtonContainer = styled.div`
  display: none;
  position: relative;
  @media (max-width: 1007px) {
    display: flex;
    position: relative;
    justify-content: center;
  }
`;

export const ViewAllButton = styled(Link)`
  width: 170px;
  height: 50px;

  border: 3px solid white;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -55px;
  text-decoration: none;
  @media (max-width: 1200px) {
    width: 160px;
    height: 48px;
    font-size: 22px;
    top: -40px;
  }
`;
export const MViewAllButton = styled(Link)`
  width: 120px;
  height: 40px;

  border: 3px solid #5277f7;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  line-height: 29px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: -55px;
  text-decoration: none;
  @media (max-width: 570px) {
    font-size: 14px;
    line-height: 20px;
    width: 100px;
    height: 35px;
  }
`;

export const DummyProductContainer = styled.div`

`;

export const ProductContainer = styled.div`
  width: 80%;
  height: 80%;
  top: 10%;
  background-color: #1455a2;
  position: relative;
  left: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  @media (max-width: 1200px) {
    margin-top: 0px;
  }
  @media (max-width: 1007px) {
    display: none;
  }
`;

export const MProductContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 40px;
  @media (max-width: 1007px) {
    display: block;
  }
  @media (min-width: 1008px){
    display: none;
  }
  @media (max-width: 845px) {
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  width: 480px !important;
  margin-left: 100px;
  height: 360px;
  @media (max-width: 1330px) {
    width: 450px !important;
    height: 340px;
  }
  @media (max-width: 1200px) {
    width: 360px !important;
    height: 300px;
  }
`;

export const MImage = styled.img`
  width: 360px !important;
  @media (max-width: 845px) {
    width: 320px !important;
  }
  @media (max-width: 520px) {
    width: 220px !important;
  }
`;

export const Image2 = styled.img`
  width: 480px !important;
  margin-left: 40px;
  @media (max-width: 1330px) {
    width: 450px !important;
  }
  @media (max-width: 1200px) {
    width: 360px !important;
  }
`;


export const InfoContainer = styled.div`
  /* background-image: url(${Ai}); */
  width: 688px;
  height: 570px;
  padding-top: 20px;
  padding-left: 95px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  background-size: contain;
  @media (max-width: 1200px) {
    padding-left: 60px;
  }
`;

export const MInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  margin: auto;
  @media (max-width: 525px) {
    width: 300px;
  }
`;

export const ProductHeadingText = styled.div`
  font-weight: 800;
  font-size: 32px;
  line-height: 42px;
  color: white;
  text-align: left;
  width: 455px;
  @media (max-width: 1330px) {
    font-size: 32px;
  }
`;

export const MProductHeadingText = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 44px;
  color: white;
  text-align: left;
  margin-top: 10px;
  @media (max-width: 845px) {
    font-size: 20px;
  }
  @media (max-width: 525px) {
    width: 300px;
    line-height: 30px;
    font-size: 16px;
  }
`;

export const BulletPoint = styled.div`
  background-color: white;
  width: 8px;
  height: 8px;
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  margin-top: 38px;
  @media (max-width: 1200px) {
    margin-top: 24px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ListText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  margin-left: 4px;
  text-align: initial;
  padding: 8px;
  color: #d9d9d9;
  @media (max-width: 1200px) {
    padding: 6px;
    text-align: left;
  }
  @media (max-width: 845px) {
    font-size: 18px;
    padding: 4px;
  }
  @media (max-width: 570px) {
    font-size: 14px;
  }
`;

export const KnowMoreButton = styled(Link)`
  background-color: ${Color.primaryColor};
  border-radius: 8px;
  width: 140px;
  height: 53px;
  color: white;
  font-weight: 400;
  font-size: 22px;
  line-height: 29px;

  /* identical to box height */
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1330px) {
    width: 120px;
    font-size: 19px;
  }
`;

export const MKnowMoreButton = styled(Link)`
  background-color: ${Color.primaryColor};
  border-radius: 8px;
  width: 140px;
  height: 45px;
  color: white;
  font-weight: 400;
  font-size: 18px;
  line-height: 29px;
  margin-top: 20px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 570px) {
    font-size: 14px;
    width: 120px;
    height: 38px;
  }
`;

export const NextIcon = styled.img`
  width: 31px;
  height: 54px;
  @media (max-width: 1330px) {
    width: 27px;
    height: 50px;
  }
  @media (max-width: 1000px) {
    width: 24px;
    height: 44px;
  }
  @media (max-width: 570px) {
    width: 10px;
    height: 20px;
  }
`;

export const PrevIcon = styled.img`
  width: 31px;
  height: 54px;
  @media (max-width: 1330px) {
    width: 27px;
    height: 50px;
  }
  @media (max-width: 1000px) {
    width: 24px;
    height: 44px;
  }
  @media (max-width: 570px) {
    width: 10px;
    height: 20px;
  }
`;

export const NextButton = styled.button`
  width: 50px;
  background: transparent;
  position: absolute;
  top: 49%;
  right: 50px;
  border: none;
  z-index: 10;
  @media (max-width: 570px) {
    right: 5px;
  }
  @media (max-width: 570px) {
    right: 5px;
    width: 30px;
  }
`;

export const PrevButton = styled.button`
  background: transparent;
  position: absolute;
  top: 49%;
  left: 50px;
  width: 50px;
  border: none;
  z-index: 10;
  @media (max-width: 570px) {
    left: 5px;
    width: 30px;
  }
`;
