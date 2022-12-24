import React from "react";
import {
  SecurityPlatformContainer,
  HeadingContainer,
  HeadingSubContainer,
  HeadingText,
  Circle,
  SecurityContentContainer,
  ContentContainer,
  ContentContainer2,
  GraphContentContainer,
  TextContentContainer,
  Video,
  TextContentHeading,
  TextContentSubHeading,
  BulletPoint,
  BulletPointContainer,
  BulletPointText,
  BackGroundCircle,
  BackGroundCircle1,
  GraphText,
  GraphAnalysis,
  GraphAnalysis1,
  PercentageText,
  DownArrow,
  AnalysisText
} from "./style";
import Intrusion from '../../assets/video/Intrusion2.mp4';
import Security from '../../assets/video/security.mp4';
import WomanSecurity from '../../assets/video/women_security.mp4';
import CriminalDetection from '../../assets/video/criminalDetection.mp4';

const SecurityPlatform = () => {
  return (
    <SecurityPlatformContainer>
      <HeadingContainer>
        <HeadingSubContainer>
          <HeadingText>AI Driven Integrated Security Platform</HeadingText>
          <Circle />
        </HeadingSubContainer>
      </HeadingContainer>
      <SecurityContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <Video src={Security} controls autoPlay muted loop/>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>
                Crime Detection
              </TextContentHeading>
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
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle1 />
              <Video src={CriminalDetection} controls autoPlay muted/>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Criminal Detection</TextContentHeading>
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
                    Detects people of interest and alerts authorities of their presence
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
          </ContentContainer>
          <ContentContainer2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Video src={WomanSecurity} controls autoPlay muted loop/>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Women Safety</TextContentHeading>
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
          </ContentContainer2>
          <ContentContainer>
            <GraphContentContainer>
              <BackGroundCircle1 />
              <Video src={Intrusion} controls autoPlay muted loop/>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Intrusion Detection</TextContentHeading>
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
          </ContentContainer>
        </SecurityContentContainer>
    </SecurityPlatformContainer>
  );
};

export default SecurityPlatform;
