const catArray = {
  Live: {
    id: 2,
    title: "Classic Cars For Sale",
    slug: "/classic-cars-for-sale",
    api: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale/featured`
  },
  Archive: {
    id: 2,
    title: "Classic Cars Sold",
    slug: "/classic-car-archive",
    api: `${process.env.REACT_APP_API_ENDPOINT}items/sold`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/sold/featured`
  },
  Testimonials: {
    id: 3,
    title: "CustomerTestimonials",
    slug: "/testimonials"
  },
  Press: {
    id: 4,
    title: "Press / Media",
    slug: "/press"
  },
  News: {
    id: 5,
    title: "Latest News & Events",
    slug: "/news"
  },
  Plates: {
    id: 6,
    title: "Plates",
    slug: "/plates"
  },
  PageText: {
    id: 7,
    title: "Page Text",
    slug: "/text"
  },
  Links: {
    id: 8,
    title: "XXX",
    slug: "/xxx"
  },
  Carousel: {
    id: 9,
    title: "XXX",
    slug: "/xxx"
  },
  History: {
    id: 10,
    title: "XXX",
    slug: "/xxx"
  }
};

export default catArray;
