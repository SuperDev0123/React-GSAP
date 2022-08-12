// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'
import BikeImg from "../../assets/Accera-bike-1.png";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
`;

const DualSuspension = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;
`;

const DualSuspensionTitle = styled.h2`
  font-size: 50px;
  padding: 20px 0;
  text-align: center;
`
const DualSuspensionText = styled.p`
  line-height: 29px;
  font-size: 16px;
  font-weight: normal;
  padding: 20px 0;
  text-align: center;
`

const DualSuspensionSection = () => {
  const ref = useRef(null);
  const sloganRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
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
            snap: true,
          },
        }
      );
      sloganRef.current.childNodes.forEach((elem, index) => {
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
              snap: true,
            },
          }
        );
      });
      gsap.from(
        imgRef.current.childNodes[0],
        {
          transform: 'skew(10deg, 10deg)',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: imgRef.current.childNodes[0],
            start: "bottom bottom",
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
    <DualSuspension id='power_house' ref={ref}>
      <Row>
        <Column xs={12} md={6} ref={imgRef}>
          <img src={BikeImg} alt="Bike 1" />
        </Column>
        <Column xs={12} md={6} ref={sloganRef}>
          <DualSuspensionTitle>
            Dual Suspension
          </DualSuspensionTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <DualSuspensionText>
            The Mozo Suspension used in the svitch bike makes the ride comfortable in the most bumpy rides. The lockable suspension can be tweaked as per the road you are riding on. The rear suspension makes it smooth for the rider and reduces the jerks on back.
          </DualSuspensionText>
        </Column>
      </Row>
    </DualSuspension>
  );
};

export default DualSuspensionSection;
