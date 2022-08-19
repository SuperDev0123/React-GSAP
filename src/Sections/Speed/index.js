// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import SpeedSlogan from "../../assets/25-kmh.png";
import BottomLine from "../../assets/border-bottom-line.png";

const Speed = styled.div`
  width: 60vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpeedTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  padding: 20px 0;
`
const SpeedText = styled.p`
  line-height: 29px;
  font-size: 14px;
  font-weight: normal;
  padding: 20px 0;
`

const SpeedSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      element.childNodes.forEach((elem, index) => {
        elem.style.opacity = 0.15;
        gsap.to(
          elem,
          {
            opacity: 1,
            ease: "slow",
            scrollTrigger: {
              id: `section-${index}`,
              trigger: elem,
              start: "center center+=300",
              end: "top top",
              scrub: true,
            },
          }
        );
      })
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
    <Speed id='speed' ref={ref}>
      <img src={SpeedSlogan} alt="25 km" />
      <SpeedTitle>
        The Best Speed You Need for your Electric Bicycle
      </SpeedTitle>
      <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
      <SpeedText>
        Imagine what if you have the power of throttle in your E bike? Well, we give you exactly that! A full-fledged twist throttle, so that your bike rides at your command and your thirst for speed is quenched.
      </SpeedText>
    </Speed>
  );
};

export default SpeedSection;
