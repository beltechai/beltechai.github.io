import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 420px;
  @media (max-width: 1330px) {
    min-height: 380px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 97px 0px 97px;
  @media (max-width: 570px) {
    padding: 0px 30px 0px 30px;
  }
`;

export const HeadingText = styled.div`
  font-size: 50px;
  color: #000a55;
  margin-bottom: 105px;
  font-weight: 700;
  @media (max-width: 1330px) {
    font-size: 45px;
  }
  @media (max-width: 1007px) {
    margin-bottom: 60px;
    margin-top: 60px;
  }
  @media (max-width: 570px) {
    font-size: 24px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1007px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutUsContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 440px;
  @media (max-width: 1007px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 35px;
  }
`;

export const Image = styled.img`
  width: 104px;
  @media (max-width: 1007px) {
    margin-bottom: 6px;
    width: 80px;
  }
  @media (max-width: 570px) {
    width: 50px;
  }
`;

export const Text = styled.div`
  font-size: 22px;
  margin-left: 25px;
  @media (max-width: 1007px) {
    text-align: center;
  }
  @media (max-width: 570px) {
    font-size: 16px;
  }
`;

export const BoldText = styled.span`
   font-size: 22px;
   font-weight: bold;
  @media (max-width: 570px) {
    font-size: 16px;
  }
`;
