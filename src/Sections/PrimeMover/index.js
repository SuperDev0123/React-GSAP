// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import PrimeMoverImg from "../../assets/The-Prime-Mover.jpg";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

const PrimeMover = styled.div`
  width: 60vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FixedBackground = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  pointer-events: none;
`

const PrimeMoverTitle = styled.h2`
  font-size: 50px;
  padding: 20px 0;
`
const SpeedText = styled.p`
  line-height: 29px;
  font-size: 18px;
  font-weight: normal;
  padding: 20px 0;
`

const PrimeMoverSection = () => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      gsap.to(
        element.childNodes[0],
        {
          opacity: 1,
          top: '0%',
          ease: "slow",
          scrollTrigger: {
            id: `section-11`,
            trigger: element,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
      gsap.to(
        element,
        {
          opacity: 0,
          ease: "slow",
          scrollTrigger: {
            id: `section-12`,
            trigger: element,
            start: "bottom center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
      element.childNodes.forEach((elem, index) => {
        if (index < 1) return;
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
              end: "bottom top",
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
    <PrimeMover id='prime_mover' ref={ref}>
      <FixedBackground src={PrimeMoverImg} alt="prime mover" />
      <Row>
        <Column xs={12} md={6}>
          <PrimeMoverTitle>
            The Prime Mover
          </PrimeMoverTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <SpeedText>
            The 250W brushless DC motor drives this beast in all types of roads and even to destinations of your adventures. Svitch is a multi-terrain e bikes. Take it wherever your heart says. Be it a beach, a desert, a hilly ride, or to your favorite beaches.

            The ebikes don’t have big engines and gearboxes, the motor is compact and powerful. This will allow you to toy with different shapes and dimensions of the road. Svitch bike comes with various battery options making it the best e bike in the market.

            Svitch will be with you.
          </SpeedText>
        </Column>
        <Column xs={12} md={6}></Column>
      </Row>
    </PrimeMover>
  );
};

export default PrimeMoverSection;
