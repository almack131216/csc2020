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
    itemsLive: [],
    itemsArchive: [],
    itemsNews: [],
    categoryId: null,
    categorySlug: null,
    sortedItems: [],
    featuredItems: [],
    featuredItemsArchive: [],
    loading: true,
    brand: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0
  };

  getData = async () => {
    const categoryId = "Live";
    const statusId = 1;

    try {
      await fetch("http://localhost:3002/api/items/all")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(
            "SANITIZE....",
            slugify("MG TF 1500 UK Matching Numbers")
          );
          console.log("[Context.js] getData > success!", data);

          let items = this.formatData(data);
          console.log("[Context.js] getData > items...", items);

          let itemsAllLive = items.filter(item => item.status === 1);
          let itemsAllArchive = items.filter(item => item.status === 2);

          let itemsLive = itemsAllLive.filter(item => item.category === 2);
          let itemsArchive = itemsAllArchive.filter(
            item => item.category === 2
          );
          let itemsNews = itemsAllLive.filter(item => item.category === 5);

          let featuredItems = itemsLive.slice(0, SiteData.featuredItems.count); // get first 4 items (last 4 added)
          console.log("[Context.js] getData > featuredItems...", featuredItems);

          let featuredItemsArchive = itemsArchive.slice(
            0,
            SiteData.featuredItems.count
          ); // get first 4 items (last 4 added)
          console.log(
            "[Context.js] getData > featuredItemsSold...",
            itemsArchive
          );

          // items = items.find(item => item.brand === 27);

          let minPrice = Math.min(...items.map(item => item.price));
          let maxPrice = Math.max(...items.map(item => item.price));
          // let maxSize = Math.max(...items.map(item => item.size));

          this.setState({
            items,
            itemsLive,
            itemsArchive,
            itemsNews,
            categoryId: categoryId,
            categorySlug: this.formatCategoryLink(categoryId, statusId),
            featuredItems,
            featuredItemsArchive,
            sortedItems: items,
            loading: false,
            price: maxPrice,
            minPrice: minPrice,
            maxPrice: maxPrice
          });
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

  setStatePageCategory = category => {
    console.log(
      "[Context.js] setStatePageCategory()... [NOT WORKING] " + category
    );
    // this.getData(category, 2);
    // this.setState({ categoryId: category });
  };

  formatPrice = price => {
    return price
      ? "£" + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

  formatCategoryLink = (getCategoryId, getItemStatus) => {
    console.log(
      "Context.js] formatCategoryLink getCategoryId...",
      getCategoryId
    );

    if (getCategoryId === CatData["Archive"].category && getItemStatus === 2)
      return CatData["Archive"].slug;
    return CatData[getCategoryId].slug;
  };

  formatItemLink = getItem => {
    let { id, name, nameSanitized, status, category, brand } = getItem;
    // console.log("??? item category: ", category);
    let itemLink = `/${nameSanitized}`;
    if (category === CatData[this.state.categoryId].category) {
      // console.log("NO REPEAT CALL", CatData[category].slug);
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
          setStatePageCategory: this.setStatePageCategory,
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
