import React from "react";
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

  const categoryID = props.category ? props.category : 2;
  context.setStatePageCategory(categoryID);
  // this.setState({ categoryId: categoryID });

  console.log("[pages>Items.js] categoryId...", categoryID);

  switch (categoryID) {
    case 22:
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
