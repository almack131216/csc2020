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
    categoryName: null,
    categoryNameDefault: "Live",
    categoryArr: {},
    brandArr: [],
    sortedItems: [],
    featuredItems: [],
    featuredItemsArchive: [],
    loading: true,
    brand: "all",
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    maxPriceAbs: 0,
    priceRangeArr: []
  };

  getData = async getPageName => {
    if (!getPageName) return;

    try {
      const data = await fetch(
        CatData[this.state.categoryNameDefault].apiFeatured
      ).then(data => data.json());
      const dataArchive = await fetch(
        CatData["Archive"].apiFeatured
      ).then(dataArchive => dataArchive.json());
      // console.log("[Context.js] getData > data", data);
      // console.log("[Context.js] getData > dataArchive!", dataArchive);

      let items = this.formatData(data);
      // console.log("[Context.js] getData > items...", items);
      let featuredItems = items.slice(0, SiteData.featuredItems.count); // get first 4 items (last 4 added)

      let itemsArchive = this.formatData(dataArchive);
      let featuredItemsArchive = itemsArchive.slice(
        0,
        SiteData.featuredItems.count
      );

      this.setState({
        // categoryName: this.state.categoryNameDefault,
        // categorySlug: this.formatCategoryLink(this.state.categoryNameDefault, 1),
        featuredItems,
        featuredItemsArchive,
        loading: false
      });
    } catch (error) {
      console.log("[Context.js] getData > error...", error);
    }
  };
  // (END) getData

  getDataItems = async (getCategoryName, getStatusId) => {
    const categoryName = getCategoryName; // ? getCategoryName : null;
    const statusId = getStatusId ? getStatusId : 1;

    try {
      const data = await fetch(CatData[categoryName].api).then(data =>
        data.json()
      );
      // console.log("[Context.js] getData > success!", data);

      let items = this.formatData(data);
      // console.log("[Context.js] getData > items...", items);

      let minPrice = 0; //Math.min(...items.map(item => item.price));
      let maxPrice = Math.max(...items.map(item => item.price));
      const maxPriceAbs = Math.round((maxPrice / 100000).toFixed() * 100000);
      const priceRangeArr = SiteData.priceRangeArr;
      // let maxSize = Math.max(...items.map(item => item.size));

      const brandArr = this.setBrandArr(items);
      const categoryArr = this.getcategoryArr(categoryName, statusId);

      this.setState({
        items,
        categoryName,
        categoryArr,
        brandArr,
        sortedItems: items,
        loading: false,
        price: maxPrice,
        minPrice,
        maxPrice: maxPriceAbs,
        maxPriceAbs,
        priceRangeArr
      });
    } catch (error) {
      console.log("[Context.js] getDataItems > error...", error);
    }
  };
  // (END) getDataItems

  componentDidMount() {
    console.log(
      "[Context.js] componentDidMount()... category = " +
        this.state.categoryName
    );
  }

  componentDidUpdate() {}

  setStatePageCategory = category => {
    console.log(
      "[Context.js] setStatePageCategory()... [NOT WORKING] " +
        category +
        " (" +
        this.state.categoryName +
        ")"
    );

    category === "Home"
      ? this.getData("Homepage")
      : this.getDataItems(category, 2);
    // this.setState({ categoryName: category });
  };

  setBrandArr = myObj => {
    const myArr = { list: myObj }; //put obj array into list for flatMap
    const myUniqueList = myArr.list
      .flatMap(obj => obj.subcategoryArr)
      .filter(
        (e, i, a) =>
          a.findIndex(({ id, brand }) => id == e.id && brand == e.brand) == i
      );

    // sort alphabetically [A-Z]
    myUniqueList.sort(function(a, b) {
      var nameA = a.brand.toLowerCase(),
        nameB = b.brand.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });
    console.log("[Context.js] myUniqueList...", myUniqueList);
    return myUniqueList;
  };

  formatData(getItemsData) {
    let tempItems = getItemsData.map(dataItem => {
      let id = dataItem.id;
      let name = dataItem.name;
      let nameSanitized = slugify(dataItem.name, { lower: true });
      let status = dataItem.status;
      let category = dataItem.category;
      let categoryArr = this.getcategoryArr(category, dataItem.status);
      let subcategoryArr = dataItem.catalogue_subcat;
      let price = dataItem.price;
      let brand = dataItem.brand;
      let year = dataItem.year;
      let image = `https://via.placeholder.com/150x110`; // `http://localhost:8080/csc2020-img/images/${dataItem.image}`;
      // let image = `http://www.classicandsportscar.ltd.uk/images_catalogue/${dataItem.image}`;
      let item = {
        id,
        status,
        category,
        categoryArr,
        subcategoryArr,
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

  formatPrice = price => {
    return price
      ? "£" + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

  formatCategoryLink = (getCategoryName, getItemStatus) => {
    let itemCategoryName = getCategoryName
      ? getCategoryName
      : this.state.categoryNameDefault;

    if (itemCategoryName === 2 && getItemStatus === 1)
      return CatData[this.state.categoryNameDefault].slug;

    if (
      (itemCategoryName === "Archive" || itemCategoryName === 2) &&
      getItemStatus === 2
    )
      return CatData["Archive"].slug;

    // console.log(
    //   "[Context.js] formatCategoryLink > getCategoryName...",
    //   getCategoryName + ", getItemStatus: " + getItemStatus
    // );
    return CatData[itemCategoryName].slug;
  };

  getcategoryArr = (getCategoryName, getItemStatus) => {
    let itemCategoryName = getCategoryName
      ? getCategoryName
      : this.state.categoryNameDefault;

    if (itemCategoryName === 2 && getItemStatus === 1)
      return CatData[this.state.categoryNameDefault];

    if (
      (itemCategoryName === "Archive" || itemCategoryName === 2) &&
      getItemStatus === 2
    )
      return CatData["Archive"];

    // console.log(
    //   "[Context.js] getcategoryArr > getCategoryName...",
    //   getCategoryName + ", getItemStatus: " + getItemStatus
    // );
    return CatData[itemCategoryName];
  };

  formatItemLink = getItem => {
    let { id, name, nameSanitized, status, category } = getItem;
    // console.log("??? item category: ", category);
    let itemLink = `/${nameSanitized}`;
    if (
      this.state.categoryName &&
      category === CatData[this.state.categoryName].category
    ) {
      // console.log("NO REPEAT CALL", CatData[category].slug);
      itemLink += this.state.categoryArr.slug;
    } else {
      itemLink += `${this.formatCategoryLink(category, status)}`; //this.state.categoryNameDefault
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
    let { items, categoryName, brand, minPrice, maxPrice } = this.state;

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
    tmpItems =
      categoryName === "Live"
        ? tmpItems.filter(
            item => item.price >= minPrice && item.price <= maxPrice
          )
        : tmpItems;
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
          getData: this.getData,
          formatPrice: this.formatPrice,
          formatItemLink: this.formatItemLink,
          formatCategoryLink: this.formatCategoryLink,
          setStatePageCategory: this.setStatePageCategory,
          setBrandArr: this.setBrandArr,
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
