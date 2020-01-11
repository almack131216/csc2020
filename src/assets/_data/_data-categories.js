const catArray = {
  Live: {
    id: 2,
    title: "Classic Cars For Sale",
    titleHover: "Link to our classic car showroom page",
    titleDocument: "Classic Cars For Sale in Malton, North Yorkshire",
    slug: "/classic-cars-for-sale",
    api: "./api-dummy/dummy-for-sale.json",
    apiFeatured: "./api-dummy/dummy-for-sale.json",
    settings: {
      showFilter: true,
      showBrandList: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: false,
      showTitleSub: false,
      layout: "grid accent",
      item: {
        showPrice: true,
        showRibbons: true,
        showYear: true
      }
    }

    // api: `http://localhost:8080/_batch-scripts/csc/dummy.json `,
    // apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale`,
    // apiXXX:
    //   "http://localhost:8080/_batch-scripts/csc/index.php?api=items&spec=for-sale"
    // apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/for-sale/featured`
  },
  Archive: {
    id: 2,
    title: "Classic Cars Sold",
    titleHover: "Link to archive showing cars sold over the years",
    titleDocument:
      "Classic Cars Sold by Classic and Sportscar Centre, Malton, North Yorkshire",
    slug: "/classic-car-archive",
    api: "./api-dummy/dummy-sold.json",
    apiFeatured: "./api-dummy/dummy-sold.json",
    settings: {
      showFilter: true,
      showBrandList: true,
      showWidgetOpeningHours: false,
      showWidgetContactDetails: false,
      showTitle: false,
      showTitleSub: false,
      layout: "grid accent",
      item: {
        showPrice: true,
        showRibbons: true,
        showYear: true
      }
    }
    // apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/sold`,
    // apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}items/sold/featured`
  },
  Testimonials: {
    id: 3,
    title: "Customer Testimonials",
    titleSub: "Read what our customers have to say",
    titleHover: "Link to our customer comments page",
    titleDocument:
      "Customer Testimonials | Read what our customers have to say",
    slug: "/testimonials",
    api: "./api-dummy/dummy-testimonials.json",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "row",
      item: {
        showExcerpt: true
      }
    }
  },
  Press: {
    id: 4,
    title: "Press / Media",
    titleSub: "Classic and Sportscar Centre Magazine Articles",
    titleHover: "Link to press & media articles",
    titleDocument: "Press / Media",
    slug: "/press",
    api: "./api-dummy/dummy-press.json",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      classContainer: "press",
      layout: "row",
      item: {
        showExcerpt: true,
        showSource: true
      }
    }
    // apiXXX: `${process.env.REACT_APP_API_ENDPOINT}items/press`
  },
  News: {
    id: 5,
    title: "Latest News & Events",
    titleHover: "Link to news stories, past and present",
    titleDocument: "Classic and Sportscar Centre News",
    slug: "/news",
    api: "./api-dummy/dummy-news.json",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      classContainer: "",
      layout: "row",
      item: {
        showExcerpt: true
      }
    }
  }
};

export default catArray;
