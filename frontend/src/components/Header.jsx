import { headerLogoData, headerNavData, headerSocialData } from "./Data";

const Header = () => {
  return (
    <div className="w-full shadow-xl mt-8 p-4 sticky top-0" id="header">
      <div className="flex flex-row">
        <div className="grid grid-cols-3 gap-2">
          <div className="w-full justify-start flex">
            {headerLogoData.map((d) => (
              <span key={d.id}>
                <a
                  href={d.link2}
                  className="text-primary-logo font-bold text-2xl pe-2 text-start"
                >
                  {d.logo}
                </a>
                <a
                  href={d.link}
                  className="text-white text-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  {d.name}
                </a>
              </span>
            ))}
          </div>
          <div className="w-full text-white text-center justify-center flex">
            {headerNavData.map((d) => (
              <a
                key={d.id}
                href={d.link}
                className="inline-flex hover:text-primary-logo text-center active:text-primary-logo text-sm px-1 font-semibold font-mono"
              >
                {d.nav}
              </a>
            ))}
          </div>
          <div className="w-full text-xl text-white justify-end flex">
            {headerSocialData.map((d) => (
              <a
                key={d.id}
                href={d.link}
                className="pe-4 inline-flex hover:text-primary-logo text-end"
              >
                {d.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
