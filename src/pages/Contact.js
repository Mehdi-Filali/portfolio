import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BiMobileVibration } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";

import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e3cdc6"
              fill-opacity="1"
              d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,202.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="contactBox">
          <h1>Contactez moi</h1>
          <ul>
            <li>
              <FaMapMarkerAlt />
              <span>Evry</span>
            </li>
            <li>
              <BiMobileVibration />
              <span>06 50 67 16 33</span>
            </li>
            <li>
              <MdOutgoingMail />
              <span>
                <a href="mailto:aniq.filali.mehdi@gmail.com">
                  aniq.filali.mehdi@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://www.linkedin.com/in/mehdi-aniq-filali/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <AiOutlineLinkedin />
            </a>
            <a
              href="https://github.com/mehdi-filali"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <AiFillGithub />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
