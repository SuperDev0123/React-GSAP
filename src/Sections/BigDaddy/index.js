// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'
import BigDaddyImg from "../../assets/BigDaddytire.jpg";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

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

const BigDaddy = styled.div`
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

const BigDaddyTitle = styled.h2`
  font-size: 50px;
  padding: 20px 0;
  text-align: center;
`
const BigDaddyText = styled.p`
  line-height: 29px;
  font-size: 18px;
  font-weight: normal;
  padding: 20px 0;
  text-align: center;
`

const BigDaddySection = () => {
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
    <BigDaddy id='big_daddy' ref={ref}>
      <FixedBackground src={BigDaddyImg} alt="Big Daddy" />
      <Row>
        <Column xs={12} md={12}>
          <BigDaddyTitle>
            Big Daddy
          </BigDaddyTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <BigDaddyText>
            Svitch comes with strong and sturdy tyres, these skid-proof fat tyres make it possible to ride the bike in all types of road conditions; making the anti-puncture fat tyres to have better control while riding on different roads and terrain.

            Svitch uses premium quality Aluminum 6061 hence sustaining anything that your adventure brings. It’s also a foldable ebike , making it easy to carry along with being easy to ride. The bike comes in various different color themes providing you with multiple options, whatever delights your eyes.
          </BigDaddyText>
        </Column>
      </Row>
    </BigDaddy>
  );
};

export default BigDaddySection;
