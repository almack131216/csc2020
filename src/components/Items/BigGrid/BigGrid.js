import React from "react";
import Item from "../Item/Item";

const BigGrid = props => {
  const items = [...props.items];
  console.log("[BigGrid] item[0] = ", items);

  // styling for Homepage News & Testimonials
  let settingsDefault = {};
  settingsDefault.showExcerpt = true;
  settingsDefault.showCategoryLink = false;
  settingsDefault.layout = "item-card big";

  const settings = props.settings ? { ...props.settings } : settingsDefault;
  // (END) styling

  return (
    <div className="items-wrap big-items-wrap">
      <div className="cards">
        {items
          ? items.map((item, index) => {
              // return <p key={index}>{item.name}</p>;
              return (
                <Item key={index} item={item} itemSettingsCust={settings} />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default BigGrid;
