import "./styles/nav.css";
import { Link } from "react-scroll";
import { useState } from "react";

export const NavBar = () => {
  const [toggle, settoggle] = useState(false);

  const togglefunc = () => {
    settoggle(!toggle);
  };

  return (
    <div>
      <div className={toggle ? "nav expanded" : "nav"}>
        <div className="logo">Gtec Hyderabad</div>

        <div className="nav-links">
          <Link
            onClick={togglefunc}
            to={"profile"}
            smooth
            spy
            className="sub-link "
            offset={-70}
          >
            About
          </Link>
          <Link
            onClick={togglefunc}
            to={"edu"}
            smooth
            spy
            className="sub-link"
            offset={-70}
          >
            Team
          </Link>
          <Link
            onClick={togglefunc}
            to={"skills"}
            smooth
            spy
            className="sub-link"
            offset={-70}
          >
            Services
          </Link>
          <Link
            onClick={togglefunc}
            to={"intern"}
            smooth
            spy
            className="sub-link"
            offset={-70}
          >
            Prices
          </Link>
          <Link
            onClick={togglefunc}
            to={"project"}
            smooth
            spy
            className="sub-link"
            offset={-70}
          >
            Gallery
          </Link>
          <Link
            onClick={togglefunc}
            to={"contact"}
            smooth
            spy
            className="sub-link"
            offset={-70}
          >
            Contacts
          </Link>
          <div className="cta-button">
            <a onClick={togglefunc} href="#talk">
              Let's talk
            </a>
          </div>
        </div>
        <div className="toggle" onClick={togglefunc}>
          {toggle ? (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M19 5L4.99998 19M5.00001 5L19 19"
                  stroke="#fff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
                  fill="#fff"
                ></path>{" "}
                <path
                  d="M1 4C1 3.44772 1.44772 3 2 3H22C22.5523 3 23 3.44772 23 4C23 4.55228 22.5523 5 22 5H2C1.44772 5 1 4.55228 1 4Z"
                  fill="#fff"
                ></path>{" "}
                <path
                  d="M1 20C1 19.4477 1.44772 19 2 19H22C22.5523 19 23 19.4477 23 20C23 20.5523 22.5523 21 22 21H2C1.44772 21 1 20.5523 1 20Z"
                  fill="#fff"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
