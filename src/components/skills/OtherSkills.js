import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";

const OtherSkills = () => {
  return (
    <div className="otherSkills">
      <h3>Autres compétences</h3>
      <div className="list">
        <ul>
          <li>
            <BsFillCheckSquareFill />
            Anglais courant
          </li>
          <li>
            <BsFillCheckSquareFill />
            Github
          </li>
          <li>
            <BsFillCheckSquareFill />
            AGILE
          </li>
          <li>
            <BsFillCheckSquareFill />
            UI/UX DESIGN
          </li>
        </ul>
        <ul>
          <li>
            <BsFillCheckSquareFill />
            SEO
          </li>
          <li>
            <BsFillCheckSquareFill />
            Photoshop
          </li>
          <li>
            <BsFillCheckSquareFill />
            Illustrator
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OtherSkills;
