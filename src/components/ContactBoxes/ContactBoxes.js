import React from "react";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "..//SocialBtns/SocialBtns";
import parse from "html-react-parser";

const socialBtnsElement = <SocialBtns social={SiteData.social} classes="" />;

const CB_OpeningHours = {
  title: "Opening Hours",
  text: (
    <ul>
      <li>Mon-Fri: 9am-5.30pm</li>
      <li>Sunday: 10am-4pm</li>
      <li>Closed Saturday</li>
    </ul>
  )
};

const CB_Address = {
  title: "Address",
  text: (
    <ul>
      <li>
        <a
          href={SiteData.navigationFooter.columnC[1].url}
          title={SiteData.navigationFooter.columnC[1].titleHover}
          target={SiteData.navigationFooter.columnC[1].target}
        >
          {SiteData.navigationFooter.columnC[1].title}
        </a>
      </li>
      <li>{parse(SiteData.contact.address)}</li>
    </ul>
  )
};

const CB_Contact = {
  title: `Contact`,
  text: (
    <ul>
      <li>
        <a href="mailto:sales@classicandsportscar.ltd.uk">Contact Sales</a>
      </li>
      <li>Tel: {SiteData.contact.telephone}</li>
      <li>{socialBtnsElement}</li>
    </ul>
  )
};

export { CB_OpeningHours, CB_Address, CB_Contact };
