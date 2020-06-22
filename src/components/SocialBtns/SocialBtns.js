import React from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const SocialBtns = props => {
  // console.log("[SocialBtns] props = ", props);

  const social = { ...props.social };

  let classes = ["social_menu"];
  if (props.classes) {
    classes.push(props.classes);
  }

  return (
    <ul className={classes.join(" ")}>
      <li className="facebook">
        <a
          href={social.facebook}
          target="_blank"
          title="Link to our Facebook page in a new window"
          rel="external noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </li>
      <li className="instagram">
        <a
          href={social.instagram}
          target="_blank"
          title="Link to our Instagram page in a new window"
          rel="external noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </li>
      <li className="youtube">
        <a
          href={social.youtube}
          target="_blank"
          title="Link to our YouTube page in a new window"
          rel="external noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </li>
    </ul>
  );
};

export default SocialBtns;
