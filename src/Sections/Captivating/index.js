// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'
import CapBn from "../../assets/cap-bn.jpg";
import CapText from "../../assets/cap-1.png";

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Captivating = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
`;

const CaptivatingContainer = styled.div`
  position: relative;
  top: 50%;
  left: 90%;
  transform: translate(-100%, 50%);
  width: 60vw;
  opacity: 0.3;
`

const CaptivatingText = styled.div`
  position: absolute;
  width: 80%;
  bottom: -25%;
  left: -25%;
`

const CaptivatingSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    console.log(element)
    console.log(element.childNodes)
    console.log(element.childNodes[0])
    if (true) {
      gsap.to(
        element.childNodes[0],
        {
          opacity: 1,
          ease: "slow",
          scrollTrigger: {
            id: `section-1`,
            trigger: element.childNodes[0],
            start: "top center",
            end: "center center",
            scrub: true,
            snap: true,
          },
        }
      );
      gsap.from(
        element.childNodes[0],
        {
          left: '0%',
          ease: "slow",
          scrollTrigger: {
            id: `section-3`,
            trigger: element.childNodes[0],
            start: "top center",
            end: "center center",
            scrub: true,
            snap: true,
          },
        }
      );
      gsap.from(
        element.childNodes[0].childNodes[1],
        {
          bottom: '-80%',

          ease: "slow",
          scrollTrigger: {
            id: `section-2`,
            trigger: element.childNodes[0],
            start: "center bottom",
            end: "top top",
            scrub: true,
            snap: true,
          },
        }
      );
      
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
    <Captivating id='captivating' ref={ref}>
      <CaptivatingContainer>
        <img src={CapBn} alt="Cap Bn" />
        <CaptivatingText>
          <img src={CapText} alt="Cap Bn" />
        </CaptivatingText>
      </CaptivatingContainer>
    </Captivating>
  );
};

export default CaptivatingSection;
