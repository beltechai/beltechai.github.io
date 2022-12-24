import styled from "styled-components";
import Colors from "../../styles/color";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  justify-content: center;
  display: flex;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const HeadingContainer = styled.div`
  display: flex;
  padding: 30px 108px 30px 108px;
  z-index: 0;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 870px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 740px) {
    padding: 28px 75px 28px 75px;
  }
  @media (max-width: 580px) {
    padding: 23px 33px 23px 33px;
  }
`;

export const HeadingSubContainer = styled.div`
  /* display: flex; */
  position: relative;
`;

export const Circle = styled.div`
  width: 65px;
  height: 65px;
  border-radius: 50px;
  background-color: #ffc800;
  position: absolute;
  top: 19%;
  right: -5%;
  z-index: -1;
  @media (max-width: 690px) {
    width: 55px;
    height: 55px;
  }
`;

export const HeadingText = styled.h1`
  font-size: 40px;
  @media (max-width: 942px) {
    font-size: 36px;
  }
  @media (max-width: 690px) {
    font-size: 30px;
  }
`;

export const ApplyButton = styled(Link)`
  background: #006ae9;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  border: none;
  color: white;
  height: 46px;
  font-size: 18px;
  text-decoration: none;
  width: 100px;
  display: flex;
  justify-content: center;
`;

export const UnderLine = styled.div`
  height: 1.5px;
  background: #c1c0c0;
`;

export const JobDescriptionContainer = styled.div`
  padding: 30px 108px 30px 108px;
  @media (max-width: 740px) {
    padding: 28px 75px 28px 75px;
  }
  @media (max-width: 580px) {
    padding: 23px 33px 23px 33px;
  }
`;


export const RoleResponsibiltiesContainer = styled.div`
  margin-top: 35px;
`;

export const JobHeadings = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #161616;
`;

export const PointsContainer = styled.div`
    margin-top: 17px;
`;

export const Point = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 18px;
`;

export const PointText = styled.div`
    margin-left: 13px;
    @media (max-width: 600px) {
      font-size: 13px;
  }
`;

export const Circle2 = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background: #FFB600;;
`;

export const JobsNameContainer = styled(Link)`
  display: flex;
  text-decoration: none;
`;

export const LinkIcon = styled.img`
  margin-left: 5px;
`;

export const CrossIcon = styled.img`
  cursor: pointer;
`;