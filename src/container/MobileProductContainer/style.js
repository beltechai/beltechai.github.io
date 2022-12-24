import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 603px;
`;

export const Container = styled.div`
`;

export const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const HeadingSubContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Circle = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 26%;
    left: 36%;
    z-index: -1;
`;
export const HeadingText = styled.h1`
  font-size: 22px;
  text-align: center;
`;

export const Card = styled.div`
    background-image: url(${props => props.image});
    width: 334px;
    height: 186px;
    background-color: red;
    position: relative;
    background-size: cover;
    margin-bottom: 100px;
`;

export const InfoDiv = styled.div`
    background-color: white;
    width: 252px;
    height: 126px;
    position: absolute;
    background-size: cover;
    top: 70%;
    padding: 14px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

export const CardHeadingText = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
`;

export const CardSubHeadingText = styled.div`
    color: #686868;
    font-size: 13px;
    margin-bottom: 15px;
`;

export const LinkDiv = styled(Link)`
    text-decoration: none;
    font-size: 13px;
    font-weight: 600;
    color: #006AE9;
`;

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 90px;
`;

export const ProductHeadingText = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

export const ProductHeadingContainer = styled.div`
    min-width: 334px;
    padding: 0px 18px 0px 18px;
    margin-bottom: 20px;
`;

export const UnderLine = styled.div`
    width: 44px;
    height: 4px;
    background-color: #006AE9;
    margin-top: 5px;
`;