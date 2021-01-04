import React from "react";
import SiteData from "../../assets/_data/_data";
import SocialBtns from "..//SocialBtns/SocialBtns";
import { getDateToday } from "../../assets/js/Helpers";
import parse from "html-react-parser";

const socialBtnsElement = <SocialBtns social={SiteData.social} classes="" />;

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
  text: (
    <ul>
      <li>24th Dec. 8.30am-1pm</li>
      <li>25th Dec. Closed</li>
      <li>26th Dec. Closed</li>
      <li>27th Dec. Closed </li>
      <li>28th Dec. By appointment only </li>
      <li>29th Dec. 8.30am-5.30pm</li>
      <li>30th Dec. 8.30am-5.30pm</li>
      <li>31st Dec. 8.30am-1pm</li>
      <li>1st Jan. Closed </li>
      <li>2nd Jan. Closed</li>
      <li>3rd Jan. By appointment only </li>
      <li>4th Jan. Re open as normal </li>
    </ul>
  )
};

const CB_OpeningHours = getDateToday() > '2020-12-22' && getDateToday() < '2021-01-04' ? CB_OpeningHoursChristmas : CB_OpeningHoursDefault;

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
