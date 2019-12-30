import CatData from "./_data-categories";

const navArray = {
  home: {
    title: "Home",
    slug: "/",
    navTop: false,
    navSide: false
  },
  live: {
    title: CatData["Live"].title,
    slug: CatData["Live"].slug,
    navTop: true,
    navSide: true
  },
  archive: {
    title: CatData["Archive"].title,
    slug: CatData["Archive"].slug,
    navTop: true,
    navSide: true
  },
  selling: {
    title: "Selling a Classic Car",
    slug: "/selling-a-classic-car",
    navTop: true,
    navSide: true
  },
  transportation: {
    title: "Classic Car Transportation",
    slug: "/classic-car-transportation",
    navTop: true,
    navSide: true
  },
  testimonials: {
    title: CatData["Testimonials"].title,
    slug: CatData["Testimonials"].slug,
    navTop: true,
    navSide: true
  },
  press: {
    title: CatData["Press"].title,
    slug: CatData["Press"].slug,
    navTop: true,
    navSide: true
  },
  news: {
    title: CatData["News"].title,
    slug: CatData["News"].slug,
    navTop: true,
    navSide: true
  },
  plates: {
    title: "Registration Numbers",
    slug: "/registration-numbers",
    navTop: true,
    navSide: true
  },
  request: {
    title: "Request a Car",
    slug: "/request-a-classic-cars",
    navTop: true,
    navSide: true
  },
  restoration: {
    title: "Automotive Body & Paint",
    slug: "/restoration",
    navTop: true,
    navSide: true
  },
  filmTvHire: {
    title: "Film & TV Hire",
    slug: "/film-tv-hire",
    navTop: true,
    navSide: true
  },
  contact: {
    title: "Contact",
    slug: "/contact",
    navTop: true,
    navSide: true
  }
};

export default navArray;
