import React from "react";
import styled from "styled-components";
import nogaHeadShot from "/assets/nogaHeadShot.png"; // Ensure the path is correct

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Ensure both blocks are the same height */
  text-align: start;
  gap: 50px; /* Adjusted gap */
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
  flex-wrap: nowrap; /* No wrapping */

  @media (max-width: 1024px) {
    flex-wrap: wrap; /* Enable wrapping for medium screens */
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 50px;

  }
`;

const Text = styled.div`
  flex: 2; /* Take up more space */
  color: #000;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 200;
  line-height: 1.5;
  margin-left: 10px;
  max-width: 1000px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    font-size: 16px;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: start;
    font-size: 14px;

  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-right: 12px;
    max-width: 80%;
  }
`;

const ImageContainer = styled.div`
  flex: 1; /* Adjusted flex to ensure proper scaling */
  max-width: 400px; /* Set a maximum width */
  flex-shrink: 0;
  height: auto;
  borderradius: "0px";
  display: flex;
  justify-content: center;
  align-items: center;
  borderRadius: '0px', 

  @media (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  borderRadius: '0px', 

  @media (max-width: 768px) {
    width: 80%; /* Adjust as needed */
  }
`;

const HeadLine = styled.h1`
  margin: 0 0 0.5em 0;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  margin: 0 0 1em 0;
  max-width: 90%;

  @media (max-width: 1024px) {
    font-size: 18px;
    max-width: 100%;

  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px; 

  }
`;

const Skills = styled.p`
  font-size: 16px;
  font-weight: 200;
  position: relative;
  padding-left: 1em; /* Adjust padding to account for the ">" symbol */
  text-indent: -1em; /* Negative indent to pull the text back to the start */

  &::before {
    content: '> '; /* Add the ">" symbol */
    position: relative;
    left: 0;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


const About = () => {
  return (
    <Container>
      <Text>
        <HeadLine>Hi</HeadLine>
        <Paragraph>
          I'm Noga, I'm 25 y/o based in Tel Aviv.
          <br />A Visual Communication student at Shenkar College of
          Engineering, Design and Art.
          <br />
          <br />
        </Paragraph>
        <Paragraph>
          I truly believe in the importance of design and its ability to make a
          difference. Every project is a chance for me to improve and express
          myself.
          I'm excited to show how design can have a real impact, and I hope to{" "}
          inspire others along the way.
        </Paragraph>
        <br />
        <Skills>
          Illustrator, Photoshop, After Effects, InDesign, Premiere,
          Lightroom, Figma.
        </Skills>
      </Text>

      <ImageContainer>
        <Image src={nogaHeadShot} alt="noga-headshot-image" />
      </ImageContainer>
    </Container>
  );
};

export default About;
