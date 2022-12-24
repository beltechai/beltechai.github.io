import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  @media (max-width: 1100px) {
    height: 360px;
  }
  @media (max-width: 760px) {
    height: 210px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: #130F26;
`;

export const BeltechLogoContainer = styled.div`
    display: flex;
    padding-left: 97px;
    padding-right: 97px;
    padding-top: 65px;
    align-items: flex-start;
    @media (max-width: 1100px) {
        padding-left: 90px;
        padding-right: 90px;
        padding-top: 60px;
    }
    @media (max-width: 910px) {
        padding-left: 60px;
        padding-right: 60px;
        padding-top: 40px;
    }
    @media (max-width: 760px) {
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 20px;
    }
`;

export const Logo = styled.img`
    width: 69px;
    @media (max-width: 1100px) {
        width: 60px;
    }
    @media (max-width: 760px) {
        width: 45px;
    }
`;

export const BeltechText = styled.h3`
    color: white;
    font-size: 40px;
    line-height: 46px;
    margin-left: 18px;
    @media (max-width: 1100px) {
        font-size: 35px;
    }
    @media (max-width: 760px) {
        font-size: 20px;
    }
`

export const FooterMenuContainer = styled.div`
    padding: 0px 97px 0px 97px;
    display: flex;
    justify-content: space-between;
    position: relative;
    top: -50px;
    @media (max-width: 910px) {
        padding: 0px 60px 0px 60px;
    }
`;

export const MenuContainer = styled.div`
    align-self: flex-end;
    @media (max-width: 760px) {
        display: none;
    }
`;

export const FollowUsContainer = styled.div`
    @media (max-width: 760px){
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
    }
`;

export const MenuItem = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 41px;
    font-size: 18px;
    @media (max-width: 1100px) {
        padding-right: 35px;
    }
    @media (max-width: 1100px) {
        padding-right: 25px;
    }
`;

export const FollowUsText = styled.div`
    color: white;
    font-weight: 700;
    font-size: 28px;
    @media (max-width: 1100px) {
        font-size: 25px;
    }
    @media (max-width: 760px) {
        font-size: 18px;
    }
`;

export const FollowUsImageContainer = styled.div`
    padding-top: 29px;
    @media (max-width: 760px) {
        padding-top: 0px;
    }
`;

export const Image = styled.img`
    width: 42px;
    padding-right: 13px;
    @media (max-width: 760px) {
        width: 35px;
    }
`;

export const Line = styled.hr`
    margin: 0px 97px 0px 97px;
    height:1px;
    background-color: white;
    border: none;
    @media (max-width: 1100px) {
        margin: 0px 85px 0px 85px;
    }
    @media (max-width: 910px) {
        padding: 0px 60px 0px 60px;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;

export const TermAndConditionContainer = styled.div`
    padding: 0px 97px 0px 97px;
    display: flex;
    justify-content: space-between;
    margin-top: 29px;
    @media (max-width: 910px) {
        padding: 0px 60px 0px 60px;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;

export const TNC = styled.div`
`;

export const TNCLink = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 50px;
    @media (max-width: 1100px) {
        padding-right: 40px;
    }
    @media (max-width: 760px) {
        display: none;
    }
`;

export const CopyRightText = styled.div`
    color: white;
    @media (max-width: 760px) {
        display: none;
    }
`;

export const TermAndConditionContainer2 = styled.div`
    padding-left: 25px;
    padding-right: 25px;
    position: relative;
    top: -15px;
    @media (min-width: 760px) {
        display: none;
    }
`;

export const TNC2 = styled.div`

`;

export const TNCLink2 = styled(Link)`
    text-decoration: none;
    color: white;
    padding-right: 14px;
    font-size: 13px;
    @media (min-width: 760px) {
        display: none;
    }
`;

export const Line2 = styled.div`
    height:1px;
    background-color: white;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    @media (min-width: 760px) {
        display: none;
    }
`;

export const CopyRightText2 = styled.div`
    font-size: 13px;
    color: white;
    @media (min-width: 760px) {
        display: none;
    }
`;
