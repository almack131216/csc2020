import NavArray from "./_data-navigation";

const siteData = {
  date: "200101",
  brand: {
    name: "Classic & Sportscar Centre",
    strapline: "Selling classic cars worldwide for over 25 years"
  },
  priceRangeArr: [0, 5000, 10000, 20000, 30000, 40000, 100000],
  featuredItems: {
    count: 8
  },
  contact: {
    slug: NavArray.contact.slug,
    email: "sales(at)classicandsportscar.ltd.uk",
    telephone: "01944 758000",
    copyright: "Copyright &copy; Classic & Sportscar Centre 2020",
    address: "Corner Farm, West Knapton, Malton, North Yorkshire, UK, YO17 8JB"
  },
  social: {
    facebook: "https://www.facebook.com/classicandsportscarcentre/",
    instagram: "https://www.instagram.com/classicandsportscar_centre/",
    youtube: "https://www.youtube.com/channel/UCe47Y8zbsm1wJrb6H2LmKeA"
  },
  navigation: [
    NavArray.home,
    NavArray.live,
    NavArray.archive,
    NavArray.selling,
    NavArray.transportation,
    NavArray.press,
    NavArray.news,
    NavArray.plates,
    NavArray.request,
    NavArray.restoration,
    NavArray.filmTvHire,
    NavArray.contact
  ]
};

export default siteData;
