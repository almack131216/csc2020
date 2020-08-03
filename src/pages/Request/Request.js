import React, { useEffect } from "react";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import FormRequest from "../../components/Forms/Request/Request";
import NavData from "../../assets/_data/_data-navigation";
import {
  CB_Contact,
  CB_OpeningHours
} from "../../components/ContactBoxes/ContactBoxes";
import { setDocumentTitle, ConsoleLog } from "../../assets/js/Helpers";

const Request = props => {
  let crumbsArr = [];
  // useEffect
	useEffect(
		() => {		
      ConsoleLog('[Request]');	
      let pageArr = NavData.request;
      crumbsArr.push(pageArr);
      window.scrollTo(0, 0);
      setDocumentTitle('Request a car');
  }, [crumbsArr]);
  // (END) useEffect

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
