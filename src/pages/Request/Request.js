import React from "react";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import InfoBox from "../../components/Sidebar/InfoBox/InfoBox";
import FormRequest from "../../components/Forms/Request/Request";
import NavData from "../../assets/_data/_data-navigation";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";

const Request = props => {
  let crumbsArr = [];
  let pageArr = NavData.request;
  crumbsArr.push(pageArr);

  return (
    <div className="container">
      <section className="row">
        <div className="sidebar hidden-md-down col-md-3 padding-x-0">
          <NavLeft />
          <InfoBox arr={CB_OpeningHours} />
          <InfoBox arr={CB_Contact} />
        </div>
        <div className="content col-sm-12 col-md-9">
          <Breadcrumbs crumbsArr={crumbsArr} pageType="page" />
          <FormRequest />
        </div>
      </section>
    </div>
  );
};

export default Request;
