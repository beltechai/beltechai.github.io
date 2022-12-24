import React from "react";
import {
  Circle,
  Container,
  HeadingContainer,
  HeadingSubContainer,
  MainContainer,
  HeadingText,
  ContentContainer,
  GraphContentContainer,
  TextContentContainer,
  Image,
  ImpactContentContainer,
  TextContentHeading,
  TextContentSubHeading,
  BulletPointContainer,
  BulletPoint,
  BulletPointText,
  ContentContainer2,
  BackGroundCircle,
  GraphAnalysis,
  PercentageText,
  DownArrow,
  AnalysisText,
  GraphAnalysis1,
  HoverDiv,
  InfoIcon,
  GraphAnalysisContainer,
  HoverImage,
  GraphText1,
  HoverDiv2,
  AnalysisText1,
  TextContentHeading2
} from "./style";
import Graph1 from "../../assets/Graph1.png";
import Graph2 from "../../assets/Graph2.png";
import Graph3 from "../../assets/Graph3.png";
import InfoImage from "../../assets/InfoIcon.svg";
import HoverDivSvg from "../../assets/HoverDiv.svg";
import HoverRightDivSvg from '../../assets/UnionRight.svg';

const Impact = () => {
  return (
    <MainContainer>
      <Container>
        <HeadingContainer>
          <HeadingSubContainer>
            <HeadingText>Impact</HeadingText>
            <Circle />
          </HeadingSubContainer>
        </HeadingContainer>
        <ImpactContentContainer>
          <ContentContainer>
            <TextContentHeading2>Traffic Management System</TextContentHeading2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph2} />
              <GraphAnalysisContainer>
              <GraphAnalysis>
                <PercentageText>42% </PercentageText>
                <DownArrow>&darr; </DownArrow>
                <AnalysisText>
                  Reduction in total wait-time at signals
                </AnalysisText>
                <InfoIcon src={InfoImage}/>
              </GraphAnalysis>
              <HoverDiv>
              <HoverImage src={HoverDivSvg}/>
              <GraphText1>
                "This data is from the pilot which was conducted in Central
                Business District - Bangalore, under the supervision of
                Bangalore Traffic Police Department."
              </GraphText1>
              </HoverDiv>
              </GraphAnalysisContainer>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Traffic Management System</TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Optimizes traffic flow by reducing congestion
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Coordination of traffic signals across the city using AI
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Automatic green-corridor for emergency/VIP vehicles
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI is always auto learning and improving{" "}
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Can be integrated with existing traffic lights
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
          <ContentContainer2>
          <TextContentHeading2>Traffic Violation System</TextContentHeading2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph3} />
              <GraphAnalysis1>
                <PercentageText>95% + </PercentageText>
                <AnalysisText>
                  Accuracy
                </AnalysisText>
              </GraphAnalysis1>
              <GraphAnalysisContainer>
              <GraphAnalysis>
                <PercentageText>1000+</PercentageText>
                <AnalysisText1>
                Violations detected per day per junction 
                <InfoIcon src={InfoImage}/>
                </AnalysisText1>
              </GraphAnalysis>
              <HoverDiv2>
              <HoverImage src={HoverRightDivSvg}/>
              <GraphText1>
                "This data is from the pilot which was conducted in Central
                Business District - Bangalore, under the supervision of
                Bangalore Traffic Police Department."
              </GraphText1>
              </HoverDiv2>
              </GraphAnalysisContainer>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>Traffic Violation System</TextContentHeading>
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
                    Violation proof and payment link send automatically sent to
                    violator's mobile
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    AI Driven Challan Collection App for authorities to ease
                    challan collection
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduces traffic violations over time
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>Night vision enabled</BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer2>
          <ContentContainer>
          <TextContentHeading2>Reduction in Toxic Emissions</TextContentHeading2>
            <GraphContentContainer>
              <BackGroundCircle />
              <Image src={Graph1} />
              <GraphAnalysis>
                <PercentageText>200tons </PercentageText>
                <DownArrow>&darr; </DownArrow>
                <AnalysisText>
                Reduction in toxic emission per day
                </AnalysisText>
              </GraphAnalysis>
            </GraphContentContainer>
            <TextContentContainer>
              <TextContentHeading>
                Reduction in Toxic Emissions
              </TextContentHeading>
              <TextContentSubHeading>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduction in idle time at junctions
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    200 tons of toxic emissions reduced per city per day
                  </BulletPointText>
                </BulletPointContainer>
                <BulletPointContainer>
                  <BulletPoint />
                  <BulletPointText>
                    Reduction in fuel expenses for commuters
                  </BulletPointText>
                </BulletPointContainer>
              </TextContentSubHeading>
            </TextContentContainer>
          </ContentContainer>
        </ImpactContentContainer>
      </Container>
    </MainContainer>
  );
};

export default Impact;
