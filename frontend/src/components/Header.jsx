import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { headerLogoData, headerNavData, headerSocialData } from "./Data";
import ProfileImage from "../assets/images/doghs.jpg";

const Header = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="w-full !bg-transparent shadow-xl mt-8 p-4 z-50"
    >
      <Navbar.Brand>
        <a
          href={headerLogoData[0].link2}
          className="mr-3 self-center whitespace-nowrap text-xl font-bold md:text-2xl text-primary-logo"
        >
          {headerLogoData[0].logo}
        </a>
        <a
          href={headerLogoData[0].link}
          className="self-center whitespace-nowrap font-semibold text-sm text-white"
        >
          {headerLogoData[0].name}
        </a>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar alt="User settings" img={ProfileImage} rounded={true} />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Doghor Samuel</span>
            <span className="block truncate text-sm font-medium">
              talkto@samdoghor.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            <div className="w-full text-xl text-primary-logo justify-end flex">
              {headerSocialData.map((d) => (
                <a
                  key={d.id}
                  href={d.link}
                  target="_blank"
                  rel="noreferrer"
                  className="pe-4 inline-flex hover:text-primary-ylogo text-end"
                >
                  {d.icon}
                </a>
              ))}
            </div>
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        {headerNavData.map((d) => (
          <Navbar.Link key={d.id} href={d.link} className="text-white">
            {d.nav}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
