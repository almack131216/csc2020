import React, { useState, useEffect } from "react";
import ItemsContainer from "../containers/ItemsContainer";
import NavLeft from "../components/Navigation/NavLeft";
import WidgetData from "../assets/_data/_data-widgets";
import Widget from "../components/Widgets/Widget";
import { useContext } from "react";
import { ItemContext } from "../Context";

const Items = props => {
  const context = useContext(ItemContext);

  let widgetOpeningHours = null;
  let widgetContact = null;

  const categoryName = props.category ? props.category : "Live";
  // context.setStatePageCategory(categoryName);
  // this.setState({ categoryId: categoryName });
  useEffect(() => {
    console.log("location changed");
    context.setStatePageCategory(categoryName);
  }, [categoryName]);

  console.log("[pages>Items.js] categoryId...", categoryName);

  switch (categoryName) {
    case "Archive":
      widgetOpeningHours = false;
      widgetContact = false;
      break;
    default:
      widgetOpeningHours = true;
      widgetContact = true;
  }

  return (
    <>
      <section className="content-wrap splitter">
        <div className="content-left">
          <NavLeft />
          {widgetOpeningHours ? (
            <Widget body={WidgetData.openingHours} />
          ) : null}
          {widgetContact ? <Widget body={WidgetData.contact} /> : null}
        </div>
        <div className="content">
          <ItemsContainer />
        </div>
      </section>
    </>
  );
};

export default Items;
