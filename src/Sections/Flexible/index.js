// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'
import FlexibleImg from "../../assets/Flexible-bike-2.png";
import SturdyImg from "../../assets/Sturd1y-600x477.png";
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

const Flexible = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 10%;
`;

const FlexibleTitle = styled.h2`
  font-size: 50px;
  padding: 20px 0;
  text-align: center;
`
const FlexibleText = styled.p`
  line-height: 29px;
  font-size: 16px;
  font-weight: normal;
  padding: 20px 0;
  text-align: center;
`

const FlexibleSection = () => {
  const ref = useRef(null);
  const flexibleSloganRef = useRef(null);
  const sturdySloganRef = useRef(null);
  const flexibleImgRef = useRef(null);
  const sturdyImgRef = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      gsap.from(
        element,
        {
          background: 'rgba(0,0,0,0)',
          ease: "power2",
          scrollTrigger: {
            id: `section-11`,
            trigger: element,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      flexibleSloganRef.current.childNodes.forEach((elem, index) => {
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
      });
      sturdySloganRef.current.childNodes.forEach((elem, index) => {
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
      });
      gsap.from(
        flexibleImgRef.current.childNodes[0],
        {
          transform: 'skew(10deg, 10deg)',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: flexibleImgRef.current.childNodes[0],
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        sturdyImgRef.current.childNodes[0],
        {
          transform: 'skew(10deg, 10deg)',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: sturdyImgRef.current.childNodes[0],
            start: "bottom bottom",
            end: "top top",
            scrub: true,
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
    <Flexible id='power_house' ref={ref}>
      <Row>
        <Column xs={12} md={6} ref={flexibleSloganRef}>
          <FlexibleTitle>
            Flexible
          </FlexibleTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <FlexibleText>
            We know it’s hard to carry cycles around, each time you go on a hike or a trip. But we’ve got you covered. Svitch is a completely foldable bike which can even fit in the trunk of your car.
            <br />
            Flip it! Fold it! Take it!
          </FlexibleText>
        </Column>
        <Column xs={12} md={6} ref={flexibleImgRef}>
          <img src={FlexibleImg} alt="Flexible Bike 2" />
        </Column>
      </Row>
      <Row>
        <Column xs={12} md={6} ref={sturdyImgRef}>
          <img src={SturdyImg} alt="Sturdy Bike 1" />
        </Column>
        <Column xs={12} md={6} ref={sturdySloganRef}>
          <FlexibleTitle>
            Sturdy
          </FlexibleTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <FlexibleText>
            Made with premium quality Aluminum 6061, so that it can sustain the extremities which your adventure demands.
          </FlexibleText>
        </Column>
      </Row>
    </Flexible>
  );
};

export default FlexibleSection;
