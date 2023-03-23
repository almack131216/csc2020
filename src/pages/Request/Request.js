import React, { useEffect } from "react";
import SEO from "../../components/SEO/SEO";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import InfoBox from "../../components/InfoBoxes/InfoBox/InfoBox";
import FormRequest from "../../components/Forms/Request/Request";
import NavData from "../../assets/_data/_data-navigation";
import {
  CB_YouTubeBtn,
  CB_Contact,
  CB_OpeningHours,
} from "../../components/ContactBoxes/ContactBoxes";
import { ConsoleLog } from "../../assets/js/Helpers";

const Request = (props) => {
  let crumbsArr = [];
  // CRUMB - item
  const itemCrumb = {
    title: NavData.request.title,
    slug: NavData.request.slug,
    class: "crumb-item",
  };
  crumbsArr.push(itemCrumb);

  // useEffect
  useEffect(() => {
    ConsoleLog("[Request]");
    window.scrollTo(0, 0);
    // setDocumentTitle('Request a car');
  }, []);
  // (END) useEffect

  return (
    <>
      <SEO 
      title="Request a car"
      description="If we don't have what you want at present then why not fill in this form to go on our database. If a suitable car comes in then we will be able to contact you for first refusal."
      />

      <div className="container">
        <section className="row">
          <div className="col-sm-12 col-md-9">
            <Breadcrumbs crumbsArr={crumbsArr} pageType="page" />
            <FormRequest />
          </div>
          <div className="sidebar hidden-md-down col-md-3">
            <InfoBox arr={CB_YouTubeBtn} />
            <InfoBox arr={CB_OpeningHours} />
            <InfoBox arr={CB_Contact} />
          </div>
        </section>
      </div>
    </>
  );
};

export default Request;
