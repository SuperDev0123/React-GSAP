// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'

const move = keyframes`
0% { transform: translateY(-5px)  }
    50% { transform: translateY(10px) }
    100% { transform: translateY(-5px) }
`;

const HomeSection = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  background-color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  @media only Screen and (max-width: 48em) {
  
  }
  @media only Screen and (max-width: 420px) {
   
  }
`;

const MainContent = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Oswald:400,700&display=swap");

  position: absolute;
  top: 85%;
  right: 15%;
  display: flex;
  align-items: end;
  line-height: 29px;
  transform: translate(50%, -50%);
  font-size: 31px;
  text-transform: uppercase;
  font-family: "Oswald";
  transition: none 0s ease 0s;
  font-weight: 600;
  @media only Screen and (max-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;

const VideoBackground = styled.div`
  position: relative;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
`;

const HeroSection = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      gsap.to(element, {
        opacity: 0,
        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: 'bottom-=50',
          scrub: true,
        },
      });
    } else {
      gsap.to(element, {
        position: "fixed",
        top: "1rem",
        left: "3rem",
        right: "3rem",
        padding: "1.5rem 2rem",

        borderRadius: "50px",

        border: "3px solid var(--white)",

        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: element,
          start: "bottom+=300 top",
          end: "+=250",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <HomeSection id="home" ref={ref}>
      <VideoBackground>
        <Video autoPlay loop muted >
          <source src="/Videos/stars.mp4" type="video/mp4" />
        </Video>
        <MainContent>
          Indian by
          <HeartFill size={16} color="red" style={{marginLeft: '10px'}} />
        </MainContent>
      </VideoBackground>
    </HomeSection>
  );
};

export default HeroSection;
