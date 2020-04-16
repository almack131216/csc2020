import NavArray from "./_data-navigation";

const siteData = {
  root: "/",
  date: "200101",
  titleDocument: process.env.REACT_APP_DOC_TITLE,
  brand: {
    name: "Classic & Sportscar Centre",
    strapline: "Selling classic cars worldwide for over 25 years"
  },
  priceRangeArr: [0, 5000, 10000, 20000, 30000, 40000, 100000],
  featuredItems: {
    itemCount: 8
  },
  pagination: {
    postsPerPage: 12
  },
  contact: {
    slug: NavArray.contact.slug,
    email: "sales(at)classicandsportscar.ltd.uk",
    telephone: "01944 758000",
    copyright: "Copyright &copy; Classic & Sportscar Centre 2020",
    address: "Corner Farm, West Knapton, Malton, North Yorkshire, UK, YO17 8JB",
    addressPrint:
      "Corner Farm, West Knapton<br>Malton, North Yorkshire, UK<br>YO17 8JB"
  },
  social: {
    facebook: "https://www.facebook.com/classicandsportscarcentre/",
    instagram: "https://www.instagram.com/classicandsportscar_centre/",
    youtube: "https://www.youtube.com/user/Classicandsportscar1/videos"
  },
  navigation: [
    NavArray.home,
    NavArray.live,
    NavArray.archive,
    NavArray.selling,
    NavArray.transportation,
    NavArray.testimonials,
    NavArray.press,
    NavArray.news,
    NavArray.plates,
    NavArray.request,
    NavArray.restoration,
    NavArray.filmTvHire,
    NavArray.contact
  ],
  navigationFooter: {
    columnA: [
      NavArray.live,
      NavArray.archive,
      NavArray.selling,
      NavArray.transportation
    ],
    columnB: [
      NavArray.restoration,
      NavArray.testimonials,
      NavArray.press,
      NavArray.news
    ],
    columnC: [NavArray.contact, NavArray.contactMap]
  }
};

export default siteData;
