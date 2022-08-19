// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import Column from '../../components/Column'
import Row from '../../components/Row'
import SpeedChartImg from "../../assets/faster-then-faster.jpg";
import BottomLine from "../../assets/border-bottom-line.png";

const SpeedChart = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: #18171c;
  overflow: hidden;
`;

const SpeedChartTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  padding: 30px 0;
`
const SpeedText = styled.p`
  line-height: 32px;
  font-size: 16px;
  font-weight: normal;
  padding: 20px 0;
`

const SpeedChartSection = () => {
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
      element.childNodes.forEach((elem, index) => {
        gsap.from(
          elem,
          {
            marginLeft: index % 2 === 1 ? '100%' : 0,
            marginRight: index % 2 === 0 ? '100%' : 0,
            opacity: 0,
            scrollTrigger: {
              id: `section-${index}`,
              trigger: elem,
              start: "top bottom",
              end: "center center",
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
    <SpeedChart id='speed_chart' ref={ref}>
      <Row style={{ maxWidth: '1140px' }}>
        <Column xs={12} md={4}>
          <SpeedChartTitle>
            Fastest of all, hands down the best ebike
          </SpeedChartTitle>
          <SpeedText>
            The 250 W motor gives you the speed you need, the electric cycle tops a speed of 25 km/h* once you start pedaling. The uncapped speed of the bike goes way faster than that reaching up to 60km/h but as per the Government Of India mandate, we lock the speed at 25km/h*.
          </SpeedText>
          <img src={BottomLine} alt="Bottom Line 2" />
        </Column>
        <Column xs={12} md={8}>
          <img src={SpeedChartImg} alt="25 km" />
        </Column>
      </Row>
    </SpeedChart>
  );
};

export default SpeedChartSection;
