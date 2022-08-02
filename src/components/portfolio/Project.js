import React, { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";

const Project = ({
  id,
  name,
  languages,
  languagesIcons,
  source,
  info,
  picture,
}) => {
  const [showInfos, setShowInfos] = useState(false);

  const handleInfos = () => {
    setShowInfos(true);
  };

  const handleClose = () => {
    setShowInfos(false);
  };

  return (
    <div className="project">
      <div className="icons">
        <div className="icon">{languagesIcons}</div>
      </div>
      <h4>{name}</h4>
      <div className="projectImg">
        <img
          className="lmj-plant-item-cover"
          src={picture}
          alt={name}
          onClick={handleInfos}
        />
      </div>
      <span className="infos" onClick={handleInfos}>
        <AiFillPlusCircle />
      </span>

      {showInfos && (
        <div className="showInfos">
          <div className="infosContent">
            <div className="head">
              <h2>{name}</h2>
              <div className="sourceCode">
                <a
                  href={source}
                  rel="noopener noreferrer"
                  className="button"
                  target="_blank"
                >
                  Code source
                </a>
              </div>
            </div>
            <p className="text">{info}</p>
            <div className="button return" onClick={handleClose}>
              Retourner sur la page
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
