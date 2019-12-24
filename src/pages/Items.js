import React from "react";
import ItemsContainer from "../containers/ItemsContainer";
import NavLeft from "../components/Navigation/NavLeft";
import WidgetData from "../assets/_data/_data-widgets";
import Widget from "../components/Widgets/Widget";

export default function Items(props) {
  return (
    <>
      <section className="content-wrap splitter">
        <div className="content-left">
          <NavLeft />
          <Widget body={WidgetData.openingHours} />
          <Widget body={WidgetData.contact} />
        </div>
        <div className="content">
          <ItemsContainer />
        </div>
      </section>
    </>
  );
}
