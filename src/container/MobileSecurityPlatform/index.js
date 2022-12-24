import React from "react";
import {
  TrafficManagementContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  ImpactContentContainer,
  ContentContainer,
  ContentContainer2,
  GraphContentContainer,
  TextContentContainer,
  Image,
  TextContentHeading,
  TextContentSubHeading,
  BulletPoint,
  BulletPointContainer,
  BulletPointText,
  BackGroundCircle,
  GraphText,
  GraphAnalysis,
  GraphAnalysis1,
  PercentageText,
  DownArrow,
  AnalysisText,
  BackGroundCircle1,
  BackGroundCircle2,
  BackGroundCircle3,
  Video
} from "./style";

import Graph1 from "../../assets/Graph2.png";
import Graph2 from "../../assets/Graph3.png";
import Graph3 from "../../assets/Graph1.png";
import AIDashboard from "../../assets/AIDashboard.png";

//Video
import Intrusion from '../../assets/video/Intrusion2.mp4';
import Security from '../../assets/video/security.mp4';
import WomanSecurity from '../../assets/video/women_security.mp4';
import CriminalDetection from '../../assets/video/criminalDetection.mp4';

const MobileTrafficManagement = () => {
  return (
    <TrafficManagementContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Integrated Security Platform</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ImpactContentContainer>
        <ContentContainer>
          <TextContentHeading>Crime Detection</TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle />
            <Video src={Security} controls autoPlay muted loop/>
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                AI automatically detects any suspicisous/violent activities
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Real-time alerts
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Detects: violene, theft, harassment, and a lot more
                </BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer>
        <ContentContainer2>
          <TextContentHeading>Criminal Detection</TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle2 />
            <Video src={CriminalDetection} controls autoPlay muted loop/>
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Detects people of interest and alerts authorities of their presence
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Real-time intelligence of suspected criminals such as: places visits, people visited, change in pattern, etc.
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Highly customisable intelligence parameters
                </BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer2>
        <ContentContainer>
          <TextContentHeading>Women Saftey</TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle3 />
            <Video src={WomanSecurity} controls autoPlay muted loop/>
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                AI automatically detects any suspicisous/violent activities
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Real-time alerts
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Detects: violene, theft, harassment, and a lot more
                </BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer>
        <ContentContainer2>
          <TextContentHeading>Intrusion Detection</TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle1 />
            <Video src={Intrusion} controls autoPlay muted loop/>
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Registers users (temporary or permanent) allowed within premises
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Alerts authorities if any unauthorised person is detected
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Real-time tracking of unauthorised people
                </BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer2>
      </ImpactContentContainer>
    </TrafficManagementContainer>
  );
};

export default MobileTrafficManagement;
