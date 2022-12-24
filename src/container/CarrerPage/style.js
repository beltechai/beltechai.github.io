import styled from "styled-components";
import CarrerBackground from "../../assets/CarrerBackground.png";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const CarrerInfo = styled.div`
  background-image: url(${CarrerBackground});
  background-size: contain;
  height: auto;
  padding-left: 108px;
  padding-right: 108px;
  padding-bottom: 120px;
  @media (max-width: 1300px) {
    padding-left: 90px;
    padding-right: 90px;
    padding-bottom: 100px;
  }
  @media (max-width: 1100px) {
    padding-left: 60px;
    padding-right: 60px;
    padding-bottom: 70px;
  }
  @media (max-width: 530px){
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 30px;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  padding-top: 30px;
  z-index: 0;
`;

export const HeadingSubContainer = styled.div`
  /* display: flex; */
  position: relative;
`;

export const Circle = styled.div`
  width: 85px;
  height: 85px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  right: -10%;
  z-index: -1;
`;

export const HeadingText = styled.h1`
  font-size: 50px;
  @media (max-width: 1100px) {
    font-size: 40px;
  }
`;

export const InfoContainer = styled.div``;

export const InfoHeading = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  margin-bottom: 33px;
  @media (max-width: 1100px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const BulletContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
`;

export const Bullet = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 5px;
  background-color: #ffb600;
`;

export const BulletText = styled.div`
    @media (max-width: 1100px) {
      font-size: 16px;
  }
`;

export const BulletTextContainer = styled.div``;
