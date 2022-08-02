import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Salut ✌️, moi c'est Mehdi</h1>
          <h2>Développeur React</h2>
          <div className="pdf">
            <a
              href="https://mehdi-filali.github.io/web-portfolio/media/cv-dev-react.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
