import React from "react";
import {
  HeaderContainer,
  JobDescriptionDetailsContainer,
  JobsName,
  NoJobContainer,
  NoJobSelected,
  NoJobText,
  NoJobDescriptionDetailsContainer,
  ApplyContainer,
  ApplyButton,
  UnderLine,
  DescriptionContainer,
  RoleResponsibiltiesContainer,
  JobHeadings,
  PointsContainer,
  Point,
  Circle,
  PointText,
  JobsNameContainer,
  LinkIcon,
  CrossIcon,
} from "./style";
import JobSearchIcon from "../../assets/NoJobSelected.png";
import LinkSvg from "../../assets/Link.svg";
import CrossSvg from '../../assets/cross.svg';

const JobDescription = ({ data, selectedJob, setSelectedJob }) => {
  if (selectedJob === null) {
    return (
      <NoJobDescriptionDetailsContainer>
        <NoJobContainer>
          <NoJobSelected src={JobSearchIcon} />
          <NoJobText>
            Select roles you want to apply for from job list
          </NoJobText>
        </NoJobContainer>
      </NoJobDescriptionDetailsContainer>
    );
  }
  return (
    <JobDescriptionDetailsContainer>
      <HeaderContainer>
        <JobsNameContainer to={`/job/${data[selectedJob].jobId}`} target="_blank" rel="noopener noreferrer">
          <JobsName>{data[selectedJob].position}</JobsName>
          <LinkIcon src={LinkSvg}/>
        </JobsNameContainer>
        <CrossIcon src={CrossSvg} onClick={() => setSelectedJob(null)}/>
      </HeaderContainer>
      <ApplyContainer>
        <ApplyButton to="/apply" target="_blank" rel="noopener noreferrer">Apply</ApplyButton>
      </ApplyContainer>
      <UnderLine />
      <DescriptionContainer></DescriptionContainer>
      <RoleResponsibiltiesContainer>
        <JobHeadings>Roles and Responsibilties</JobHeadings>
        <PointsContainer>
          {data[selectedJob].Responsibilities.map((data, index) => {
            return (
              <Point>
                <Circle />
                <PointText>{data}</PointText>
              </Point>
            );
          })}
        </PointsContainer>
      </RoleResponsibiltiesContainer>
      <RoleResponsibiltiesContainer>
        <JobHeadings>Must Have</JobHeadings>
        <PointsContainer>
          {data[selectedJob].MustHave.map((data, index) => {
            return (
              <Point>
                <Circle />
                <PointText>{data}</PointText>
              </Point>
            );
          })}
        </PointsContainer>
      </RoleResponsibiltiesContainer>
      <RoleResponsibiltiesContainer>
        <JobHeadings>Good to have</JobHeadings>
        <PointsContainer>
          {data[selectedJob].NiceToHave.map((data, index) => {
            return (
              <Point>
                <Circle />
                <PointText>{data}</PointText>
              </Point>
            );
          })}
        </PointsContainer>
      </RoleResponsibiltiesContainer>
    </JobDescriptionDetailsContainer>
  );
};

export default JobDescription;
