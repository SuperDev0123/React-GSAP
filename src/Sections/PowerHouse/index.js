// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import BikeImg from "../../assets/Accera-bike-2.png";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

const PowerHouse = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #18171c;
  padding: 50px 10%;
`;

const PowerHouseTitle = styled.h2`
  font-size: 50px;
  padding: 20px 0;
  text-align: center;
`
const PowerHouseText = styled.p`
  line-height: 29px;
  font-size: 16px;
  font-weight: normal;
  padding: 20px 0;
  text-align: center;
`

const Mask = styled.div`
  position: absolute;
  width: 0%;
  height: calc(100% + 40px);
  background: #18171c;
  top: -20px;
  right: -20px;
  filter: blur(12px);
`

const PowerHouseSection = () => {
  const ref = useRef(null);
  const sloganRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const element = ref.current;

    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      // gsap.from(
      //   element,
      //   {
      //     background: 'rgba(0,0,0,0)',
      //     ease: "power2",
      //     scrollTrigger: {
      //       id: `section-11`,
      //       trigger: element,
      //       start: "top bottom",
      //       end: "top top",
      //       scrub: true,
      //     },
      //   }
      // );
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
            },
          }
        );
      });
      gsap.from(
        imgRef.current,
        {
          transform: 'skew(10deg, 10deg)',
          opacity: 0,
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: imgRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        imgRef.current.childNodes[1],
        {
          width: 'calc(100% + 40px)',
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: imgRef.current,
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
    <PowerHouse id='power_house' ref={ref}>
      <Row>
        <Column xs={12} md={6} ref={sloganRef}>
          <PowerHouseTitle>
            The Power House
          </PowerHouseTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <PowerHouseText>
            Bikes have a large engine in the front, and you have a gearbox, which is cumbersome. Electric bikes do not have these problems, the motor is much smaller, and the battery is much more powerful. This will allow you to play with different shapes and dimensions of the roads. Svitch bike comes with various batter options. <br />
            1. MXE- 36 Volt, 8.7AH & 36 Volt, 9.6 AH <br />
            2. XE & XE+ – 48 Volt, 11.6 AH & 48 Volt, 14.5 Ah. <br />
          </PowerHouseText>
        </Column>
        <Column xs={12} md={6} ref={imgRef} style={{ position: 'relative' }}>
          <img src={BikeImg} alt="Bike 2" />
          <Mask />
        </Column>
      </Row>
    </PowerHouse>
  );
};

export default PowerHouseSection;
