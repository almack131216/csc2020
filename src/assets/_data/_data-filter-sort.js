const sortFilterRangeArr = {
  DateDesc: {
    name: "DateDesc",
    label: "Date (latest)",
    field: "-createdAt",
    field2: ""
  },
  DateAsc: {
    name: "DateAsc",
    label: "Date (oldest)",
    field: "createdAt",
    field2: ""
  },
  PriceDesc: {
    name: "PriceDesc",
    label: "Price (high-low)",
    field: "-price",
    field2: ""
  },
  PriceAsc: {
    name: "PriceAsc",
    label: "Price (low-high)",
    field: "price",
    field2: ""
  },
  YearDesc: {
    name: "YearDesc",
    label: "Year (new-old)",
    field: "-year",
    field2: ""
  },
  YearAsc: {
    name: "YearAsc",
    label: "Year (old-new)",
    field: "year",
    field2: ""
  }
};

export default sortFilterRangeArr;
