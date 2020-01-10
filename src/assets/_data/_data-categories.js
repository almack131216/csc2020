const catArray = {
  Live: {
    id: 2,
    layout: "grid accent",
    title: "Classic Cars For Sale",
    titleHover: "Link to our classic car showroom page",
    titleDocument: "Classic Cars For Sale in Malton, North Yorkshire",
    slug: "/classic-cars-for-sale",
    api: "./api-dummy/dummy-for-sale.json",
    apiFeatured: "./api-dummy/dummy-for-sale.json",
    // api: `http://localhost:8080/_batch-scripts/csc/dummy.json `,
    // apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale`,
    apiXXX:
      "http://localhost:8080/_batch-scripts/csc/index.php?api=items&spec=for-sale"
    // apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale/featured`
  },
  Archive: {
    id: 2,
    layout: "grid accent",
    title: "Classic Cars Sold",
    titleHover: "Link to archive showing cars sold over the years",
    titleDocument:
      "Classic Cars Sold by Classic and Sportscar Centre, Malton, North Yorkshire",
    slug: "/classic-car-archive",
    api: "./api-dummy/dummy-sold.json",
    apiFeatured: "./api-dummy/dummy-sold.json"
    // apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/sold`,
    // apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/sold/featured`
  },
  Testimonials: {
    id: 3,
    layout: "row",
    title: "Customer Testimonials",
    titleSub: "Read what our customers have to say",
    titleHover: "Link to our customer comments page",
    titleDocument:
      "Customer Testimonials | Read what our customers have to say",
    slug: "/testimonials"
  },
  Press: {
    id: 4,
    layout: "row",
    title: "Press / Media",
    titleSub: "Classic and Sportscar Centre Magazine Articles",
    titleHover: "Link to press & media articles",
    titleDocument: "Press / Media",
    slug: "/press",
    api: "./api-dummy/dummy-press.json",
    apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/press`
  },
  News: {
    id: 5,
    title: "Latest News & Events",
    titleHover: "Link to news stories, past and present",
    titleDocument: "Classic and Sportscar Centre News",
    slug: "/news"
  }
};

export default catArray;
