import React from "react";
import {
  Container,
  MainContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  CoreTeamContainer,
  TeamProfileContainer,
  Image,
  TeamProfiles,
  Name,
  Designation,
  CollegeText,
  TeamProfilesContainer,
  AdvisoryBoardContainer,
  AdvisoryBoardTeamContainer,
  AdvisoryTeamCard,
  AdvisoryTeamImage,
  AdvisoryTeamInfo,
  AdName,
  AdDesg,
  AdExp,
  CoreTeamContainer2,
  TeamProfileContainer2,
} from "./style";
import AgastyaBellad from "../../assets/Agastya.png";
import pinakee from "../../assets/Pinakee.jpeg";
import sathisha from "../../assets/sathisha.jpeg";
import rajesh from "../../assets/Rajesh.jpg";
import ravi from "../../assets/Ravi.jpg";
import ashish from "../../assets/Ashish.jpg";
import robendas from "../../assets/Robendas.jpeg";

const TeamPage = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>Core Team</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <CoreTeamContainer>
          <TeamProfiles>
            <TeamProfileContainer>
              <Image src={AgastyaBellad} />
              <Name>Agastya Bellad</Name>
              <Designation>Founder & CEO</Designation>
              <CollegeText>Boston University</CollegeText>
            </TeamProfileContainer>
            <TeamProfileContainer>
              <Image src={pinakee} />
              <Name>Pinakee Biswas</Name>
              <Designation>Co-Founder & CTO</Designation>
              <CollegeText>IIT, Delhi</CollegeText>
            </TeamProfileContainer>
            <TeamProfileContainer>
              <Image src={sathisha} />
              <Name>Dr. Sathisha Basavaraju</Name>
              <Designation>Artificial Intelligence Scientist</Designation>
              <CollegeText>IIT, Guwahati</CollegeText>
            </TeamProfileContainer>
          </TeamProfiles>
        </CoreTeamContainer>
        <CoreTeamContainer2>
          <TeamProfileContainer2>
            <Image src={AgastyaBellad} />
            <Name>Agastya Bellad</Name>
            <Designation>Founder & CEO</Designation>
            <CollegeText>Boston University</CollegeText>
          </TeamProfileContainer2>
        </CoreTeamContainer2>
        <CoreTeamContainer2>
          <TeamProfileContainer2>
            <Image src={pinakee} />
            <Name>Pinakee Biswas</Name>
            <Designation>Co-Founder & CTO</Designation>
            <CollegeText>IIT, Delhi</CollegeText>
          </TeamProfileContainer2>
        </CoreTeamContainer2>
        <CoreTeamContainer2>
          <TeamProfileContainer2>
            <Image src={sathisha} />
            <Name>Dr. Sathisha Basavaraju</Name>
            <Designation>Artificial Intelligence Scientist</Designation>
            <CollegeText>IIT, Guwahati</CollegeText>
          </TeamProfileContainer2>
        </CoreTeamContainer2>
        <AdvisoryBoardContainer>
          <HeadingContainer>
            <HeadingSubContainer>
              <HeadingText>Advisory Board</HeadingText>
              <Circle />
            </HeadingSubContainer>
          </HeadingContainer>
          <AdvisoryBoardTeamContainer>
            <AdvisoryTeamCard>
              <AdvisoryTeamImage src={ashish} />
              <AdvisoryTeamInfo>
                <AdName>Ashish Kashyap</AdName>
                <AdDesg>
                  Founder and CEO of INDmoney.com Founder & Director of Finzoom.
                </AdDesg>
                <AdExp>
                  Founder & X-CEO of ibibo (Goibibo & redBus) India's leading
                  online travel group.
                </AdExp>
              </AdvisoryTeamInfo>
            </AdvisoryTeamCard>
            <AdvisoryTeamCard>
              <AdvisoryTeamImage src={rajesh} />
              <AdvisoryTeamInfo>
                <AdName>Rajesh Dembla</AdName>
                <AdDesg>
                  Founder of Bidzapp Founder of Zoozle and Founder of Pacific
                  Gaming Pvt. Ltd.
                </AdDesg>
                <AdExp>
                  Rajesh Dembla holds more than 22 years of telecommunication
                  industry experience.
                </AdExp>
              </AdvisoryTeamInfo>
            </AdvisoryTeamCard>
          </AdvisoryBoardTeamContainer>
          <AdvisoryBoardTeamContainer>
            <AdvisoryTeamCard>
              <AdvisoryTeamImage src={ravi} />
              <AdvisoryTeamInfo>
                <AdName>Ravi Koulagi</AdName>
                <AdDesg>
                  Global Director and CTO Global Public Sector Segment at Cisco.
                </AdDesg>
                <AdExp>
                  Ravi Koulagi holds more than 25 years of software and
                  telecommunication industry experience.
                </AdExp>
              </AdvisoryTeamInfo>
            </AdvisoryTeamCard>
            <AdvisoryTeamCard>
              <AdvisoryTeamImage src={robendas} />
              <AdvisoryTeamInfo>
                <AdName>Roben Dass</AdName>
                <AdDesg>
                  Founder Chairman & Managing Director - KOOCHIE GLOBAL
                </AdDesg>
                <AdExp>
                  Founder Chairman & Managing Director at KoochieGlobal a
                  multinational conglomerate that has 24 offices & 9 state of
                  the art OEM production units across the world.
                </AdExp>
              </AdvisoryTeamInfo>
            </AdvisoryTeamCard>
          </AdvisoryBoardTeamContainer>
        </AdvisoryBoardContainer>
      </Container>
    </MainContainer>
  );
};

export default TeamPage;
