import CatData from "./_data-categories";

const navArray = {
  home: {
    title: "Homepage",
    titleHover: "Link to the Classic and Sportscar Centre homepage",
    titleDocument: process.env.REACT_APP_DOC_TITLE,
    slug: "/",
    navTop: false,
    navSide: true,
    class: "home"
  },
  live: {
    title: CatData["Live"].title,
    titleHover: CatData["Live"].titleHover,
    titleDocument: CatData["Live"].titleDocument,
    slug: CatData["Live"].slug,
    navTop: false,
    navSide: true
  },
  archive: {
    title: CatData["Archive"].title,
    titleHover: CatData["Archive"].titleHover,
    titleDocument: CatData["Archive"].titleDocument,
    slug: CatData["Archive"].slug,
    navTop: false,
    navSide: true
  },
  selling: {
    title: "Selling a Classic Car",
    titleSub:
      "We offer two types of service for prospective sellers, outright purchase or sale by brokerage.",
    titleHover: "Link to seller page, we can help you sell your classic car",
    titleDocument: "Selling Your Classic Car",
    slug: "/selling-a-classic-car",
    navTop: false,
    navSide: true
  },
  transportation: {
    title: "Classic Car Transportation",
    titleHover:
      "Link to transport services page - we can help transport your classic car",
    titleDocument: "Car Transport Services",
    slug: "/classic-car-transportation",
    navTop: false,
    navSide: true
  },
  testimonials: {
    title: CatData["Testimonials"].title,
    titleHover: CatData["Testimonials"].titleHover,
    titleDocument: CatData["Testimonials"].titleDocument,
    slug: CatData["Testimonials"].slug,
    navTop: false,
    navSide: true
  },
  press: {
    title: CatData["Press"].title,
    titleHover: CatData["Press"].titleHover,
    titleDocument: CatData["Press"].titleDocument,
    slug: CatData["Press"].slug,
    navTop: false,
    navSide: true
  },
  news: {
    title: CatData["News"].title,
    titleHover: CatData["News"].titleHover,
    titleDocument: CatData["News"].titleDocument,
    slug: CatData["News"].slug,
    navTop: false,
    navSide: true
  },
  plates: {
    title: "Registration Numbers",
    titleSub: "All reasonable offers considered",
    titleHover: "Link to see private plates we have in stock",
    titleDocument: "Retained Registration Numbers",
    slug: "/registration-numbers",
    navTop: false,
    navSide: true
  },
  request: {
    title: "Request a Car",
    titleHover:
      "Link to register your specific requirements and we will help you find one",
    titleDocument: "Request a Car",
    slug: "/request-a-classic-car",
    navTop: false,
    navSide: true
  },
  restoration: {
    title: "Automotive Body & Paint",
    titleHover: "Link to Malton Coachworks",
    titleDocument: "Restoration Services",
    slug: "/restoration",
    navTop: false,
    navSide: true
  },
  filmTvHire: {
    title: "Film & TV Hire",
    titleHover: "Link to Film & TV Hire page",
    titleDocument: "Film & TV Hire",
    slug: "/film-tv-hire",
    navTop: false,
    navSide: true
  },
  contact: {
    title: "Contact",
    titleHover: "Link to the Classic and Sportscar Centre contact page",
    titleDocument:
      "Contact Classic and Sportscar Centre, Malton, North Yorkshire, UK",
    slug: "/contact",
    navTop: true,
    navSide: true,
    class: "contact"
  },
  contactMap: {
    title: "Find us on Google Map",
    titleHover: "Link to Google Maps in a new window",
    titleDocument: "",
    url: "https://goo.gl/maps/VeDEpYUZjzB2",
    target: "_blank",
    navTop: false,
    navSide: true
  }
};

export default navArray;
