import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../styles/color";

export const HamMenuContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: white;
  overflow: hidden;
  transition: 0.5s;
  z-index: 1000;
`;

export const HeadingContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 10px 20px;
`;

export const BeltechLogoContainer = styled.img`
   @media (max-width: 760px) {
        width: 140px;
    }
`;

export const CrossIcon = styled.img`
    cursor: pointer;
    @media (max-width: 760px) {
        width: 30px;
    }
`;

export const MenuContainer = styled.div`
    margin: 10px 20px 10px 20px;
`;

export const MenuItem = styled.div`
    width: 100px;
    margin-bottom: 16px;
`;

export const Menu = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    line-height: 17px;
    color: #130F26;
    letter-spacing: 0.4px;
    font-weight: 600;
    @media (max-width: 760px) {
        font-size: 18px;
    }
`;

export const UnderLine = styled.div`
    background-color: ${Colors.primaryColor};
    height: 3px;
    width: 50%;
`;