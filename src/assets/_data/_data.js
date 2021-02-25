import NavArray from "./_data-navigation";

const siteData = {
  root: "/",
  date: "200101",
  titleDocument: process.env.REACT_APP_DOC_TITLE,
  brand: {
    name: "Classic & Sportscar Centre",
    strapline: "Celebrating 30 Years in Business",
    straplineXXX: "Selling classic cars worldwide for 30 years"
  },
  priceRangeArr: [0, 5000, 10000, 20000, 30000, 40000, 100000],
  featuredItems: {
    itemCount: 7
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
    NavArray.restoration,
    NavArray.selling,
    NavArray.storage,
    NavArray.transportation,
    NavArray.testimonials,
    NavArray.press,
    NavArray.news,
    NavArray.plates,
    NavArray.request,    
    NavArray.filmTvHire,
    NavArray.contact
  ],
  navigationFooter: {
    columnA: [
      NavArray.live,
      NavArray.archive,
      NavArray.selling,
      NavArray.transportation,
      NavArray.storage,
    ],
    columnB: [
      NavArray.restoration,
      NavArray.testimonials,
      NavArray.press,
      NavArray.news
    ],
    columnC: [
      NavArray.contact,
      NavArray.contactMap,
      NavArray.privacyPolicy
    ]
  }
};

export default siteData;
