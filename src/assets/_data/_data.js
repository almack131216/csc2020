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
      title: CatData[2].title,
      slug: CatData[2].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "ClassicCarsSold",
      title: CatData[22].title,
      slug: CatData[22].slug,
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
      title: CatData[3].title,
      slug: CatData[3].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "PressMedia",
      title: CatData[4].title,
      slug: CatData[4].slug,
      navTop: true,
      navSide: true
    },
    {
      id: "LatestNewsEvents",
      title: CatData[5].title,
      slug: CatData[5].slug,
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
