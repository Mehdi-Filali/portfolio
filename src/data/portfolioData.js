import { TbBrandJavascript, TbBrandCss3 } from "react-icons/tb";
import { FaReact, FaSass } from "react-icons/fa";

export const portfolioData = [
  {
    id: 1,
    name: "React Mern - Réseau Social",
    languages: ["React", "Javascript", "Saas"],
    languagesIcons: [<FaReact />, <TbBrandJavascript />, <FaSass />],
    source: "https://warm-anchorage-60753.herokuapp.com/racoont-mern/home",
    info: "Ici, vous découvrirez un site de réseau social type Instagram. C'est un projet FULLSTACK, le backend tourne sur un autre serveur. Ce projet m'a beaucoup appris quant au fonctionnement et le développement des fonctionnalités que l'on peut voir sur ce genre de sites. Bonne visite ✌️",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/mern.png",
  },
  {
    id: 2,
    name: "React app recensement - API",
    languages: ["Javascript", "React", "CSS3"],
    languagesIcons: [<FaReact />, <TbBrandJavascript />, <TbBrandCss3 />],
    source: "https://mehdi-filali.github.io/country-app/",
    info: "Une application de recensement des pays par continent et de leur population. Dans ce projet, j'ai travaillé sur les requêtes API avec Axios (useEffect, useState), le mapping et le filtrage de la data (map, filter, sort, slice).",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/country.png",
  },
  {
    id: 3,
    name: "La maison jungle",
    languages: ["javascript", "React", "Saas"],
    languagesIcons: [<TbBrandJavascript />, <FaSass />, <FaReact />],
    source: "https://mehdi-filali.github.io/la-maison-jungle/",
    info: "La maison jungle est une React app de vente de plantes. Ce projet m'a permis de me familiariser avec le fonctionnement et les fonctionnalités d'un site e-commerce.",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/lmj.png",
  },
  {
    id: 4,
    name: "À Venir",
    languages: ["javascript", "php", "react"],
    languagesIcons: [<TbBrandJavascript />, <TbBrandCss3 />, <FaReact />],
    source: "http://www.github.com",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/project4.JPG",
  },
  {
    id: 5,
    name: "À Venir",
    languages: ["javascript", "css"],
    languagesIcons: [<TbBrandJavascript />, <TbBrandCss3 />],
    source: "http://www.github.com",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/project5.JPG",
  },
  {
    id: 6,
    name: "À Venir",
    languages: [],
    languagesIcons: [<TbBrandJavascript />, <TbBrandCss3 />, <FaReact />],
    source: "http://www.github.com",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium, veritatis debitis odio eveniet quos incidunt eaque nemo eius perferendis consequatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus laboriosam aut nihil? Possimus, id facilis dignissimos repudiandae modi dolorum ea accusantium.",
    picture: "https://mehdi-filali.github.io/web-portfolio/media/project6.JPG",
  },
];
