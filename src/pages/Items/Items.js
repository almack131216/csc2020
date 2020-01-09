import React, { useEffect } from "react";
import ItemsContainer from "../../containers/ItemsContainer";
import NavLeft from "../../components/Sidebar/Navleft/NavLeft";
import BrandList from "../../components/Sidebar/BrandList/BrandList";
import WidgetData from "../../assets/_data/_data-widgets";
import Widget from "../../components/Sidebar/InfoBox/InfoBox";
import { useContext } from "react";
import { ItemContext } from "../../Context";

const Items = props => {
  // window.scrollTo(0, 0);
  const context = useContext(ItemContext);
  const { isStockPage, getDataItems, categoryArr, brand } = context;
  // CLASS
  let classContainer = ["container"];
  if (props.class) classContainer.push(props.class);
  // SIDEBAR > Widgets
  let showWidgetOpeningHours = null;
  let showWidgetContact = null;

  const categoryName = props.category ? props.category : "Live";
  console.log("XXXXXXXXXXXXXXXXX categoryName: ", categoryName, categoryArr);

  let getSlug = window.location.pathname;
  let getBrandFromSlug = getSlug
    .substr(0, getSlug.indexOf("_"))
    .replace("/", "");

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("[pages>Items.js] useEffect()...", getBrandFromSlug);
    getDataItems(categoryName, getBrandFromSlug);
  }, [getDataItems, categoryName, getBrandFromSlug]);

  console.log(
    "[pages>Items.js] categoryName = ",
    categoryName,
    " | brand = " + brand
  );

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
    <div className={classContainer.join(" ")}>
      <section className="row">
        <div className="sidebar hidden-md-down col-md-3 padding-x-0">
          <NavLeft categoryName={categoryName} />
          {isStockPage ? <BrandList /> : null}

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
