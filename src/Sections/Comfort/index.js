// This is HeroSection component, Main top section of website
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styled, { keyframes } from "styled-components";
import { HeartFill } from '@styled-icons/bootstrap'
import PrimeMoverImg from "../../assets/The-Prime-Mover.jpg";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Comfort = styled.div`
  width: 60vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FixedBackground = styled.div`
  position: fixed;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;  
  opacity: 0;
  pointer-events: none;
  border-left: 5px solid #3c2504;
  border-right: 5px solid #ffc741;
  border-radius: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-position: 0 0, 0 100%;
  background-repeat: no-repeat;
  -webkit-background-size: 100% 20px;
  -moz-background-size: 100% 20px;
  background-size: 100% 5px;
  background-image: -webkit-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%), -webkit-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%);
  background-image: -moz-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%), -moz-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%);
  background-image: -o-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%), -o-linear-gradient(left, #3EC8AC 0%, #4E90A4 100%);
  background-image: linear-gradient(to right, #3c2504 0%, #ffc741 100%), linear-gradient(to right, #3c2504 0%, #ffc741 49%);
`

const ComfortTitle = styled.h2`
  font-size: 93px;
  padding: 20px 0;
  text-align: center;
`
const ComfortText = styled.p`
  text-align: center;
  line-height: 40px;
  font-size: 25px;
  font-weight: normal;
  padding: 20px 0;
`

const ComfortSection = () => {
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
          ease: "slow",
          scrollTrigger: {
            id: `section-11`,
            trigger: element,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            snap: true,
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
            snap: true,
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
              snap: true,
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
    <Comfort id='comfort' ref={ref}>
      <FixedBackground />
      <ComfortTitle>
        ULTIMATE COMFORT
      </ComfortTitle>
      <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
      <ComfortText>
        The Svitch Bike comes with a front <br/>
        suspension which makes <br/>
        the ride smooth and comfortable. <br/>
        It’s the Best ebike in Ahmedabad, India
      </ComfortText>
    </Comfort>
  );
};

export default ComfortSection;
