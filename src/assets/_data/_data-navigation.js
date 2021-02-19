import CatData from "./_data-categories";

const navArray = {
  home: {
    title: "Homepage",
    titleHover: "Link to the Classic & Sportscar Centre homepage",
    titleDocument: process.env.REACT_APP_DOC_TITLE,
    slug: "/",
    navTop: true,
    navSide: true,
    class: "home"
  },
  live: {
    title: CatData["Live"].title,
    titleHover: CatData["Live"].titleHover,
    titleDocument: CatData["Live"].titleDocument,
    slug: CatData["Live"].slug,
    navTop: true,
    navSide: true
  },
  archive: {
    title: CatData["Archive"].title,
    titleHover: CatData["Archive"].titleHover,
    titleDocument: CatData["Archive"].titleDocument,
    slug: CatData["Archive"].slug,
    navTop: true,
    navSide: true
  },
  restoration: {
    title: CatData["Restoration"].title,
    titleHover: CatData["Restoration"].titleHover,
    titleDocument: CatData["Restoration"].titleDocument,
    slug: CatData["Restoration"].slug,
    navTop: true,
    navSide: true
  },
  selling: {
    title: "Selling a Classic Car",
    titleSub:
      "We offer two types of service for prospective sellers, outright purchase or sale by brokerage.",
    titleHover: "Link to seller page, we can help you sell your classic car",
    titleDocument: "Selling Your Classic Car",
    slug: "/selling-a-classic-car",
    navTop: true,
    navSide: true
  },
  transportation: {
    title: "Classic Car Transportation",
    titleHover:
      "Link to transport services page - we can help transport your classic car",
    titleDocument: "Car Transport Services",
    slug: "/classic-car-transportation",
    navTop: true,
    navSide: true
  },
  testimonials: {
    title: CatData["Testimonials"].title,
    titleHover: CatData["Testimonials"].titleHover,
    titleDocument: CatData["Testimonials"].titleDocument,
    slug: CatData["Testimonials"].slug,
    navTop: true,
    navSide: true
  },
  press: {
    title: CatData["Press"].title,
    titleHover: CatData["Press"].titleHover,
    titleDocument: CatData["Press"].titleDocument,
    slug: CatData["Press"].slug,
    navTop: true,
    navSide: true
  },
  news: {
    title: CatData["News"].title,
    titleHover: CatData["News"].titleHover,
    titleDocument: CatData["News"].titleDocument,
    slug: CatData["News"].slug,
    navTop: true,
    navSide: true
  },
  plates: {
    title: "Registration Numbers",
    titleSub: "All reasonable offers considered",
    titleHover: "Link to see private plates we have in stock",
    titleDocument: "Retained Registration Numbers",
    slug: "/registration-numbers",
    navTop: true,
    navSide: true
  },
  request: {
    title: "Request a Car",
    titleHover:
      "Link to register your specific requirements and we will help you find one",
    titleDocument: "Request a Car",
    slug: "/request-a-classic-car",
    navTop: true,
    navSide: true
  },  
  filmTvHire: {
    title: "Film & TV Hire",
    titleHover: "Link to Film & TV Hire page",
    titleDocument: "Film & TV Hire",
    slug: "/film-tv-hire",
    navTop: true,
    navSide: true
  },
  contact: {
    title: "Contact",
    titleHover: "Link to the Classic & Sportscar Centre contact page",
    titleDocument:
      "Contact Classic & Sportscar Centre, Malton, North Yorkshire, UK",
    slug: "/contact",
    navTop: true,
    navSide: true,
    class: "contact"
  },
  contactMap: {
    title: "Google Map",
    titleHover: "Link to Google Maps in a new window",
    titleDocument: "",
    url: "https://goo.gl/maps/VeDEpYUZjzB2",
    target: "_blank",
    navTop: false,
    navSide: true
  },
  privacyPolicy: {
    title: "Privacy Policy",
    titleHover: "Link to the Classic & Sportscar Centre Privacy Policy page",
    titleDocument:
      "Privacy Policy",
    slug: "/privacy",
    navTop: false,
    navSide: false,
    class: ""
  }
};

export default navArray;
