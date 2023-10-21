/* eslint-disable react-refresh/only-export-components */
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import { MdFlashOn, MdMarkEmailRead, MdOutlineWhatsapp } from "react-icons/md";
import Typewriter from "react-ts-typewriter";

const currentYear = new Date().getFullYear();

export const HeroData = [
  {
    id: 1,
    name: "Samuel, Doghor",
    stack: "Software Engineer",
    code1: (
      <Typewriter
        loop={true}
        speed={100}
        delay={2000}
        text=' "const App = () => {return (<div >App </div>)} export default App" '
      />
    ),
    code2: ' "const App = () => {return (<div > ',
    code3: (
      <Typewriter
        loop={true}
        speed={100}
        delay={2000}
        text=' App </div>)} export default App" '
      />
    ),
    moved1: "This has been moved permanently to",
    moved2: "samdoghor.com click to visit",
    moved3: "This page is set for deletion by 1st Janaury, 2024",
    movedlinked: "https://www.samdoghor.com",
  },
];

export const ContactData = [
  {
    in: 1,
    heading: "Contact",
    title: "Quick Reach / Socials",
    ticon: <MdFlashOn />,
    country: "/img/nigeria_flag.png",
    logo: "/img/manchester-united-logo.png",
    image: "/img/marcusrashford.png",
  },
];

export const contactSocialData = [
  {
    id: 1,
    label: "Email",
    icon: <MdMarkEmailRead />,
    link: "mailto:talkto@samdoghor.com",
  },
  {
    id: 2,
    label: "WhatsApp",
    icon: <MdOutlineWhatsapp />,
    link: "https://wa.me/qr/CGHZ23GBYBKLC1",
  },
  {
    id: 3,
    label: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/samdoghor",
  },
  {
    id: 4,
    label: "Github",
    icon: <FaGithub />,
    link: "https://www.github.com/samdoghor",
  },
  {
    id: 5,
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/samdoghor",
  },
  {
    id: 6,
    label: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com/samdoghor",
  },
];

export const FooterData = [
  {
    in: 1,
    copyright: "All right reserved © Samuel Doghor ",
    year: currentYear,
  },
];
