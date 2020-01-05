import React, { Component } from "react";
import SiteData from "./assets/_data/_data";
import CatData from "./assets/_data/_data-categories";
import SortFilterRangeData from "./assets/_data/_data-filter-sort";
import { setDocumentTitle } from "./assets/js/Helpers";
const slugify = require("slugify");
const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
  state = {
    siteData: SiteData,
    catData: CatData,
    items: [],
    showFilter: true,
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
    maxPriceInit: 0,
    minYear: 0,
    minYearInit: 0,
    maxYear: 0,
    maxYearInit: 0,
    priceRangeArr: [],
    sortBy: "DateDesc",
    sortByArr: {},
    sortRangeArr: []
  };

  /////////////////////////////////////////////////////////////////////////// GET data (homepage)
  // Get data from API to show on the homepage
  getData = async getPageName => {
    if (!getPageName) return;

    try {
      const data = await fetch(
        CatData[this.state.categoryNameDefault].apiFeatured
      ).then(data => data.json());
      const dataArchive = await fetch(
        CatData["Archive"].apiFeatured
      ).then(dataArchive => dataArchive.json());

      let items = this.formatData(data);
      // console.log("[Context.js] getData > items...", items);

      //////////////
      // FEATURED //
      //////////////
      // Featured items [Live]
      let featuredItems = items.slice(0, SiteData.featuredItems.itemCount); // get first # items from main array
      // Featured items [Archive]
      let itemsArchive = this.formatData(dataArchive);
      let featuredItemsArchive = itemsArchive.slice(
        0,
        SiteData.featuredItems.itemCount
      );

      ///////////////
      // SET STATE //
      ///////////////
      this.setState({
        featuredItems,
        featuredItemsArchive,
        loading: false
      });
    } catch (error) {
      console.log("[Context.js] getData > error...", error);
    }
  };
  // (END) getData

  /////////////////////////////////////////////////////////////////////////// GET data (items)
  // Get data from API to show on the items page(s)
  // accept category and status parameter to determine api call
  getDataItems = async (getCategoryName, getBrandSlug) => {
    console.log(
      "[Context.js] getDataItems()...",
      getCategoryName,
      getBrandSlug
    );

    try {
      const data = await fetch(CatData[getCategoryName].api).then(data =>
        data.json()
      );

      const categoryName = getCategoryName; // ? getCategoryName : null;
      const isStockPage =
        categoryName === "Live" || categoryName === "Archive" ? true : false;

      const statusId = categoryName === "Archive" ? 2 : 1;
      const brandSlug = getBrandSlug ? getBrandSlug : null; // status determines Live or Archive

      let allItems = this.formatData(data);
      let items = allItems;
      let sortedItems = [];

      let brand = null;
      if (brandSlug) {
        brand = allItems.find(x => x.subcategoryArr.slug === brandSlug).brand;
        console.log("[Context.js] brandSlug received...", brand);
        sortedItems = allItems.filter(
          item => item.subcategoryArr.slug === brandSlug
        );
      } else {
        sortedItems = allItems;
      }
      // console.log("[Context.js] getDataItems > items...", items);

      ////////////
      // FILTER // properties based on items
      ////////////
      // Price (2 dropdowns)
      let minPrice = 0; //Math.min(...items.map(item => item.price));
      let maxPrice = Math.max(...items.map(item => item.price));
      const maxPriceInit = Math.round((maxPrice / 100000).toFixed() * 100000);
      const priceRangeArr = SiteData.priceRangeArr; // [0, 5000, 10000, ...]
      // Year (2 numeric inputs)
      let minYear = Math.min(...items.map(item => item.year));
      let maxYear = Math.max(...items.map(item => item.year));
      const minYearInit = minYear;
      const maxYearInit = maxYear;
      // Brand (dropdown)
      const brandArr = this.setBrandArr(items);
      const categoryArr = this.getCategoryArr(categoryName, statusId);
      setDocumentTitle(categoryArr.title);
      //////////
      // SORT // options based on items page type
      //////////
      // Sort (dropdown)
      let sortRangeArr = [];
      sortRangeArr.push(SortFilterRangeData.DateDesc);
      sortRangeArr.push(SortFilterRangeData.DateAsc);
      // CONDITION: Only show price option for Live pages
      if (categoryName === "Live") {
        sortRangeArr.push(SortFilterRangeData.PriceDesc);
        sortRangeArr.push(SortFilterRangeData.PriceAsc);
      }
      // CONDITION: Only show Years option for Live/Archive pages
      if (isStockPage) {
        sortRangeArr.push(SortFilterRangeData.YearDesc);
        sortRangeArr.push(SortFilterRangeData.YearAsc);
      }
      // console.log("[Context.js] sortRangeArr...", sortRangeArr);
      const sortByArr = sortRangeArr[0];
      const sortBy = sortByArr.name;

      ///////////////
      // SET STATE //
      ///////////////
      this.setState({
        items,
        categoryName,
        categoryArr,
        brand,
        brandArr,
        sortedItems,
        loading: false,
        price: maxPrice,
        minPrice,
        maxPrice: maxPriceInit,
        maxPriceInit,
        minYear,
        minYearInit,
        maxYear,
        maxYearInit,
        priceRangeArr,
        sortBy,
        sortByArr,
        sortRangeArr
      });
    } catch (error) {
      console.log("[Context.js] getDataItems > error...", error);
    }
  };
  // (END) getDataItems

  componentDidMount() {
    // console.log(
    //   "[Context.js] componentDidMount()... category = " +
    //     this.state.categoryName
    // );
  }

  componentDidUpdate() {
    console.log(
      "[Context.js] componentDidUpdate() > categoryName = ",
      this.state.categoryName,
      " | brand = " + this.state.brand
    );
  }

  /////////////////////////////////////////////////////////////////////////// SET brand array (items)
  setBrandArr = myObj => {
    const myArr = { list: myObj }; //put obj array into list for flatMap
    const myUniqueBrandList = myArr.list
      .flatMap(obj => obj.subcategoryArr)
      .filter(
        (e, i, a) =>
          a.findIndex(({ id, brand }) => id === e.id && brand === e.brand) === i
      );

    // SORT alphabetically [A-Z]
    myUniqueBrandList.sort(function(a, b) {
      var nameA = a.brand.toLowerCase(),
        nameB = b.brand.toLowerCase();
      if (nameA < nameB)
        //sort string ascending
        return -1;
      if (nameA > nameB) return 1;
      return 0; //default return value (no sorting)
    });

    // COUNT items in subcategory
    let myUniqueBrandListWithCount = this.countItemsInBrand(
      myUniqueBrandList,
      myObj
    );
    myUniqueBrandListWithCount = [
      { id: "all", brand: "all", itemCount: myObj.length },
      ...myUniqueBrandListWithCount
    ];
    console.log(
      "[Context.js] myUniqueBrandList...",
      myUniqueBrandListWithCount
    );
    return myUniqueBrandListWithCount;
  };

  /////////////////////////////////////////////////////////////////////////// COUNT items in each brand
  countItemsInBrand(getBrandArr, getItemsArr) {
    for (var i = 0; i < getBrandArr.length; i++) {
      var tmp = getItemsArr.filter(
        item => item.subcategoryArr.id === getBrandArr[i].id
      ).length;
      getBrandArr[i].itemCount = tmp;
    }
    return getBrandArr;
  }

  /////////////////////////////////////////////////////////////////////////// SORT used by filter
  // REF: https://stackoverflow.com/questions/6913512/how-to-sort-an-array-of-objects-by-multiple-fields
  fieldSorter = fields => {
    return function(a, b) {
      return fields
        .map(function(o) {
          var dir = 1;
          if (o[0] === "-") {
            dir = -1;
            o = o.substring(1);
          }
          if (a[o] > b[o]) return dir;
          if (a[o] < b[o]) return -dir;
          return 0;
        })
        .reduce(function firstNonZeroValue(p, n) {
          return p ? p : n;
        }, 0);
    };
  };

  /////////////////////////////////////////////////////////////////////////// FORMAT item data
  formatData(getItemsData) {
    let tempItems = getItemsData.map(dataItem => {
      let id = dataItem.id;
      let name = dataItem.name;
      let slug = dataItem.slug;
      let status = dataItem.status;
      let category = dataItem.category;
      let categoryArr = this.getCategoryArr(category, dataItem.status);
      let subcategoryArr = dataItem.catalogue_subcat;
      let price = dataItem.price;
      let price_details = dataItem.price_details;
      let brand = dataItem.brand;
      let year = dataItem.year;
      let date = dataItem.createdAt;
      let image = `https://via.placeholder.com/150x110`; // `http://localhost:8080/csc2020-img/images/${dataItem.image}`;
      // let image = `http://www.classicandsportscar.ltd.uk/images_catalogue/${dataItem.image}`;
      let item = {
        id,
        status,
        category,
        categoryArr,
        subcategoryArr,
        name,
        slug,
        brand,
        price,
        price_details,
        year,
        image,
        date
      };
      return item;
    });
    return tempItems;
  }

  /////////////////////////////////////////////////////////////////////////// FORMAT price
  formatPrice = price => {
    return price
      ? "£" + price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : null;
  };

  /////////////////////////////////////////////////////////////////////////// FORMAT category link
  // get slug from CatData based on categoryName
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

  /////////////////////////////////////////////////////////////////////////// FORMAT brand link
  // get slug from CatData based on categoryName
  formatBrandLink = (getCategoryName, getBrandSlug) => {
    let apprendUrl = getCategoryName === "Archive" ? "_sold" : "_for-sale";
    let slug = getBrandSlug + apprendUrl;
    // console.log(
    //   "[Context.js] formatBrandLink > slug...",
    //   slug,
    //   getCategoryName,
    //   getBrandSlug
    // );
    return slug;
  };

  /////////////////////////////////////////////////////////////////////////// LOAD data (items)
  // get all category data from CatData
  getCategoryArr = (getCategoryName, getItemStatus) => {
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
    //   "[Context.js] getCategoryArr > getCategoryName...",
    //   getCategoryName + ", getItemStatus: " + getItemStatus
    // );
    return CatData[itemCategoryName];
  };

  /////////////////////////////////////////////////////////////////////////// FORMAT item link
  // [domain]/item-slug/category-slug/item-id
  formatItemLink = getItem => {
    let { id, name, slug, status, category } = getItem;
    // console.log("??? item category: ", category);
    let itemSlug = slug;
    if (!slug) itemSlug = slugify(name, { lower: true });
    let itemLink = `/${itemSlug}`;
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

  /////////////////////////////////////////////////////////////////////////// STYLE append class
  // accept default class (getDefault) ... append with any additional classes (getAppend)
  // EXAMPLE: let classControl = styleAppendClass("form-control", "form-control-sm");
  styleAppendClass = (getDefault, getAppend) => {
    let classArr = [];
    classArr.push(getDefault);
    if (getAppend) {
      classArr.push(getAppend);
    }
    let allClasses = classArr.join(" ");
    return allClasses;
  };

  /////////////////////////////////////////////////////////////////////////// FILTER items
  handleFilterChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;
    // const value = event.target.value;
    // console.log("[Context.js] handleFilterChange > this is type..." + type);
    console.log("[Context.js] handleFilterChange > " + name + " = " + value);
    // console.log("[Context.js] handleFilterChange > this is value..." + value);
    this.setState(
      {
        [name]: value
      },
      this.filterItems
    );
  };

  /////////////////////////////////////////////////////////////////////////// FILTER
  // show/hide filter row
  setFilterToggle = () => {
    this.setState({ showFilter: this.state.showFilter ? false : true });
  };
  // filter items
  filterItems = () => {
    console.log("[Context.js] filterItems...");
    let {
      items,
      categoryName,
      brand,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      sortBy,
      sortRangeArr
    } = this.state;

    // all the items
    let sortedItems = [...items];
    // filter by brand
    if (brand && brand !== "all") {
      // console.log("[Context.js] filterItems() > BRAND CHANGED", brand);
      sortedItems = sortedItems.filter(item => item.brand === parseInt(brand));
    }
    // filter by price and year
    sortedItems =
      categoryName === "Live"
        ? sortedItems
            .filter(item => item.price >= minPrice && item.price <= maxPrice)
            .filter(item => item.year >= minYear && item.year <= maxYear)
        : sortedItems;

    const sortByArr = sortRangeArr.find(item => item.name === sortBy);
    // console.log("[Context.js] filterItems > sortByArr...", sortBy, sortByArr);
    const field = sortByArr.field;
    const field2 = sortByArr.field2;
    sortedItems.sort(this.fieldSorter([field, field2]));
    console.log("[Context.js] filterItems > sortedItems...", sortedItems);

    ///////////////
    // SET STATE //
    ///////////////
    this.setState({
      sortedItems
    });
  };

  render() {
    return (
      <ItemContext.Provider
        value={{
          ...this.state,
          getItem: this.getItem,
          getData: this.getData,
          getDataItems: this.getDataItems,
          getCategoryArr: this.getCategoryArr,
          formatPrice: this.formatPrice,
          formatItemLink: this.formatItemLink,
          formatCategoryLink: this.formatCategoryLink,
          setBrandArr: this.setBrandArr,
          setFilterToggle: this.setFilterToggle,
          fieldSorter: this.fieldSorter,
          handleFilterChange: this.handleFilterChange,
          styleAppendClass: this.styleAppendClass,
          formatBrandLink: this.formatBrandLink
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
