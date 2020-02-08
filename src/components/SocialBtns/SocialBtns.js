import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialBtns = props => {
  console.log("[SocialBtns] props = ", props);

  const social = { ...props.social };

  let classes = ["social_menu"];
  if (props.classes) {
    classes.push(props.classes);
  }

  return (
    <ul className={classes.join(" ")}>
      <li className="facebook">
        <a href={social.facebook}>
          <FaFacebook />
        </a>
      </li>
      <li className="instagram">
        <a href={social.instagram}>
          <FaInstagram />
        </a>
      </li>
      <li className="youtube">
        <a href={social.youtube}>
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default SocialBtns;
