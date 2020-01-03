import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialBtns = props => {
  let classes = ["social_menu"];
  if (props.classes) {
    classes.push(props.classes);
  }

  return (
    <ul className={classes.join(" ")}>
      <li className="facebook">
        <a href={props.facebook}>
          <FaFacebook />
        </a>
      </li>
      <li className="instagram">
        <a href={props.instagram}>
          <FaInstagram />
        </a>
      </li>
      <li className="youtube">
        <a href={props.youtube}>
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default SocialBtns;
