import React from "react";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";

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
          <h1>Contact</h1>
        </div>
      </section>
    </div>
  );
};

export default Contact;
