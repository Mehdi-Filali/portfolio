import React from "react";
import {
  GiCampCookingPot,
  GiKimono,
  GiBasketballBall,
  GiPhotoCamera,
  GiMoonOrbit,
} from "react-icons/gi";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li className="hobby">
          <GiCampCookingPot />
          <span>Cuisine</span>
        </li>
        <li className="hobby">
          <GiKimono />
          <span>Culture Japonaise</span>
        </li>
        <li className="hobby">
          <GiPhotoCamera />
          <span>Photographie</span>
        </li>
        <li className="hobby">
          <GiBasketballBall />
          <span>Basketball</span>
        </li>
        <li className="hobby">
          <GiMoonOrbit />
          <span>Espace</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
