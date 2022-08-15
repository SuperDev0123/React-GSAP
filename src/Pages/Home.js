//This is home page, It will contains all the sections require in this page.

//Import all the require sections here
import HeroSection from "../Sections/Hero/index";
import About from "../Sections/About/index";
import Services from "../Sections/Services/index";
import Captivating from "../Sections/Captivating/index";
import Speed from "../Sections/Speed/index";
import SpeedChart from "../Sections/SpeedChart/index";
import PrimeMover from "../Sections/PrimeMover/index";
import Comfort from "../Sections/Comfort/index";
import PowerHouse from "../Sections/PowerHouse/index";
import DualSuspension from "../Sections/DualSuspension/index";
import Flexible from "../Sections/Flexible/index";
import Sturdy from "../Sections/Sturdy/index";
import SubFooter from "../Sections/SubFooter/index";
import BigDaddy from "../Sections/BigDaddy/index";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <Captivating />
      <div style={{ height: '100vh' }} />
      <Speed />
      <div style={{ height: '60vh' }} />
      <SpeedChart />
      <div style={{ height: '100vh' }} />
      <PrimeMover />
      <div style={{ height: '100vh' }} />
      <Comfort />
      <div style={{ height: '100vh' }} />
      <PowerHouse />
      <div style={{ height: '60vh' }} />
      <DualSuspension />
      <div style={{ height: '100vh' }} />
      <Flexible />
      <div style={{ height: '100vh' }} />
      <BigDaddy />
      <div style={{ height: '100vh' }} />
      <SubFooter />
    </Container>
  );
};

export default Home;
