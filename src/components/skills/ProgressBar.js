import React from "react";

const ProgressBar = (props) => {
  console.log(props);
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>
      <div className="years">
        <span>Années d'experiences</span>
        <span>1an</span>
        <span>3ans</span>
        <span>5ans +</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let xpYears = 2;
          let progressBar = (item.xp / xpYears) * 100 + "%";

          return (
            <div key={item.id} className="languageList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
