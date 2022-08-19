import styled from "styled-components";
// import { Facebook, Twitter,  } from '@styled-icons/bootstrap'
import { Facebook, Twitter, Pinterest, Instagram, Youtube } from '@styled-icons/boxicons-logos'
import { HeartFill } from '@styled-icons/bootstrap'

import FooterBackground from "../../assets/bg-image-footer.png";

const FOOTER = styled.footer`
  padding-top: 50px;
  background-image: url(${FooterBackground});
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  padding: 0 15px;
  flex: 1;
`

const FooterItem = styled.div`
  min-height: 35px;
  margin-bottom: 5px;
`

const FooterYellowLink = styled.a`
  background: linear-gradient(to left,#8f6327, #b28132, #ffea75, #8f6327, #eed764, #eed764) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  font-size: 32px !important;
  font-family: 'AlteHaasGrotesk';
  font-weight: 900;
  text-transform: uppercase;
`

const FooterLink = styled.a`
  color: white;
  font-size: 20px !important;
  font-family: 'AlteHaasGrotesk';
  font-weight: 900;
  text-transform: uppercase;
`

const FooterText = styled.p`
  color: white;
  font-size: 20px !important;
  font-family: 'AlteHaasGrotesk';
  overflow-wrap: break-word;
  line-height: 35px !important;
`

const SocialIcon = styled.a`
  font-size: 22px !important;
  height: 40px !important;
  width: 40px !important;
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`

const IndianBy = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 30px;
  font-weight: 900;
  padding: 16px;
  padding-right: 5%;
`

const FooterMark = styled.div`
  justify-content: center;
  font-size: 16px;
  border-top: 2px solid #fcba3b !important;
  padding: 25px;
  display: flex;
  align-items: center;
`

const Mark = styled.span`
  font-size: 32px;
  margin-right: 10px;
`

const Footer = () => {
  return (
    <FOOTER>
      <FooterRow style={{padding: '0 70px'}}>
        <FooterSection>
          <FooterItem>
            <FooterYellowLink href='#'>Svitch XE</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterYellowLink href='#'>Svitch XE +</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterYellowLink href='#'>Svitch MXE</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href='#'>Privacy Policy</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href='#'>Support</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href='#'>After Sale Services</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href='#'>Weekend Wander Club</FooterLink>
          </FooterItem>
          <FooterItem>
            <FooterLink href='#'>FAQ</FooterLink>
          </FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterItem style={{ marginBottom: 32 }}>
            <FooterYellowLink>Headquarters</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterText>A-309, 410 Stellar, Opp. Arista Business Space, Sindhu Bhavan Road, Bodakdev,
              <br />Ahmedabad – 380054.</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterYellowLink href='#'>+91 63512 72002</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterYellowLink href='#'>+91 72270 42152</FooterYellowLink>
          </FooterItem>
        </FooterSection>
        <FooterSection>
          <FooterItem style={{ marginBottom: 32 }}>
            <FooterYellowLink>PRODUCTION HOUSE</FooterYellowLink>
          </FooterItem>
          <FooterItem>
            <FooterText>Plot No. 3, Sanand Viramgam Highway,</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterText>Nr. Maruti Weight Bridge,</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterText>Iyava – 382110.</FooterText>
          </FooterItem>
          <FooterItem>
            <FooterYellowLink href='#'>+91 72270 42151</FooterYellowLink>
          </FooterItem>
          <FooterItem style={{ marginTop: 35 }}>
            <FooterRow>
              <SocialIcon href='#'>
                <Facebook color="white" size={24} />
              </SocialIcon>
              <SocialIcon href='#'>
                <Twitter color="white" size={24} />
              </SocialIcon>
              <SocialIcon href='#'>
                <Pinterest color="white" size={24} />
              </SocialIcon>
              <SocialIcon href='#'>
                <Instagram color="white" size={24} />
              </SocialIcon>
              <SocialIcon href='#'>
                <Youtube color="white" size={24} />
              </SocialIcon>
            </FooterRow>
          </FooterItem>
        </FooterSection>
      </FooterRow>
      <IndianBy>
        Indian By
        <HeartFill size={30} color="red" style={{ marginLeft: '10px' }} />
      </IndianBy>
      <FooterMark>
        <Mark>©</Mark> 2022 Svitch Bike. All Rights Reserved.
      </FooterMark>
    </FOOTER>
  );
};

export default Footer;

//© 2021 by CodeBucks. Design by @CodeBucks.
