const catArray = {
  Live: {
    id: 2,
    title: "Classic Cars For Sale",
    titleHover: "Link to our classic car showroom page",
    titleDocument: "Classic Cars For Sale in Malton, North Yorkshire",
    slug: "/classic-cars-for-sale",
    api: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale/featured`
  },
  Archive: {
    id: 2,
    title: "Classic Cars Sold",
    titleHover: "Link to archive showing cars sold over the years",
    titleDocument:
      "Classic Cars Sold by Classic and Sportscar Centre, Malton, North Yorkshire",
    slug: "/classic-car-archive",
    api: `${process.env.REACT_APP_API_ENDPOINT}items/sold`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/sold/featured`
  },
  Testimonials: {
    id: 3,
    title: "Customer Testimonials",
    titleSub: "Read what our customers have to say",
    titleHover: "ink to our customer comments page",
    titleDocument:
      "Customer Testimonials | Read what our customers have to say",
    slug: "/testimonials"
  },
  Press: {
    id: 4,
    title: "Press / Media",
    titleSub: "Classic and Sportscar Centre Magazine Articles",
    titleHover: "Link to press & media articles",
    titleDocument: "Press / Media",
    slug: "/press"
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
