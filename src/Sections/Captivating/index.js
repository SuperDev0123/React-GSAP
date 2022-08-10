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
  // height: 100vh;
  position: relative;
  margin-bottom: 50vh;
`;

const CaptivatingContainer = styled.div`
  position: relative;
  top: 0;
  left: 90%;
  transform: translateX(-100%);
  width: 60vw;
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
    if (true) {
      gsap.from(
        element,
        {
          top: 300,
          opacity: 0,

          ease: "power2.inOut",
          scrollTrigger: {
            id: `section-1`,
            trigger: element,
            start: "bottom bottom",
            end: "top center",
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
