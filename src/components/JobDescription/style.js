import styled from "styled-components";
import Colors from "../../styles/color";
import { Link } from "react-router-dom";

export const JobDescriptionDetailsContainer = styled.div`
  width: 1024px;
  margin-left: 20px;
  margin-top: 50px;
  background-color: white;
  border-radius: 8px;
  padding-bottom: 50px;
  margin-bottom: 40px;
  @media (max-width: 660px) {
    display: none;
  }
`;

export const NoJobDescriptionDetailsContainer = styled.div`
  min-height: 800px;
  width: 816px;
  margin-left: 20px;
  margin-top: 50px;
  @media (max-width: 660px) {
    display: none;
  }
`;

export const NoJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const NoJobSelected = styled.img`
  width: 217px;
  height: 217px;
`;

export const NoJobText = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #888595;
`;

export const HeaderContainer = styled.div`
  padding: 48px 48px 0px 48px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    padding: 30px 20px 0px 20px;
  }
`;

export const JobsName = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: #130f26;
  @media (max-width: 1000px) {
    font-size: 23px;
  }
`;

export const ApplyContainer = styled.div`
  padding: 0px 48px 0px 48px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    padding: 0px 20px 0px 20px;
  }
`;

export const ApplyButton = styled(Link)`
  background: #006ae9;
  padding: 10px 15px 10px 15px;
  border-radius: 8px;
  border: none;
  color: white;
  font-size: 18px;
  text-decoration: none;
`;

export const UnderLine = styled.div`
  height: 1.5px;
  background: #c1c0c0;
`;

export const DescriptionContainer = styled.div``;

export const RoleResponsibiltiesContainer = styled.div`
  padding: 0px 48px 0px 48px;
  margin-top: 35px;
  @media (max-width: 1000px) {
    padding: 0px 30px 0px 30px;
  }
`;

export const JobHeadings = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #161616;
  @media (max-width: 1000px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const PointsContainer = styled.div`
    margin-top: 17px;
`;

export const Point = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 7px;
    font-size: 14px;
`;

export const PointText = styled.div`
    margin-left: 14px;
`;

export const Circle = styled.div`
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