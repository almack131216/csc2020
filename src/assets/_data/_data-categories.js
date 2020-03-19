const catArray = {
  General: {
    id: 1,
    name: "General",
    title: "General",
    titleHover: "Link to our classic car showroom page",
    titleDocument: "Classic Cars For Sale in Malton, North Yorkshire",
    slug: "/",
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Homepage`
  },
  Live: {
    id: 2,
    name: "Live",
    title: "Classic Cars For Sale",
    titleHover: "Link to our classic car showroom page",
    titleDocument: "Classic Cars For Sale in Malton, North Yorkshire",
    slug: "/classic-cars-for-sale",
    apiJson: "./api-dummy/dummy-for-sale.json",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Live`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Live`,
    apiItem: "./api-dummy/dummy-item-details.json",
    settings: {
      showFilter: false,
      showBrandList: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: false,
      showTitleSub: false,
      layout: "grid accent",
      item: {
        layout: "item-card accent",
        showPrice: true,
        showRibbons: true,
        showYear: true,
        showCategoryLink: true,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Archive: {
    id: 2,
    name: "Archive",
    title: "Classic Cars Sold",
    titleHover: "Link to archive showing cars sold over the years",
    titleDocument:
      "Classic Cars Sold by Classic and Sportscar Centre, Malton, North Yorkshire",
    slug: "/classic-car-archive",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Archive`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Archive`,
    settings: {
      showFilter: false,
      showBrandList: true,
      showWidgetOpeningHours: false,
      showWidgetContactDetails: false,
      showTitle: false,
      showTitleSub: false,
      layout: "grid accent",
      item: {
        layout: "item-card accent",
        showPrice: true,
        showRibbons: true,
        showYear: true,
        showCategoryLink: true,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Testimonials: {
    id: 3,
    name: "Testimonials",
    title: "Customer Testimonials",
    titleSub: "Read what our customers have to say",
    titleHover: "Link to our customer comments page",
    titleDocument:
      "Customer Testimonials | Read what our customers have to say",
    slug: "/testimonials",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Testimonials`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "row",
      classContainer: "",
      item: {
        layout: "item-row",
        showExcerpt: true,
        showCategoryLink: false,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Press: {
    id: 4,
    name: "Press",
    title: "Press / Media",
    titleSub: "Classic and Sportscar Centre Magazine Articles",
    titleHover: "Link to press & media articles",
    titleDocument: "Press / Media",
    slug: "/press",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Press`,
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
        layout: "item-row",
        showExcerpt: true,
        showSource: true,
        showCategoryLink: false,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  News: {
    id: 5,
    name: "News",
    title: "Latest News & Events",
    titleHover: "Link to news stories, past and present",
    titleDocument: "Classic and Sportscar Centre News",
    slug: "/news",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=News`,
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
        layout: "item-row",
        showExcerpt: true,
        showCategoryLink: false,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  PageText: {
    id: 7,
    name: "PageText",
    title: "",
    slug: "/",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      item: {
        showCategoryLink: false,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  History: {
    id: 10,
    name: "History",
    title: "History: 1991-2011",
    titleSub: "Thanks to all our customers over the years",
    titleHover: "Link to our history page",
    titleDocument: "History: 1991-2011",
    text:
      "April 4th 1991 was the date of incorporation of our company, previously known as Grundy Mack. We began trading at the height of the last recession, and we’re busy trading through another. As long as there are men and women with a love of nostalgia and old cars, there will always be a business in buying and selling them. But it’s been much more than a business – more a way of life.",
    slug: "/history",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=History`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "row",
      classContainer: "",
      item: {
        layout: "item-row",
        showExcerpt: true,
        showCategoryLink: false,
        details: {
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  }
};

export default catArray;
