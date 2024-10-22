import { socials } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className={`container py-10`}>
        <div className={`flex w-full max-md:flex-col`}>
          <div className={`small-compact flex-center flex-1 flex-wrap gap-5`}>
            <p className={`opacity-70`}>Copyright, Daniel Ugochukwu</p>
            <div className={`flex-center sm:ml-auto`}>
              <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1">
                Privacy Policy
              </p>
              <p
                className={`text-p5 transition-all duration-500 hover:text-p1`}
              >
                Terms of use
              </p>
            </div>
          </div>

          <ul
            className={`flex flex-1 justify-items-center gap-3 max-md:mt-10 md:justify-end`}
          >
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a
                  href={url}
                  className={`social-icon`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={icon}
                    alt={title}
                    className={`size-1/3 object-contain`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;