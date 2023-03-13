import React, { useEffect } from "react";
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
  // CRUMB - item
  const itemCrumb = {
    title: NavData.request.title,
    slug: NavData.request.slug,
    class: 'crumb-item'
  }
  crumbsArr.push(itemCrumb);
  
  // useEffect
	useEffect(
		() => {		
      ConsoleLog('[Request]');      
      window.scrollTo(0, 0);
      setDocumentTitle('Request a car');
  }, []);
  // (END) useEffect

  return (
    <div className="container">
      <section className="row">
        <div className="content col-sm-12 col-md-9">
          <Breadcrumbs crumbsArr={crumbsArr} pageType="page" />
          <FormRequest />
        </div>
        <div className="sidebar hidden-md-down col-md-3 padding-x-0XXX">
          <InfoBox arr={CB_OpeningHours} />
          <InfoBox arr={CB_Contact} />
        </div>
      </section>
    </div>
  );
};

export default Request;
