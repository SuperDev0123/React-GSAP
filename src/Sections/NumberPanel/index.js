// This is HeroSection component, Main top section of website
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import styled from "styled-components";
import Column from '../../components/Column'
import Row from '../../components/Row'

const NumberPanel = styled.div`
  width: 100%;
  height: 200vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 10%;
`;

const CirclePane = styled.div`  
  text-align: center;
  width: 200px;
  height: 200px;
  margin: auto;
  border: 5px solid #9a7130;
  border-radius: 50%;
  padding: 40px 0;
  position: sticky;
  top: 50%;
`

const CircleTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
  padding: 0;
  color: #fff;
  font-weight: 400;
  margin-bottom: 12px;
`

const BatteryText = styled.h4`
  transition: 2s ease !important;
  font-size: 60px;
  margin: 0;
  padding: 0;
  font-weight: 300;
  color: #565656;
  &:after {
    content: 'Ah';
    font-size: 20px;
    font-style: italic;  
  }
`

const RangeText = styled.h4`
  transition: 2s ease !important;
  font-size: 60px;
  margin: 0;
  padding: 0;
  font-weight: 300;
  color: #565656;
  &:after {
    content: 'km';
    font-size: 20px;
    font-style: italic;  
  }
`

const MotorText = styled.h4`
  transition: 2s ease !important;
  font-size: 60px;
  margin: 0;
  padding: 0;
  font-weight: 300;
  color: #565656;
  &:after {
    content: 'W';
    font-size: 20px;
    font-style: italic;  
  }
`

const CircleSpan = styled.small`
  font-size: 20px;
  font-style: italic;
`

const NumberPanelSection = () => {
  const batteryRef = useRef(null);
  const motorRef = useRef(null);
  const rangeRef = useRef(null);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current
    // const mq = window.matchMedia("(max-width: 40em)");
    // console.log("mq", mq);
    // if (mq.matches) {
    if (true) {
      gsap.to(
        batteryRef.current.childNodes[0].childNodes[1],
        {
          textContent: 120,
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: batteryRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
          snap: { textContent: 0.1 },
          stagger: {
            each: 0.1,
            onUpdate: function () {
              this.targets()[0].innerHTML = (this.targets()[0].textContent * 1).toFixed(1) || 0;
            },
          }
        }
      );
      gsap.to(
        motorRef.current.childNodes[0].childNodes[1],
        {
          textContent: 120,
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: motorRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
          snap: { textContent: 1 },
          stagger: {
            each: 1,
            onUpdate: function () {
              this.targets()[0].innerHTML = (this.targets()[0].textContent * 1).toFixed(0) || 0;
            },
          }
        }
      );
      gsap.to(
        rangeRef.current.childNodes[0].childNodes[1],
        {
          textContent: 120,
          ease: "power2",
          scrollTrigger: {
            id: `section-31`,
            trigger: rangeRef.current,
            start: "bottom bottom",
            end: "top top",
            scrub: true,
          },
          snap: { textContent: 1 },
          stagger: {
            each: 1,
            onUpdate: function () {
              this.targets()[0].innerHTML = ((this.targets()[0].textContent * 1).toFixed(0) || 0) + '*';
            },
          }
        }
      );
      // gsap.from(
      //   rangeRef.current,
      //   {
      //     marginBottom: '50%',
      //     ease: "power2",
      //     scrollTrigger: {
      //       id: `section-31`,
      //       trigger: element,
      //       start: "top bottom",
      //       end: "top+=200 bottom",
      //       scrub: true,
      //     },
      //     snap: { textContent: 1 },
      //     stagger: {
      //       each: 1,
      //       onUpdate: function () {
      //         this.targets()[0].innerHTML = ((this.targets()[0].textContent * 1).toFixed(0) || 0) + '*';
      //       },
      //     }
      //   }
      // );
    } else {
      // gsap.to(element, {
      //   position: "fixed",
      //   top: "1rem",
      //   left: "3rem",
      //   right: "3rem",
      //   padding: "1.5rem 2rem",

      //   borderRadius: "50px",

      //   border: "3px solid var(--white)",

      //   duration: 1,
      //   ease: "power1.out",

      //   scrollTrigger: {
      //     trigger: element,
      //     start: "bottom+=300 top",
      //     end: "+=250",
      //     scrub: true,
      //   },
      // });
    }
  }, []);

  return (
    <NumberPanel id='number_panel' ref={ref}>
      <Row style={{position: 'sticky', top: '50vh', transform: 'translateY(-50%)'}}>
        <Column xs={12} sm={4} ref={batteryRef}>
          <CirclePane>
            <CircleTitle>
              Battery
            </CircleTitle>
            <BatteryText>
              0
            </BatteryText>
          </CirclePane>
        </Column>
        <Column xs={12} sm={4} ref={motorRef}>
          <CirclePane>
            <CircleTitle>
              Motor
            </CircleTitle>
            <MotorText>
              0
            </MotorText>
          </CirclePane>
        </Column>
        <Column xs={12} sm={4} ref={rangeRef}>
          <CirclePane>
            <CircleTitle>
              Range
            </CircleTitle>
            <RangeText>
              0
            </RangeText>
          </CirclePane>
        </Column>
      </Row>
    </NumberPanel>
  );
};

export default NumberPanelSection;
