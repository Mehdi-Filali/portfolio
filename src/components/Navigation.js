import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineContactless } from "react-icons/md";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

const Navigation = () => {
  let newDate = new Date();
  let year = newDate.getFullYear();

  return (
    <div className="sidebar">
      <div className="idContent">
        <div className="profil-pic">
          <img
            src="https://mehdi-filali.github.io/web-portfolio/media/profilPic.jpg"
            alt="profil-pic"
          />
          <h1>Mehdi Aniq-Filali</h1>
        </div>
      </div>

      <div className="navigation">
        <ul className="navigation-container">
          <NavLink
            to={"/"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <FaHome />
            <li>Accueil</li>
          </NavLink>

          <NavLink
            to={"/skills"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <GiSkills />
            <li>Skills</li>
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <CgWebsite />
            <li>Portfolio</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <MdOutlineContactless />
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>

      <div className="socials-container">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/mehdi-aniq-filali/"
              target="blank"
              rel="noopener noreferrer"
            >
              <AiOutlineLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mehdi-filali"
              target="blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </div>

      <div className="copyright">
        <p>{"© " + year + " Mehdi Aniq-Filali Tous droits réservés"}</p>
      </div>
    </div>
  );
};

export default Navigation;
