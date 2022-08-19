// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import FlexibleImg from "../../assets/Flexible-bike-2.png";
import SturdyImg from "../../assets/Sturd1y-600x477.png";
import BottomLine from "../../assets/border-bottom-line.png";
import Column from '../../components/Column'
import Row from '../../components/Row'

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

const FlexibleBorder = styled.div`
  position: absolute;
  width: 0px;
  height: 2px;
  top: 0;
  right: 0;
  border-top: 2px solid #f0bc3f;
  border-left: 2px solid #f0bc3f;
  opacity: 0;
`

const SturdyBorder = styled.div`
  position: absolute;
  width: 0px;
  height: 2px;
  top: 0;
  left: 0;
  border-top: 2px solid #f0bc3f;
  border-right: 2px solid #f0bc3f;
  opacity: 0;
`

const BottomBorder = styled.div`
  position: absolute;
  width: 0px;
  height: 2px;
  bottom: 0;
  right: 0;
  border-top: 2px solid #f0bc3f;
  border-left: 2px solid #f0bc3f;
  opacity: 0;
`

const FlexibleMask = styled.div`
  position: absolute;
  width: 0%;
  height: calc(100% + 40px);
  background: black;
  top: -20px;
  right: -20px;
  filter: blur(12px);
`

const SturdyMask = styled.div`
  position: absolute;
  width: 0%;
  height: calc(100% + 40px);
  background: black;
  top: -20px;
  left: -20px;
  filter: blur(12px);
`

const FlexibleSection = () => {
  const ref = useRef(null);
  const flexibleRef = useRef(null);
  const sturdyRef = useRef(null);

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
      flexibleRef.current.childNodes[0].childNodes.forEach((elem, index) => {
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
      sturdyRef.current.childNodes[1].childNodes.forEach((elem, index) => {
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
        flexibleRef.current.childNodes[1],
        {
          transform: 'skew(10deg, 10deg)',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: flexibleRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        sturdyRef.current.childNodes[0].childNodes[0],
        {
          transform: 'skew(10deg, 10deg)',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: sturdyRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.to(
        flexibleRef.current.childNodes[2],
        {
          width: '100%',
          opacity: 1,
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: flexibleRef.current,
            start: "center bottom",
            end: "center+=200 bottom",
            scrub: true,
          },
        }
      );
      gsap.to(
        flexibleRef.current.childNodes[2],
        {
          height: '100%',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: flexibleRef.current,
            start: "center+=200 bottom",
            end: "bottom+=200 bottom",
            scrub: true,
          },
        }
      );
      gsap.to(
        sturdyRef.current.childNodes[2],
        {
          width: '100%',
          opacity: 1,
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: sturdyRef.current,
            start: "center bottom",
            end: "center+=200 bottom",
            scrub: true,
          },
        }
      );
      gsap.to(
        sturdyRef.current.childNodes[2],
        {
          height: '100%',
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: sturdyRef.current,
            start: "center+=200 bottom",
            end: "bottom+=200 bottom",
            scrub: true,
          },
        }
      );
      gsap.to(
        sturdyRef.current.childNodes[3],
        {
          width: '100%',
          opacity: 1,
          ease: "slow",
          scrollTrigger: {
            id: `section-21`,
            trigger: sturdyRef.current,
            start: "bottom+=200 bottom",
            end: "bottom+=400 bottom",
            scrub: true,
          },
        }
      );
      gsap.from(
        flexibleRef.current.childNodes[1].childNodes[1],
        {
          width: 'calc(100% + 40px)',
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: flexibleRef.current,
            start: "center bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        flexibleRef.current.childNodes[1],
        {
          opacity: 0,
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: flexibleRef.current,
            start: "center bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        sturdyRef.current.childNodes[0].childNodes[1],
        {
          width: 'calc(100% + 40px)',
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: sturdyRef.current,
            start: "center bottom",
            end: "top top",
            scrub: true,
          },
        }
      );
      gsap.from(
        sturdyRef.current.childNodes[0],
        {
          opacity: 0,
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: sturdyRef.current,
            start: "center bottom",
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
      <Row style={{ position: 'relative', padding: 20 }} ref={flexibleRef}>
        <Column xs={12} md={6}>
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
        <Column xs={12} md={6} style={{position: 'relative'}}>
          <img src={FlexibleImg} alt="Flexible Bike 2" />
          <FlexibleMask />
        </Column>
        <FlexibleBorder />
      </Row>
      <Row style={{ position: 'relative', padding: 20 }} ref={sturdyRef}>
        <Column xs={12} md={6} style={{position: 'relative'}}>
          <img src={SturdyImg} alt="Sturdy Bike 1" />
          <SturdyMask />
        </Column>
        <Column xs={12} md={6}>
          <FlexibleTitle>
            Sturdy
          </FlexibleTitle>
          <img src={BottomLine} style={{ width: '80%' }} alt="Bottom Line" />
          <FlexibleText>
            Made with premium quality Aluminum 6061, so that it can sustain the extremities which your adventure demands.
          </FlexibleText>
        </Column>
        <SturdyBorder />
        <BottomBorder />
      </Row>
    </Flexible>
  );
};

export default FlexibleSection;
