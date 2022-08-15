import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import BoxImg from "../../assets/6box.jpg";
import BottomLine from "../../assets/border-bottom-line.png";
import ColorIcon from "../../assets/color-icon.png";
import BrakesIcon from "../../assets/breakers-icon.png";
import MotorIcon from "../../assets/motor-icon.png";
import DisplayIcon from "../../assets/display-icon.png";
import GearsIcon from "../../assets/gears-icon.png";
import RangeIcon from "../../assets/renge-icon.png";
import BatteryIcon from "../../assets/battery-icon.png";
import SuspentionIcon from "../../assets/suspention-icon.png";
import SpeedIcon from "../../assets/speed-icon.png";
import FrameIcon from "../../assets/frame-icon.png";
import LedIcon from "../../assets/led-icon.png";
import TyreIcon from "../../assets/tyre-icon.png";
import JoinUsIcon from "../../assets/fast-support-1.png";
import FastSupportIcon from "../../assets/free-shipping-1.png";
import RideIcon from "../../assets/fast-delivery-1.png";
import ServicesIcon from "../../assets/return-policy-1.png";


import ABCIcon from "../../assets/logo-abc.png";
import CBSIcon from "../../assets/logo-cbs.png";
import FOXIcon from "../../assets/logo-fox-1.png";
import NBCIcon from "../../assets/logo-nbc.png";
import CWIcon from "../../assets/logo-cw.png";
import AutocarIcon from "../../assets/autocarpro.png";
import DriverIcon from "../../assets/drivespark.png";
import AdgullyIcon from "../../assets/adgully.png";
import DailyHuntIcon from "../../assets/dailyhunt.png";
import SindiaIcon from "../../assets/thehansindia.png";
import FitIcon from "../../assets/fitindia.png";

import WhatsAppIcon from "../../assets/whatsapp-image.jpg";

import Column from '../../components/Column'
import Row from '../../components/Row'

const SubfooterSection = styled.section`
  width: 100%;
  padding: 35px 50px;
`;

const BikeBox = styled.img`
  padding: 5%;
  margin-top: 35px;
  object-fit: cover;
`

const SubFooterSection = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 640px) {
    margin: 30px 0;
  }
`

const SubFooterSectionTitle = styled.h2`
  font-size: 40px;
  padding: 20px 0;
  text-align: center;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: 15px;
    width: 325px;
    left: 50%;
    transform: translateX(-45%) rotateY(180deg);
    background: url(${BottomLine});
    background-size: cover;
    background-repeat: no-repeat;
  }
`

const SpecIcon = styled.img`
  width: 52px;
  height: 44px;
  margin-right: 8px;
`

const SpecContainer = styled.div`
  color: white;
  text-transform: uppercase;
  margin-top: 10px;
  height: 100px;
  width: 160px;
`;

const SpecTitle = styled.h6`
  font-size: 15px;
  font-weight: 800;
  text-transform: uppercase;
`

const SpecText = styled.p`
  line-height: 1;
  font-size: 12px;
  overflow-wrap: break-word;
  margin-bottom: 8px !important;
  color: #808081;
  text-transform: uppercase;
