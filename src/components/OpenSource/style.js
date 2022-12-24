import styled from "styled-components";
import Colors from "../../styles/color";


export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 356px;
  @media (max-width: 1330px) {
    height: 340px;
  }
  @media (max-width: 610px) {
    height: 200px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background: linear-gradient(116.25deg, #BDDCFF -17.69%, rgba(210, 231, 255, 0) 73.24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    padding: 0px 10px 0px 10px;
  }
`;

export const HeadingText = styled.div`
    font-size: 50px;
    margin-bottom: 40px;
    color: #000A55;
    font-weight: 700;
    @media (max-width: 1330px) {
      font-size: 45px;
    }
    @media (max-width: 850px) {
      font-size: 38px;
    }
    @media (max-width: 610px) {
      font-size: 24px;
      margin-bottom: 10px;
    }
`;

export const SubHeadingText = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: ${Colors.primaryColor};
    margin-bottom: 9px;
    line-height: 48px;
    @media (max-width: 1330px) {
      font-size: 28px;
    }
    @media (max-width: 610px) {
      font-size: 14px;
      margin-bottom: 0px;
    }
`;

export const Text = styled.div`
    font-size: 22px;
    text-align: center;
    @media (max-width: 1330px) {
      font-size: 21px;
    }
    @media (max-width: 610px) {
      font-size: 12px;
    }
`;