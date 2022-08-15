import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import CapBn from "../../assets/cap-bn.jpg";
import CapText from "../../assets/cap-1.png";
import Tube from "../../assets/3dtube.png";
import Cone from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

// const TextBlock = lazy(() => import("../../components/TextBlock"));
// const SvgBlock = lazy(() => import("../../components/SvgBlock"));

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
    const mq = window.matchMedia("(max-width: 48em)");
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
      {/* <Background ref={ref}>
        <Title className="title">What We Do</Title>
        <Line id="line" />
        <Triangle id="triangle" />
      </Background> */}

      <Captivating ref={capRef}>
        <CaptivatingContainer>
          <img src={CapBn} alt="Cap Bn" />
          <CaptivatingText>
            <img src={CapText} alt="Cap Bn" />
          </CaptivatingText>
        </CaptivatingContainer>
      </Captivating>

      {/* <Content ref={addToRefs}>
        <TextBlock
          topic="Design"
          title={<h1>We build award winning Designs</h1>}
          subText={
            <h5>
              We help clients to build great design to attract more customers
            </h5>
          }
        />
        <OBJ>
          <img src={Tube} alt="Tube Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Develop"
          title={<h1>We Develope high quality Web & App</h1>}
          subText={
            <h5>
              We build appropriate solution to develope your website & app with
              best tools available
            </h5>
          }
        />
        <OBJ>
          <img src={Cone} alt="Cone Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content>
        <TextBlock
          topic="Support"
          title={<h1>We provide support for your digital presence</h1>}
          subText={
            <h5>
              Once your system is online, we will stay on hand to help you use
              it and provide technical support and maintenance <br /> your
              business
            </h5>
          }
        />
        <OBJ>
          <img src={Capsule} alt="Capsule Object" width="400" height="400" />
        </OBJ>
        <SvgBlock svg="Support.svg" />
      </Content> */}
    </ServiceSection>
  );
};

export default Services;
