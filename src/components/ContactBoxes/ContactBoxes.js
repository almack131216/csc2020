import React from "react";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "..//SocialBtns/SocialBtns";
import { getDateToday } from "../../assets/js/Helpers";
import parse from "html-react-parser";

const socialBtnsElement = <SocialBtns social={SiteData.social} classes="" />;

const CB_YouTubeBtn = {
  title: "",
  class: "logo-youtube",
  text: (
    <a href={SiteData.social.youtube} target="_blank" rel="external noopener noreferrer" title="Watch us on our YouTube channel in a new window">
      <span>Watch us on YouTube</span>
    </a>
  )
};

const CB_OpeningHoursDefault = {
  title: "Office Hours",
  text: (
    <ul>
      <li>Mon-Fri: 9am-5.30pm</li>
      <li>Sunday: 10am-4pm</li>
      <li>Closed Saturday</li>
    </ul>
  )
};

const CB_OpeningHoursChristmas = {
  title: "Christmas Office Hours",
  class: "christmas-hours",
  text: (
    <ul>
      <li>21st Thu: 9am-5:30pm</li>
      <li>22nd Fri: 8:30am-12pm</li><li>23rd: Closed</li>
      <li>24th: Appointment Only</li>
      <li>25th-26th: Closed</li><li>27th-29th: 9am-5:30pm</li>
      <li>30th Sat: Closed</li>
      <li>31st Sun: Appointment Only</li>
      <li>1st Mon: Closed</li>
      <li>Open as usual from 2nd Jan</li>
    </ul>
  )
};

const CB_OpeningHoursEaster = {
  title: "Easter Office Hours",
  class: "easter-hours",
  text: (
    <ul>      
      <li>7-10th Apr. Closed </li>      
      <li>11th Apr. Reopen as normal</li>
      <li>Mon-Fri: 9am-5.30pm</li>
      <li>Sunday: 10am-4pm</li>
    </ul>
  )
};

const CB_OpeningHoursTemp = {
  title: "Easter Office Hours",
  class: "easter-hours",
  text: (
    <ul>
      <li>Mon-Fri: 9am-5.30pm</li>
      <li>Sun 25th Jun: Closed - at Malton Show</li>
      <li>Closed Saturday</li>
    </ul>
  )
};

const CB_OpeningHours = getDateToday() > '2023-12-20' && getDateToday() < '2024-01-02' ? CB_OpeningHoursChristmas : CB_OpeningHoursDefault;

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

export { CB_OpeningHours, CB_Address, CB_Contact, CB_YouTubeBtn };
