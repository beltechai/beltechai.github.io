import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 700px;
  @media (max-width: 1200px) {
        height: 600px;
  }
  @media (max-width: 1007px) {
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: white;
`;

export const HeadingText = styled.h1`
    font-size: 50px;
    z-index: 10;
    @media (max-width: 1330px) {
        font-size: 45px;
    }
    @media (max-width: 475px) {
        font-size: 38px;
    }
`;

export const ContentContainer = styled.div`
    margin-top: 121px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1330px) {
        font-size: 45px;
        padding-left: 70px;
        padding-right: 70px;
    }
    @media (max-width: 1200px) {
        margin-top: 80px;
        padding-left: 70px;
        padding-right: 70px;
    }
    @media (max-width: 1007px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: row;
    position: relative;
    @media (max-width: 1007px) {
        width: auto;
    }
`;

export const CareerCTAContainer = styled.div`
    @media (max-width: 1007px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        margin-bottom: 20px;
    }
`;

export const Image1 = styled.img`
    max-width: 245px;
    @media (max-width: 1330px) {
        width: 200px;
    }
    @media (max-width: 1200px) {
        width: 160px;
    }
    @media (max-width: 475px) {
        width: 120px;
    }

`;

export const Image2 = styled.img`
    max-width: 245px;
    position: absolute;
    left: 200px;
    top: 50px;
    @media (max-width: 1330px) {
        width: 200px;
    }
    @media (max-width: 1200px) {
        width: 160px;
        left: 140px;
    }
    @media (max-width: 475px) {
        width: 120px;
        left: 110px;
    }
`;

export const Image3 = styled.img`
    max-width: 245px;
    margin-left: 170px;
    @media (max-width: 1330px) {
        width: 200px;
    }
    @media (max-width: 1200px) {
        width: 160px;
        margin-left: 120px;
    }
    @media (max-width: 475px) {
        width: 120px;
        margin-left: 95px;
    }
`;

export const HeadingContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 30px;
`;

export const Circle = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    background-color: #FFC800;
    position: absolute;
    top: 19%;
    left: -15%;
    z-index: 0;
    @media (max-width: 1330px) {
        width: 70px;
        height: 70px;
    }
    @media (max-width: 475px) {
        width: 60px;
        height: 60px;
    }
`;

export const HeadingSubContainer = styled.div`
    display: flex;
    position: relative;
`;

export const CareerHeadingText = styled.h2`
    color: #05052C;
    width: 383px;
    font-size: 38px;
    @media (max-width: 1330px) {
        font-size: 34px;
    }
    @media (max-width: 1200px) {
        font-size: 25px;
    }
    @media (max-width: 1007px) {
        text-align: center;
    }
    @media (max-width: 475px) {
        font-size: 22px;
    }
`;

export const CTA = styled(Link)`
    background-color: #006AE9;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 56px;
    border: none;
    color: white;
    font-size: 28px;
    border-radius: 8px;
    text-decoration: none;
    @media (max-width: 1330px) {
        font-size: 24px;
    }
    @media (max-width: 1200px) {
        font-size: 20px;
        width: 240px;
    }
    @media (max-width: 475px) {
        margin-top: 48px;
    }
`;