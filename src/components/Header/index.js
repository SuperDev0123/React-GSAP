import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/Svitch White.png";

const Headers = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  z-index: 500;
  &:after {
    content: '';
    background: linear-gradient( to right, #f0bc3f, rgba(0, 0, 0, 0) ) 100% 0;
    height: 2px;
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 100%;
    display: block;
  }
`;

const Logo = styled.a`
  height: auto;
  cursor: pointer;
  img{
    height: 90px;
    position: absolute;
    top: -10px;
    width: auto;
    transform: translateX(-50%)
  }
  
  @media (max-width: 640px) {
    img {
      left: 5%;
      transform: translateY(-50%);
      width: 30vw;
      height: auto;
      top: 50%;
    }
  }
`;

const RightBtns = styled.div`
  margin-right: 30px;
  display: flex;  
`

const CountryBtn = styled.button`
  margin-right: 20px;
  padding: 6px 10px;
  cursor: pointer;
  background: transparent;
  color: white;
  border: 1px solid #fff;
  font-size: 18px;
  min-width: 125px;
  transition: all 0.3s;  
`

const Cart = styled.div`
  cursor: pointer;
  svg {
    height: 28px;
    path {
      transition: all 0.3s;
      stroke: var(--yellow) !important;
    }
  }
  &:hover {
    svg path {
      stroke: grey !important;
    }
  }
`;

const HamburgerBtn = styled.button`
  background-color: transparent;
  margin-top: 0rem;
  transition: all 0.3s;
  cursor: pointer;
  svg {
    width: 80px;
    transform: none;
    margin-top: -4px;
    path {
      stroke: var(--yellow) !important;
      stroke-width: 30;
      stroke-linecap: round;
      stroke: #fff;
      fill: none;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
  }
  .top_bar, .bottom_bar {
    stroke-dasharray: 240px 910px;
  }
  .open .top_bar, .open .bottom_bar {
    stroke-dashoffset: -650px;
  }
  .open .middle_bar {
    stroke-dasharray: 0px 220px;
    stroke-dashoffset: -120px;
  }
  .middle_bar {
    stroke-dasharray: 240px 240px;
  }


  @media (max-width: 640px) {
    display: none;
  }
`;
;

const CountryList = ['India', 'USA', 'Europe', 'Australia', 'Uae', 'New Zealand']

const Header = () => {
  const [click, setClick] = useState(false);
  const [country, setCountry] = useState(0);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  // useEffect(() => {
  //   const element = ref.current;

  //   const mq = window.matchMedia("(max-width: 40em)");
  //   // console.log("mq", mq);
  //   if (mq.matches) {
  //     gsap.to(element, {
  //       position: "fixed",
  //       top: "0",
  //       left: "0",
  //       right: "0",
  //       padding: "1rem 2.5rem",

  //       borderRadius: "0 0 50px 50px",

  //       border: "2px solid var(--white)",

  //       duration: 1,
  //       ease: "power1.out",

  //       scrollTrigger: {
  //         trigger: element,
  //         start: "bottom+=200 top",
  //         end: "+=100",
  //         scrub: true,
  //       },
  //     });
  //   } else {
  //     gsap.to(element, {
  //       position: "fixed",
  //       top: "1rem",
  //       left: "3rem",
  //       right: "3rem",
  //       padding: "1.5rem 2rem",

  //       borderRadius: "50px",

  //       border: "3px solid var(--white)",

  //       duration: 1,
  //       ease: "power1.out",

  //       scrollTrigger: {
  //         trigger: element,
  //         start: "bottom+=300 top",
  //         end: "+=250",
  //         scrub: true,
  //       },
  //     });
  //   }
  // }, []);

  return (
    <Headers ref={ref}>
      <HamburgerBtn onClick={() => setClick(!click)}>
        <svg id="menu_icon" viewBox="0 0 800 600" className={click ? "open" : ""}>
          <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top_bar"></path>
          <path d="M300,320 L540,320" className="middle_bar"></path>
          <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom_bar" transform="translate(480, 320) scale(1, -1) translate(-480, -318)"></path>
        </svg>
      </HamburgerBtn>

      <Logo href="/">
        <img src={logo} alt="CodeBucks" />
      </Logo>

      <RightBtns>
        <CountryBtn>
          {CountryList[country]}
        </CountryBtn>
        <Cart>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 
  8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 
  20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-
              linecap="round" stroke-linejoin="round" />
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 
  9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 
  21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </Cart>
      </RightBtns>
    </Headers>
  );
};

export default Header;
