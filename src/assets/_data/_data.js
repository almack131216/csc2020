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
      url: "/",
      navTop: false,
      navSide: false
    },
    {
      id: "ClassicCarsForSale",
      title: CatData[2].title,
      url: CatData[2].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "ClassicCarsSold",
      title: CatData[22].title,
      url: CatData[22].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "SellingAClassicCar",
      title: "Selling a Classic Car",
      url: "/selling-a-classic-car",
      navTop: true,
      navSide: true
    },
    {
      id: "ClassicCarTransportation",
      title: "Classic Car Transportation",
      url: "/classic-car-transportation",
      navTop: true,
      navSide: true
    },
    {
      id: "CustomerTestimonials",
      title: CatData[3].title,
      url: CatData[3].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "PressMedia",
      title: CatData[4].title,
      url: CatData[4].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "LatestNewsEvents",
      title: CatData[5].title,
      url: CatData[5].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "RegistrationNumbers",
      title: "Registration Numbers",
      url: "/registration-numbers",
      navTop: true,
      navSide: true
    },
    {
      id: "RequestCar",
      title: "Request a Car",
      url: "/request-a-classic-cars",
      navTop: true,
      navSide: true
    },
    {
      id: "AutomotiveBodyPaint",
      title: "Automotive Body & Paint",
      url: "/restoration",
      navTop: true,
      navSide: true
    },
    {
      id: "FilmTVHire",
      title: "Film & TV Hire",
      url: "/film-tv-hire",
      navTop: true,
      navSide: true
    },
    {
      id: "contact",
      title: "Contact",
      url: "#contact",
      navTop: true,
      navSide: true
    }
  ]
};

export default navArray;
