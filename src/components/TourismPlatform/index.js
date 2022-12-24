import React from "react";
import {
  TourismPlatformContainer,
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
  GraphContentContainer1,
} from "./style";

import AITourism from "../../assets/AITourism1.png";
import SikkimTourismApp from "../../assets/SikkimtourismApp.png";

const TourismPlatform = () => {
  return (
    <TourismPlatformContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Tourism Platform</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <ImpactContentContainer>
        <ContentContainer2>
          <GraphContentContainer>
            <BackGroundCircle1 />
            <Image src={AITourism} />
          </GraphContentContainer>
          <TextContentContainer>
            <TextContentHeading>
              Tourist Platform for Authorities{" "}
            </TextContentHeading>
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
        </ContentContainer2>
        <ContentContainer>
          <GraphContentContainer1>
            <BackGroundCircle />
            <Image src={SikkimTourismApp} />
          </GraphContentContainer1>
          <TextContentContainer>
            <TextContentHeading>App for Tourists</TextContentHeading>
            <TextContentSubHeading>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>Online booking of tickets</BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>
                  Online application and approvals of permits
                </BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>Access to call center</BulletPointText>
              </BulletPointContainer>
              <BulletPointContainer>
                <BulletPoint />
                <BulletPointText>Tourist guide</BulletPointText>
              </BulletPointContainer>
            </TextContentSubHeading>
          </TextContentContainer>
        </ContentContainer>
      </ImpactContentContainer>
    </TourismPlatformContainer>
  );
};

export default TourismPlatform;
