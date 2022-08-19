// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import CapBn from "../../assets/cap-bn.jpg";
import CapText from "../../assets/cap-1.png";

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

  @media (max-width: 640px) {
    width: 90vw;
    left: 5vw;
    transform: unset;
  }
`

const CaptivatingText = styled.div`
  position: absolute;
  width: 80%;
  bottom: -25%;
  left: -25%;
  
  @media (max-width: 640px) {
    width: 90vw;
    left: 5vw;
    bottom: 0%;
    transform: translateY(120%);
  }
`

const CaptivatingSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const mq = window.matchMedia("(max-width: 40em)");
    if (!mq.matches) {
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
          },
        }
      );

    } else {
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
          },
        }
      );
      gsap.from(
        element.childNodes[0],
        {
          left: '-100%',
          ease: "slow",
          scrollTrigger: {
            id: `section-3`,
            trigger: element.childNodes[0],
            start: "top bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
      gsap.from(
        element.childNodes[0].childNodes[1],
        {
          bottom: '-280%',

          ease: "slow",
          scrollTrigger: {
            id: `section-2`,
            trigger: element.childNodes[0],
            start: "center bottom",
            end: "center center",
            scrub: true,
          },
        }
      );
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
