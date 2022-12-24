import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 300px;
  @media (max-width: 1330px) {
    min-height: 270px;
  }
  @media (max-width: 750px) {
    min-height: 200px;
  }
  @media (max-width: 470px) {
    min-height: 100px;
  }
`;

export const Container = styled.div`
  max-width: 1580px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  display: flex;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    linear-gradient(267.04deg, #006ae9 15.68%, #4b19dc 60.83%, #520292 118.55%);

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeadingText = styled.div`
    color: white;
    font-size: 63px;
    font-weight: 800;
    @media (max-width: 1330px) {
      font-size: 60px;
    }
    @media (max-width: 750px) {
      font-size: 50px;
  }
  @media (max-width: 470px) {
    font-size: 22px;
  }
`;

export const SubHeadingText = styled.div`
    color: white;
    font-size: 43px;
    @media (max-width: 1330px) {
      font-size: 39px;
    }
    @media (max-width: 750px) {
      font-size: 34px;
  }
  @media (max-width: 470px) {
    font-size: 14px;
  }
`;