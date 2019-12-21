import React, { Component } from "react";
// import Data from "./data";
import Client from "./Contentful";

const ItemContext = React.createContext();
//
export default class ItemProvider extends Component {
  state = {
    items: [],
    sortedItems: [],
    featuredItems: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoomExample",
        // order: "sys.createdAt"
        order: "-fields.price"
      });
      console.log("[Context.js] getData > success!");

      let items = this.formatData(response.items);
      console.log("[Context.js] items...", items);
      let featuredItems = items.filter(item => item.featured === true);

      let maxPrice = Math.max(...items.map(item => item.price));
      let maxSize = Math.max(...items.map(item => item.size));

      this.setState({
        items,
        featuredItems,
        sortedItems: items,
        loading: false,
        price: maxPrice,
        maxPrice: maxPrice,
        maxSize: maxSize
      });
    } catch (error) {
      console.log("[Context.js] getData > error...", error);
    }
  };
  // getData
  componentDidMount() {
    this.getData();
  }

  formatData(Data) {
    let tempItems = Data.map(dataItem => {
      let id = dataItem.sys.id;
      let images = dataItem.fields.images.map(image => image.fields.file.url);
      let item = { ...dataItem.fields, images, id };
      return item;
    });
    return tempItems;
  }

  getItem = slug => {
    let tempItems = [...this.state.items];

    const item = tempItems.find(item => item.slug === slug);
    return item;
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
    let {
      items,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    // all the rooms
    let tmpItems = [...items];
    // transform values
    capacity = parseInt(capacity);
    // filter by type
    if (type !== "all") {
      tmpItems = tmpItems.filter(item => item.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tmpItems = tmpItems.filter(item => item.capacity >= capacity);
    }

    // filter by price
    tmpItems = tmpItems.filter(item => item.price <= price);

    // filter by size
    tmpItems = tmpItems.filter(
      item => item.size >= minSize && item.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tmpItems = tmpItems.filter(item => item.breakfast === true);
    }

    // filter by size
    if (pets) {
      tmpItems = tmpItems.filter(item => item.pets === true);
    }

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
