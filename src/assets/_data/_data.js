import CatData from "./_data-categories";

const navArray = {
  date: "200101",
  brandName: "Classic & Sportscar Centre",
  strapline: "Selling classic cars worldwide for over 25 years",
  featuredItems: {
    count: 8
  },
  header: {
    img: {
      src: "/assets/images/logo-classic-and-sportscar-centre.gif",
      alt: "Classic & Sportscar Centre"
    }
  },
  contact: {
    id: "contact",
    name: "Classic & Sportscar Centre",
    email: "sales(at)amactive.net",
    telephone: "01944 758000",
    copyright: "Copyright &copy; Classic & Sportscar Centre 2020"
  },
  navigation: [
    {
      id: "home",
      title: "Home",
      slug: "/",
      navTop: false,
      navSide: false
    },
    {
      id: "ClassicCarsForSale",
      title: CatData["Live"].title,
      slug: CatData["Live"].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "ClassicCarsSold",
      title: CatData["Archive"].title,
      slug: CatData["Archive"].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "SellingAClassicCar",
      title: "Selling a Classic Car",
      slug: "/selling-a-classic-car",
      navTop: true,
      navSide: true
    },
    {
      id: "ClassicCarTransportation",
      title: "Classic Car Transportation",
      slug: "/classic-car-transportation",
      navTop: true,
      navSide: true
    },
    {
      id: "CustomerTestimonials",
      title: CatData["Testimonials"].title,
      slug: CatData["Testimonials"].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "PressMedia",
      title: CatData["Press"].title,
      slug: CatData["Press"].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "LatestNewsEvents",
      title: CatData["News"].title,
      slug: CatData["News"].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "RegistrationNumbers",
      title: "Registration Numbers",
      slug: "/registration-numbers",
      navTop: true,
      navSide: true
    },
    {
      id: "RequestCar",
      title: "Request a Car",
      slug: "/request-a-classic-cars",
      navTop: true,
      navSide: true
    },
    {
      id: "AutomotiveBodyPaint",
      title: "Automotive Body & Paint",
      slug: "/restoration",
      navTop: true,
      navSide: true
    },
    {
      id: "FilmTVHire",
      title: "Film & TV Hire",
      slug: "/film-tv-hire",
      navTop: true,
      navSide: true
    },
    {
      id: "contact",
      title: "Contact",
      slug: "#contact",
      navTop: true,
      navSide: true
    }
  ]
};

export default navArray;
