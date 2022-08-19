import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CapBn from "../../assets/cap-bn.jpg";
import CapText from "../../assets/cap-1.png";

const ServiceSection = styled.section`
  width: 100vw;
  /* background-color: #0a0b10; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 50vh;
`;

const Captivating = styled.div`
  width: 100%;
  // height: 100vh;
  position: relative;
`;

const CaptivatingContainer = styled.div`
  position: relative;
  top: 0;
  left: 90%;
  transform: translateX(-100%);
  width: 60vw;
`

const CaptivatingText = styled.div`
  position: absolute;
  width: 80%;
  bottom: -25%;
  left: -25%;
`

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  const capRef = useRef([]);
  capRef.current = [];

  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top",

        end: "bottom bottom",

        pinReparent: true,
      },
    });
    t1.fromTo(
      document.getElementById("line"),

      {
        height: "15rem",
      },
      {
        height: "3rem",
        duration: 2,
        scrollTrigger: {
          trigger: document.getElementById("line"),
          start: "top top+=200",
          end: "bottom top+=220",
        },
      }
    );

    if (true) {
      t1.from(
        capRef.current,
        {
          top: 300,
          opacity: 0,
          duration: 2,

          ease: "power2.inOut",
          scrollTrigger: {
            id: `section-1`,
            trigger: capRef.current,
            start: "top center+=200",
            end: "top+=600 center-=600",
            //
            // toggleActions: "play none none reverse",
          },
        }
      )
        .from(capRef.current.childNodes[0].childNodes[1], {
          bottom: '-300%',

          ease: "power2.easeOut",

          scrollTrigger: {
            id: `section-2`,
            trigger: capRef.current,
            start: "top center+=200",
            end: "center center",

            // toggleActions: "play none none reverse",
          },
        })
      // .to(
      //   capRef.current,

      //   {
      //     opacity: 0,

      //     ease: "power2",
      //     scrollTrigger: {
      //       id: `section-3`,
      //       trigger: capRef.current,
      //       start: "top top+=300",
      //       end: "bottom bottom",
      //       scrub: true,
      //     },
      //   }
      // );
    }
  }, []);

  return (
    <ServiceSection id="services">
      <Captivating ref={capRef}>
        <CaptivatingContainer>
          <img src={CapBn} alt="Cap Bn" />
          <CaptivatingText>
            <img src={CapText} alt="Cap Bn" />
          </CaptivatingText>
        </CaptivatingContainer>
      </Captivating>
    </ServiceSection>
  );
};

export default Services;
