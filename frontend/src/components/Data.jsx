import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaLink,
} from "react-icons/fa";
import Typewriter from "react-ts-typewriter";

// Header

export const headerLogoData = [
  {
    id: 1,
    logo: "<SD/>",
    name: "source code",
    link: "https://github.com/samdoghor/samdoghor-portfolio",
    link2: "#header",
  },
];

export const headerNavData = [
  {
    id: 1,
    nav: "[Services]",
    link: "#services",
  },
  {
    id: 2,
    nav: "[About]",
    link: "#about",
  },
  {
    id: 3,
    nav: "[Projects]",
    link: "#projects",
  },
  {
    id: 4,
    nav: "[Blog]",
    link: "#blog",
  },
  {
    id: 5,
    nav: "[Contact]",
    link: "#contact",
  },
];

export const headerSocialData = [
  {
    id: 1,
    label: "Instagram",
    icon: <FaInstagramSquare />,
    link: "https://www.instagram.com/samdoghor",
  },
  {
    id: 2,
    label: "Github",
    icon: <FaGithub />,
    link: "https://www.github.com/samdoghor",
  },
  {
    id: 3,
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/samdoghor",
  },
  {
    id: 4,
    label: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com/samdoghor",
  },
];

export const HeroData = [
  {
    id: 1,
    name: "Samuel, Doghor",
    stack: "Backend Engineer",
    text: "I also play around with frontend designs.",
    code1: (
      <Typewriter
        loop={true}
        speed={100}
        delay={2000}
        text=' "const App = () => {return (<div >App </div>)} export default App" '
      />
    ),
  },
];

export const ServiceData = [
  {
    id: 1,
    service:
      "An engineer, adept at designing scalable systems with an emphasis on accessibility and interface for digital products.",
    service2: "I design",
    service3: "scalable systems ",
  },
];

export const ProjectData = [
  {
    in: 1,
    text: "Featured Projects",
  },
];

export const ProjectDData = [
  {
    id: 1,
    title: "MBS",
    github: "htpps://www.github.com/samdoghor/mbs",
    githubi: <FaGithub />,
    labelg: "Github",
    website: "#",
    websitei: <FaLink />,
    labelw: "Website",
    description:
      "A sports betting app using Martingale with smart algorithms, limits, analytics, and security features for fewer losses and more wins.",
    img: "/img/gomerce.png",
  },
  {
    id: 2,
    title: "Gomerce",
    github: "https://github.com/samdoghor/GomerceBE",
    githubi: <FaGithub />,
    labelg: "Github",
    website: "#",
    websitei: <FaLink />,
    labelw: "Website",
    description:
      "E-commerce app enhanced with JWT authentication, SqlAlchemy, **SQLite** persistence and deployment scripts via Docker. It has all the ready-to-use bare minimum essentials.",
    img: "/img/gomerce.png",
  },
];
