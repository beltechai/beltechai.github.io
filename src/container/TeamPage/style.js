import styled from "styled-components";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  @media (max-width: 1200px) {
    padding-bottom: 50px;
  }
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
  width: 70px;
  height: 70px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  left: -10%;
  z-index: -1;
  @media (max-width: 760px) {
    width: 60px;
    height: 60px;
  }
`;

export const HeadingText = styled.h1`
  font-size: 47px;
  @media (max-width: 1200px) {
    font-size: 40px;
  }
  @media (max-width: 760px) {
    font-size: 35px;
  }
`;

export const CoreTeamContainer = styled.div`
  position: relative;
  background-color: ${Colors.primaryColor};
  min-height: 610px;
  margin-top: 40px;
  background: linear-gradient(180deg, #ffffff 50%, #006ae9 50%);
  @media (max-width: 1200px) {
    min-height: 480px;
    margin-top: 25px;
  }
  @media (max-width: 790px) {
    display: none;
  }
`;

export const CoreTeamContainer2 = styled.div`
  position: relative;
  background-color: ${Colors.primaryColor};
  min-height: 400px;
  margin-top: 30px;
  background: linear-gradient(180deg, #ffffff 50%, #006ae9 50%);
  display: flex;
  justify-content: center;
  @media (min-width: 791px) {
    display: none;
  }
`;

export const TeamProfileContainer = styled.div`
  width: 340px;
  height: 400px;
  left: 100px;
  top: 396px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  margin-left: 30px;
  @media (max-width: 1200px) {
    width: 250px;
    height: 300px;
  }
`;

export const TeamProfileContainer2 = styled.div`
  width: 340px;
  height: 400px;
  left: 33%;
  top: 40px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  @media (max-width: 1200px) {
    width: 250px;
    height: 300px;
  }
  @media (max-width: 538px) {
    left: 25%;
  }
  @media (max-width: 438px) {
    left: 20%;
  }
`;

export const TeamProfiles = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 90px;
  @media (max-width: 1200px) {
    width: 130px;
    height: 130px;
  }
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: -0.3px;
  margin-top: 51px;
`;

export const Designation = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: -0.3px;
  margin-top: 21px;
`;

export const CollegeText = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
  color: #51535a;
  margin-top: 12px;
`;

export const AdvisoryBoardContainer = styled.div``;

export const AdvisoryBoardTeamContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 167px;
    margin-bottom: 117px;
    @media (max-width: 1100px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 0px;
      margin-bottom: 0px;
    }
`;

export const AdvisoryTeamCard = styled.div`
  max-height: 325px;
  width: 580px;
  background-color: #f4f4f4;
  display: flex;
  @media (max-width: 1200px) {
    max-height: 300px;
    width: 520px;
  }
  @media (max-width: 1100px) {
    margin-top: 140px;
  }
  @media (max-width: 580px) {
    max-width: 400px;
  }
`;

export const AdvisoryTeamImage = styled.img`
  width: 230px;
  height: 270px;
  position: relative;
  left: 20px;
  bottom: 70px;
  @media (max-width: 1200px) {
    width: 100x;
    height: 240px;
  }
  @media (max-width: 580px) {
    width: 132px;
    height: 193px;
    bottom: 50px;
  }
`;

export const AdvisoryTeamInfo = styled.div`
  margin-left: 50px;
  @media (max-width: 580px) {
    margin-left: 35px;
  }
`;

export const AdName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-top: 21px;
  @media (max-width: 580px) {
    font-size: 20px;
  }
`;

export const AdDesg = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #006ae9;
  margin-top: 15px;
  width: 232px;
`;

export const AdExp = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-top: 70px;
  width: 231px;
  @media (max-width: 1100px) {
    margin-top: 50px;
    padding-bottom: 10px;
  }
`;
