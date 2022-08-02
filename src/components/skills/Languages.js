import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.3 },
      { id: 2, value: "CSS3", xp: 2 },
      { id: 3, value: "HTML5", xp: 2 },
      { id: 4, value: "php", xp: 0.7 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.8 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1 },
      { id: 4, value: "Material UI", xp: 1.3 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="langauagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          className="frameworksDisplay"
          title="Frameworks & Documentation"
        />
      </div>
    );
  }
}

export default Languages;
