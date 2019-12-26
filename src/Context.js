import React, { Component } from "react";
import SiteData from "./assets/_data/_data";
import CatData from "./assets/_data/_data-categories";
const slugify = require("slugify");
const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
  state = {
    siteData: SiteData,
    items: [],
    categoryId: null,
    categorySlug: null,
    sortedItems: [],
    featuredItems: [],
    loading: true,
    brand: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0
  };

  getData = async (getCategoryId, getStatusId) => {
    const categoryId = getCategoryId ? getCategoryId : 2;
    const statusId = getStatusId ? getStatusId : 1;

    try {
      const data = await fetch(
        "http://localhost:3002/api/items/for-sale"
      ).then(data => data.json());

      console.log("SANITIZE....", slugify("MG TF 1500 UK Matching Numbers"));
      console.log("[Context.js] getData > success!", data);

      let items = this.formatData(data);
      console.log("[Context.js] getData > items...", items);
      let featuredItems = items.slice(0, SiteData.featuredItems.count); // get first 4 items (last 4 added)

      // items = items.find(item => item.brand === 27);

      let minPrice = Math.min(...items.map(item => item.price));
      let maxPrice = Math.max(...items.map(item => item.price));
      // let maxSize = Math.max(...items.map(item => item.size));

      this.setState({
        items,
        categoryId: categoryId,
        categorySlug: this.formatCategoryLink(categoryId, statusId),
        featuredItems,
        sortedItems: items,
        loading: false,
        price: maxPrice,
        minPrice: minPrice,
        maxPrice: maxPrice
      });
    } catch (error) {
      console.log("[Context.js] getData > error...", error);
    }
  };
  // getData

  componentDidMount() {
    this.getData();
  }

  formatData(getItemsData) {
    let tempItems = getItemsData.map(dataItem => {
      let id = dataItem.id;
      let name = dataItem.name;
      let nameSanitized = slugify(dataItem.name);
      let status = dataItem.status;
      let category = dataItem.category;
      let price = dataItem.price;
      let brand = dataItem.brand;
      let year = dataItem.year;
      let image = `http://localhost:8080/csc2020-img/images/${dataItem.image}`;
      // let image = `http://www.classicandsportscar.ltd.uk/images_catalogue/${dataItem.image}`;
      let item = {
        id,
        status,
        category,
        name,
        nameSanitized,
        brand,
        price,
        year,
        image
      };
      return item;
    });
    return tempItems;
  }

  getItemXXX = id => {
    let tempItems = [...this.state.items];

    const item = tempItems.find(item => item.id === id);
    return item;
  };

  formatPrice = price => {
    return price
      ? "£" + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

  formatCategoryLink = (getCategoryId, getItemStatus) => {
    if (getCategoryId === 2 && getItemStatus === 2) return CatData[22].slug;
    return CatData[getCategoryId].slug;
  };

  formatItemLink = getItem => {
    let { id, name, nameSanitized, status, category, brand } = getItem;
    console.log("??? item category: ", category);
    let itemLink = `/${nameSanitized}`;
    if (category === this.state.categoryId) {
      console.log("NO REPEAT CALL", CatData[category].slug);
      itemLink += this.state.categorySlug;
    } else {
      itemLink += `${this.formatCategoryLink(category, status)}`;
    }

    itemLink += `/${id}`;
    return itemLink;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    // const value = event.target.value;
    // console.log("[Context.js] handleChange > this is type..." + type);
    console.log("[Context.js] handleChange > this is name..." + name);
    // console.log("[Context.js] handleChange > this is value..." + value);
    this.setState(
      {
        [name]: value
      },
      this.filterItems
    );
  };

  filterItems = () => {
    console.log("[Context.js] filterItems > hello");
    let { items, brand, minPrice, maxPrice } = this.state;

    // all the rooms
    let tmpItems = [...items];
    // filter by brand
    console.log("BRAND? ", brand);
    console.log("ITEM COUNT:  ", tmpItems);
    if (brand !== "all") {
      console.log("BRAND CHANGED? ", brand);
      tmpItems = tmpItems.filter(item => item.brand === parseInt(brand));
      console.log("ITEM COUNT CHANGED:  ", tmpItems);
    }

    // filter by price
    // tmpItems = tmpItems.filter(item => item.price <= price);
    // filter by price
    tmpItems = tmpItems.filter(
      item => item.price >= minPrice && item.price <= maxPrice
    );
    // change state
    this.setState({
      sortedItems: tmpItems
    });
  };

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          getItem: this.getItem,
          formatPrice: this.formatPrice,
          formatItemLink: this.formatItemLink,
          formatCategoryLink: this.formatCategoryLink,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export function withItemConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ItemConsumer>
        {value => <Component {...props} context={value} />}
      </ItemConsumer>
    );
  };
}

export { ItemProvider, ItemConsumer, ItemContext };