`

const HelperSection = styled.div`
  padding: 100px 50px;
  background-color: #18181c !important;
  display: flex;
  overflow-x: auto;
  
  &::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
    background-color: #555;
  }

  &::-webkit-scrollbar
  {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb
  {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #333;
  }
`

const HelperContainer = styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover a {
    opacity: 1;
  }
`

const HelperIcon = styled.img`
  width: 200px;
  height: 148px;
`

const HelperText = styled.h6`
  font-size: 18px;
  text-align: center;
  padding: 32px 0;
  font-weight: 500;
  text-transform: uppercase;
`

const HelperHover = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(154, 113, 48, 0.8117647058823529);
  top: 0;
  left: 0;
  border-radius: 5px;
  transition: all 0.8s ease-in-out 0s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 21px;
  font-size: 14px;
  padding: 15px;
  cursor: pointer;
  user-select: none;
  opacity: 0;
`

const CompanyRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const CompanyContainer = styled.div`
  flex: 1;
  padding: 10px;
  background: #3d3c42;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CompanyLogo = styled.img`
  height: 50px;
  width: auto;
`

const Introduction = styled.div`
  padding: 30px;
  max-width: 1200px;
  margin: auto;
  
  @media (max-width: 640px) {
    padding: 30px 0;
  }
`

const IntroductionText = styled.p`
  font-size: 12px;
  line-height: 24px;
  text-align: left;
  vertical-align: baseline;
  overflow-wrap: break-word;
  margin-bottom: 8px !important;
`

const IntroductionLink = styled.a`
  color: #b28b2e;
  text-decoration: none !important;
`
const SubFooterImg = styled.img`
  max-width: 900px;
  margin: auto;
`

const Subfooter = () => {

  return (
    <SubfooterSection id="subfooter">
      <BikeBox src={BoxImg} alt="Six Box" />
      <SubFooterSection>
        <SubFooterSectionTitle>
          TECH SPECS
        </SubFooterSectionTitle>
        <Row>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={ColorIcon} alt="Color Icon" />
            <SpecContainer>
              <SpecTitle>COLOR</SpecTitle>
              <SpecText>5</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={BrakesIcon} alt="BRAKES Icon" />
            <SpecContainer>
              <SpecTitle>BRAKES</SpecTitle>
              <SpecText>MECHANICAL DISK</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={MotorIcon} alt="Motor Icon" />
            <SpecContainer>
              <SpecTitle>Motor</SpecTitle>
              <SpecText>250W</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={DisplayIcon} alt="DISPLAY Icon" />
            <SpecContainer>
              <SpecTitle>DISPLAY</SpecTitle>
              <SpecText>COLORFUL LCD, BACKLIT LED</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={GearsIcon} alt="GEARS Icon" />
            <SpecContainer>
              <SpecTitle>
                GEARS</SpecTitle>
              <SpecText>7 SPEED, 8 SPEED</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={RangeIcon} alt="RANGE Icon" />
            <SpecContainer>
              <SpecTitle>RANGE</SpecTitle>
              <SpecText>60KM*, 80KM*, 120KM*</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={BatteryIcon} alt="BATTERY Icon" />
            <SpecContainer>
              <SpecTitle>BATTERY</SpecTitle>
              <SpecText>48V, 11.6AH/ 14.5AH/ 16AH</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={SuspentionIcon} alt="SUSPENSION Icon" />
            <SpecContainer>
              <SpecTitle>SUSPENSION</SpecTitle>
              <SpecText>DUAL</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={SpeedIcon} alt="SPEED Icon" />
            <SpecContainer>
              <SpecTitle>SPEED</SpecTitle>
              <SpecText>25 KM/H</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={FrameIcon} alt="FRAME Icon" />
            <SpecContainer>
              <SpecTitle>FRAME</SpecTitle>
              <SpecText>AL 6061</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={LedIcon} alt="LED Icon" />
            <SpecContainer>
              <SpecTitle>LED</SpecTitle>
              <SpecText>FRONT LIGHT</SpecText>
            </SpecContainer>
          </Column>
          <Column sm={6} md={4} xl={3} style={{ display: 'flex', justifyContent: 'center' }}>
            <SpecIcon src={TyreIcon} alt="TYRE Icon" />
            <SpecContainer>
              <SpecTitle>TYRE</SpecTitle>
              <SpecText>20 X 4”</SpecText>
            </SpecContainer>
          </Column>
        </Row>
      </SubFooterSection>
      <HelperSection>
        <Column>
          <HelperContainer>
            <HelperIcon src={JoinUsIcon} alt='Join Us' />
            <HelperText>JOIN US</HelperText>
            <HelperHover>
              Having any trouble with your Svitch postbuying it? Give us a call or drop a message on our mail or any of our social media platforms. We will get back to you within minutes.
            </HelperHover>
          </HelperContainer>
        </Column>
        <Column>
          <HelperContainer>
            <HelperIcon src={FastSupportIcon} alt='Fast Support' />
            <HelperText>Fast Support</HelperText>
            <HelperHover>
              Just click the photo of yours with your perfect Svitch and tag us. We will tag you back when we read your reviews on Facebook and Instagram.
            </HelperHover>
          </HelperContainer>
        </Column>
        <Column>
          <HelperContainer>
            <HelperIcon src={RideIcon} alt='Ready to Ride' />
            <HelperText>READY TO RIDE</HelperText>
            <HelperHover>
              Take the beast out of the box. A few screws here, a few fixes there and voila! You are good to go! Have the thrill.
            </HelperHover>
          </HelperContainer>
        </Column>
        <Column>
          <HelperContainer>
            <HelperIcon src={ServicesIcon} alt='After-Sale Services' />
            <HelperText>After-Sale Services</HelperText>
            <HelperHover>
              Take it. And make it yours. Don't worry about wear and tear, we are here to look for all the after-sale of Svitch E-bike.
            </HelperHover>
          </HelperContainer>
        </Column>
      </HelperSection>
      <SubFooterSection>
        <SubFooterSectionTitle>
          AS SEEN ON
        </SubFooterSectionTitle>
        <CompanyRow>
          <CompanyContainer>
            <CompanyLogo src={ABCIcon} alt="ABC Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={CBSIcon} alt="CBS Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={FOXIcon} alt="FOX Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={NBCIcon} alt="NBC Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={CWIcon} alt="CW Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={AutocarIcon} alt="Autocar Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={DriverIcon} alt="Driver Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={AdgullyIcon} alt="Adgully Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={DailyHuntIcon} alt="Daily Hunt Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={SindiaIcon} alt="Sindra Logo" />
          </CompanyContainer>
          <CompanyContainer>
            <CompanyLogo src={FitIcon} alt="Fit Logo" />
          </CompanyContainer>
        </CompanyRow>
        <Introduction>
          <IntroductionText>
            SVITCH Electric Bikes has been a forerunner in the e-locomotive marketplace with our innovative foldable electric bicycles since 2019. SVITCH bikes currently stand with 4 different models of electric bicycles with 5 unique colour variants. Our SVITCH electric bike version <IntroductionLink href='#'>XE+</IntroductionLink><br />
            is a Ride to thrill, SVITCH foldable electric bike version XE is like a ride to chase your dream, SVITCH electric bike version <IntroductionLink href='#'>MXE</IntroductionLink> might be small size but is with bold perception.
          </IntroductionText>
          <IntroductionText>
            Our first non-electric bicycle version <IntroductionLink href='#'>SVITCH NXE</IntroductionLink> is a ride to remember that comes in 2 Limited Edition colour variants. A special feature like the foldable bike, adjustable seat, <IntroductionLink href='#'>gear shifter</IntroductionLink> for throttle, better suspension and most importantly swappable <IntroductionLink href='#'>battery</IntroductionLink> helps SVITCH bikes to stand out. n the electric vehicle sector, we’re standing out with incredibly colorful and gender-friendly colors.
          </IntroductionText>
          <IntroductionText>
            Our success is written and extended across the Pan-India region, with over 100+ dealers. Our largest cities for dealers and distributors are Bangalore, Mumbai, Ahmedabad, Pune, Hyderabad, and Chennai. With the help of our headquarters, our <IntroductionLink href='#'>electric bike dealer</IntroductionLink> not only assists us in engaging with the audience but also hosts a variety of bike workshops and society events. The goal was to raise public knowledge of one of India’s top electric bikes.
          </IntroductionText>
          <IntroductionText>
            SVITCH foldable electric bikes have a fair electric bike process in an era of growing gasoline prices, and it is merely an investment in a brighter future.SVITCH foldable electric and non-electric bikes are all set to, ride it, fold it, move with it. SVITCH is the ideal solution for your ‘last-mile mobility’ issues and if you’re ready to make a lifestyle change. Our best-selling electric bike, the XE, can be spotted all over the country and around every corner. The 20 x 4” fat tyres on <IntroductionLink href='#'>SVITCH XE</IntroductionLink> practically make it an all-terrain bike. The Aluminum frame weighs just 2.5 kg. Also, with our most recent successful launch on a non-electric bike, NXE is generating much-needed buzz across the internet.
          </IntroductionText>
          <IntroductionText>
            A special feature of this non-electric bicycle is it consists of a 7 gear system, which helps to maintain the speed. And it is not just about the features of our SVITCH electric bike that stands out its the process and the trust we have built through.
          </IntroductionText>
          <IntroductionText>
            The <IntroductionLink href='#'>CSR 762</IntroductionLink> will be the first electric motorcycle from Svitch, which has made a name for itself selling electric bicycles. The Gujarat-based EV manufacturer did hold a soft launch for the CSR 762 in November 2021, but the e-bike has yet to hit the road.
          </IntroductionText>
        </Introduction>
        <SubFooterImg src={WhatsAppIcon} alt='Whats app' />
      </SubFooterSection>
    </SubfooterSection>
  );
};

export default Subfooter;
