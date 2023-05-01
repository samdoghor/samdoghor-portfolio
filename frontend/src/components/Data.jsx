import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMarkAsUnread } from "react-icons/md";
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
    label: "Github",
    icon: <FaGithub />,
    link: "https://www.github.com/samdoghor",
  },
  {
    id: 2,
    label: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/samdoghor",
  },
  {
    id: 3,
    label: "Twitter",
    icon: <FaTwitter />,
    link: "https://www.twitter.com/samdoghor",
  },
  {
    id: 4,
    label: "Email",
    icon: <MdMarkAsUnread />,
    link: "mailto:talkto@samdoghor.com",
  },
];

export const HeroData = [
  {
    id: 1,
    greet: <Typewriter loop={true} speed={800} delay={1500} text="Hello " />,
    txt1: "My name is ",
    name: "Samuel, Doghor",
    txt2: "I am a",
    stack: "Backend Developer",
    txt3: "but I also play around with frontend.",
    code1: (
      <Typewriter
        loop={true}
        speed={200}
        delay={1000}
        text=' "const App = () => {return (<div >App </div>)} export default App" '
      />
    ),
  },
];

export const ServiceData = [
  {
    id: 1,
    greet: <Typewriter loop={true} speed={800} delay={1500} text="Hello " />,
    txt1: "My name is ",
    name: "Samuel, Doghor",
    txt2: "I am a",
    stack: "Backend Developer",
    txt3: "but I also play around with frontend.",
    code1: (
      <Typewriter
        loop={true}
        speed={200}
        delay={1000}
        text=' "const App = () => {return (<div >App </div>)} export default App" '
      />
    ),
  },
];