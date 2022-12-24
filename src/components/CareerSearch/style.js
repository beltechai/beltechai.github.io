import styled from "styled-components";
import { Link } from "react-router-dom";

export const CarrerMainSearchContainer = styled.div`
  background: #f4f4fb;
`;

export const CarrerSearchContainer = styled.div`
  padding: 20px 100px 0px 100px;
  @media (max-width: 1300px) {
    padding: 20px 60px 0px 60px;
  }
  @media (max-width: 1000px) {
    padding: 20px 30px 0px 30px;
  }
  @media (max-width: 673px) {
    padding: 20px 20px 0px 20px;
  }
`;

export const SearchBar = styled.div`
  width: 600px;
  background-color: white;
  display: flex;
  position: relative;
  border-radius: 8px;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const Search = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  text-decoration: none;
  padding-left: 45px;
  border-radius: 8px;
`;

export const Button = styled.button`
  width: 130px;
  background: #5277f7;
  border: none;
  color: white;
  height: 38px;
  border-radius: 4px;
  margin-left: 10px;
`;

export const JobListingContainer = styled.div`
  margin-top: 50px;
  width: 400px;
  background: #ffffff;
  height: fit-content;
`;

export const JobListContainer = styled.div`
  background: #ffffff;
  border-radius: 4px;
`;

export const JobFound = styled.div`
  padding: 20px 0px 10px 20px;
  font-weight: 600;
  font-size: 12px;
  line-height: 19px;
  color: #606a74;
`;

export const Line = styled.hr`
  border: 0.5px solid #c1c0c0;
`;

export const JobsCardContainer = styled.div`
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 50px;
    cursor: pointer;
    @media (max-width: 660px) {
      display: none;
    }
`;
export const JobsCardContainer2 = styled(Link)`
    padding-left: 20px;
    padding-bottom: 10px;
    padding-top: 10px;
    padding-right: 50px;
    cursor: pointer;
    @media (min-width: 661px) {
      display: none;
    }
    text-decoration: none;
`;

export const JobsName = styled.h2`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #404040;
`;

export const JobsName2 = styled.h2`
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  padding-left: 15px;
  color: #404040;
`;

export const JobDetails = styled.div``;

export const JobsCardDetails = styled.div`

`;
export const JobsCardDetails2 = styled.div`

`;

export const LocationContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    /* line-height: 19px; */
    color: #404040;
    margin-bottom: 9px;
    padding-left: 4px;
`;
export const LocationContainer2 = styled.div`
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    /* line-height: 19px; */
    color: #404040;
    margin-bottom: 9px;
    padding-left: 20px;
`;

export const PostedContainer = styled.div`

`;

export const Location = styled.img``;

export const LocationText = styled.div`
    margin-left: 5px;
`;

export const TimeText = styled.h3`

`;

export const Clock = styled.img``

export const JobsFlex = styled.div`
    display: flex;
    justify-content: center;
`;
