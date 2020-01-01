const sortFilterRangeArr = {
  DateDesc: {
    name: "DateDesc",
    label: "Date DESC",
    field: "-createdAt",
    field2: ""
  },
  DateAsc: {
    name: "DateAsc",
    label: "Date ASC",
    field: "createdAt",
    field2: ""
  },
  PriceDesc: {
    name: "PriceDesc",
    label: "Price DESC",
    field: "-price",
    field2: ""
  },
  PriceAsc: {
    name: "PriceAsc",
    label: "Price ASC",
    field: "price",
    field2: ""
  },
  YearDesc: {
    name: "YearDesc",
    label: "Year DESC",
    field: "-year",
    field2: ""
  },
  YearAsc: { name: "YearAsc", label: "Year ASC", field: "year", field2: "" }
};

export default sortFilterRangeArr;
