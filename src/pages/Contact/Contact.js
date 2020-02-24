import React from "react";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import Request from "../../components/Forms/Request/Request";

const Contact = props => {
  return (
    <div className="container">
      <section className="row">
        <div className="sidebar hidden-md-down col-md-3 padding-x-0">
          <NavLeft />
          <Widget body={WidgetData.openingHours} />
          <Widget body={WidgetData.contact} />
        </div>
        <div className="content col-sm-12 col-md-9">
          <h1>Request</h1>
          <Request />
        </div>
      </section>
    </div>
  );
};

export default Contact;
