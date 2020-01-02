import React, { useEffect } from "react";
import ItemsContainer from "../../containers/ItemsContainer";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import BrandList from "../../components/Sidebar/BrandList/BrandList";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Items = props => {
  const context = useContext(ItemContext);
  const { getDataItems } = context;

  let showWidgetOpeningHours = null;
  let showWidgetContact = null;

  const categoryName = props.category ? props.category : "Live";

  useEffect(() => {
    getDataItems(categoryName, 2);
  }, [getDataItems, categoryName]);

  console.log("[pages>Items.js] categoryName...", categoryName);

  switch (categoryName) {
    case "Archive":
      showWidgetOpeningHours = false;
      showWidgetContact = false;
      break;
    default:
      showWidgetOpeningHours = true;
      showWidgetContact = true;
  }

  return (
    <div className="container">
      <section className="content-wrap row">
        <div className="sidebar hidden-md-down col-md-3 padding-x-0">
          <NavLeft />
          <BrandList />

          {showWidgetOpeningHours ? (
            <Widget body={WidgetData.openingHours} />
          ) : null}
          {showWidgetContact ? <Widget body={WidgetData.contact} /> : null}
        </div>
        <div className="content col-sm-12 col-md-9 col-posts-parent">
          <ItemsContainer />
        </div>
      </section>
    </div>
  );
};

export default Items;
