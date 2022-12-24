import styled from "styled-components";


export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 775px;
    @media (max-width: 1330px) {
        height: 710px;
    }
    @media (max-width: 1330px) {
        height: 650px;
    }
    @media (max-width: 955px) {
        height: 450px;
    }
    @media (max-width: 800px) {
        height: 450px;
    }
    @media (max-width: 800px) {
        height: 380px;
    }
    @media (max-width: 685px) {
        height: 320px;
    }
    @media (max-width: 530px) {
        height: 240px;
    }
    @media (max-width: 426px) {
        height: 205px;
    }
`;

export const Container = styled.div`
    max-width: 1580px;
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Image = styled.img`
    max-width: 64%;
    @media (max-width: 955px) {
        max-width: 55%;
    }
`;

export const HeadingContainer = styled.div`
    /* width: 450px; */
    margin-left: 10%;
    margin-top: 138px;
    position: relative;
    @media (max-width: 955px) {
        margin-top: 50px;
    }
    @media (max-width: 530px) {
        margin-top: 25px;
        width: 50%;
    }
`;

export const HeadingText = styled.h1`
    position: relative;
    font-size: 85px;
    font-weight: 600;
    @media (max-width: 1330px) {
        font-size: 75px;
    }
    @media (max-width: 1200px) {
        font-size: 70px;
    }
    @media (max-width: 955px) {
        font-size: 60px;
    }
    @media (max-width: 800px) {
        font-size: 48px;
    }
    @media (max-width: 685px) {
        font-size: 40px;
    }
    @media (max-width: 530px) {
        font-size: 32px;
    }
    @media (max-width: 426px) {
        font-size: 26px;
    }
`;

export const Circle = styled.div`
    background-color: #FFC800;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    position: absolute;
    right: 12%;
    top: 60px;
    @media (max-width: 1330px) {
        width: 90px;
        height: 90px;
        right: 12%;
    }
    @media (max-width: 1200px) {
        width: 80px;
        height: 80px;
        top: 54px;
        right: 12%;
    }
    @media (min-width: 1500px) {
        width: 100px;
        height: 100px;
        top: 58px;
        right: 27%;
    }
    @media (max-width: 955px) {
        width: 70px;
        height: 70px;
        right: 25%;
        top: 48px;
    }
    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
        right: 29%;
        top: 38px;
    }
    @media (max-width: 685px) {
        width: 50px;
        height: 50px;
        top: 30px;
        right: 32%;
    }
    @media (max-width: 530px) {
        width: 40px;
        height: 40px;
        top: 25px;
    }
    @media (max-width: 426px) {
        width: 35px;
        height: 35px;
        top: 20px;
    }
`;

export const Circle2 = styled.div`
    background-color: #FF8300;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    position: absolute;
    right: 0;
    bottom: 8%;
    @media (max-width: 1200px) {
        width: 40px;
        height: 40px;
        bottom: 10%;
    }
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
        bottom: 12%;
    }
    @media (max-width: 530px) {
        width: 15px;
        height: 15px;
    }
`;

export const SubHeadingText = styled.h2`
    color: #1F6AFF;
    font-size: 40;
    @media (max-width: 1330px) {
        font-size: 36px;
    }
    @media (max-width: 1200px) {
        font-size: 30px;
    }
    @media (max-width: 800px) {
        font-size: 25px;
    }
    @media (max-width: 530px) {
        font-size: 16px;
    }
`;