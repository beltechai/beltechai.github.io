import styled from "styled-components";
import { Link } from "react-router-dom";
import Colors from "../../styles/color";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
`;

export const ProductMenu = styled.div`
  width: 525px;
  height: 40px;
  background: #FFFFFF;
  border: 1px solid #D6D5D8;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  background-color: white;
`;

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 75px;
    z-index: 100;
    width: 100%;
    background-color: white;
    padding-bottom: 10px;
`;

export const Menu = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: black;
`;

export const UnderLine = styled.div`
    height: 2px;
    background-color: ${Colors.primaryColor};
`;
