import React from "react";
import { useParams } from "react-router-dom";
import { Jobs } from "../../assets/carrerCsv/carrer";
import {
  MainContainer,
  Container,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  ApplyButton,
  UnderLine,
  JobDescriptionContainer,
  Circle2,
  RoleResponsibiltiesContainer,
  JobHeadings,
  PointsContainer,
  Point,
  PointText,
  JobsNameContainer,
  LinkIcon,
  CrossIcon
} from "./style";

const fetchJobData = (Jobs, jobId) => {
  for (let i = 0; i < Jobs.Jobs.length; i++) {
    if (Jobs.Jobs[i].jobId === jobId) {
      return Jobs.Jobs[i];
    }
  }
};

const JobPage = (props) => {
  let { jobId } = useParams();
  let data = fetchJobData(Jobs, jobId);
  console.log("Logging the Data", data);
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>{data.position}</HeadingText>
            <Circle />
          </HeadingSubContainer>
          <ApplyButton to="/apply" target="_blank" rel="noopener noreferrer">
            Apply
          </ApplyButton>
        </HeadingContainer>
        <UnderLine />
        <JobDescriptionContainer>
          <RoleResponsibiltiesContainer>
            <JobHeadings>Roles and Responsibilties</JobHeadings>
            <PointsContainer>
              {data.Responsibilities.map((data, index) => {
                return (
                  <Point>
                    <Circle2 />
                    <PointText>{data}</PointText>
                  </Point>
                );
              })}
            </PointsContainer>
          </RoleResponsibiltiesContainer>
          <RoleResponsibiltiesContainer>
            <JobHeadings>Must Have</JobHeadings>
            <PointsContainer>
              {data.MustHave.map((data, index) => {
                return (
                  <Point>
                    <Circle2 />
                    <PointText>{data}</PointText>
                  </Point>
                );
              })}
            </PointsContainer>
          </RoleResponsibiltiesContainer>
          <RoleResponsibiltiesContainer>
            <JobHeadings>Good to have</JobHeadings>
            <PointsContainer>
              {data.NiceToHave.map((data, index) => {
                return (
                  <Point>
                    <Circle2 />
                    <PointText>{data}</PointText>
                  </Point>
                );
              })}
            </PointsContainer>
          </RoleResponsibiltiesContainer>
        </JobDescriptionContainer>
      </Container>
    </MainContainer>
  );
};

export default JobPage;
