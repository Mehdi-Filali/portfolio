import React from "react";
// import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

const ProjectList = () => {
  return (
    <div className="portfolioContent">
      <ul className="radioDisplay"></ul>
      <div className="projects">
        {portfolioData.map((item) => (
          <Project
            key={item.id}
            name={item.name}
            languages={item.languages}
            languagesIcons={item.languagesIcons}
            source={item.source}
            info={item.info}
            picture={item.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
