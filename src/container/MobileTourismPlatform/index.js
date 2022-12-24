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
  GraphAnalysisContainer,
  InfoIcon,
  HoverDiv,
  HoverImage,
  GraphText1,
  AnalysisText1,
  HoverDiv2,
  BackGroundCircle2,
  BackGroundCircle3,
} from "./style";

import AITourism from "../../assets/AITourism1.png";
import SikkimTourismApp from "../../assets/SikkimtourismApp.png";

const MobileTrafficManagement = () => {
  return (
    <TrafficManagementContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Tourism Platform</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ImpactContentContainer>
        <ContentContainer>
          <TextContentHeading>Tourist Platform for Authorities </TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle />
            <Image src={AITourism} />
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Registers and tracks tourists in sensitive areas
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Issuing tickets/permits to restricted areas
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Real-time demographics and other related analytics
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Tourism related vendor management
                </BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer>
        <ContentContainer2>
          <TextContentHeading>App for Tourists</TextContentHeading>
          <GraphContentContainer>
            <BackGroundCircle2 />
            <Image src={SikkimTourismApp} />
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                  Automatically detects traffic violations
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Registers and tracks tourists in sensitive areas
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Online application and approvals of permits
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                Access to call center
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>Tourist guide</BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer2>
      </ImpactContentContainer>
    </TrafficManagementContainer>
  );
};

export default MobileTrafficManagement;
