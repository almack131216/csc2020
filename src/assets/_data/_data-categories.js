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
    slugAppendBrand: "/for-sale",
    // apiJson: "./api-dummy/dummy-for-sale.json",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Live`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Live`,
    // apiItem: "./api-dummy/dummy-item-details.json",
    settings: {
      showFilter: false,
      showBrandList: true,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: false,
      showTitleSub: false,
      layout: "grid accent",
      item: {
        layout: "item-card",
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
    titleSub: `Sold since 1st January 2020`,
    titleHover: "Link to archive showing cars sold over the years",
    titleDocument:
      "Classic Cars Sold by Classic & Sportscar Centre, Malton, North Yorkshire",
      text: `Since 1991 we've sold towards £100,000,000 of classic vehicles. To view 2500 sold vehicles since we started our archive in 2007 please <a href="/sold">click here</a>`,
    slug: "/classic-cars-sold",
    slugAppendBrand: "/sold", 
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Archive`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Archive`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "grid accent",
      item: {
        layout: "item-card",
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
    slugAppendBrand: "/testimonials",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Testimonials`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
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
          showWidgetYouTubeBtn: true,
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
    titleSub: "Classic & Sportscar Centre Magazine Articles",
    titleHover: "Link to press & media articles",
    titleDocument: "Press / Media",
    slug: "/press",
    slugAppendBrand: "/press",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Press`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
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
          showWidgetYouTubeBtn: true,
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
    titleDocument: "Classic & Sportscar Centre News",
    slug: "/news",
    slugAppendBrand: "/news",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=News`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
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
          showWidgetYouTubeBtn: true,
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Restoration: {
    id: 2,
    name: "Restoration",
    title: "Restoration Services",
    titleHover: "Link to our restoration services page",
    titleDocument: "Restoration Services",
    text: "Here at Classic & Sportscar Centre we also offer a wide range of classic car maintenance and restoration services. We can carry out all aspects of classic car bodywork and paint, upholstery and re-trimming work, and mechanical repairs to include engine and gearbox rebuilds, general servicing and maintenance, and of course full restoration. Please click the links below to read more information on each department and view our gallery of work which will be regularly updated with recent projects.",
    slug: "/restoration",
    slugAppendBrand: "/restoration",
    // apiJson: "./api-dummy/dummy-for-sale.json",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Restoration`,
    apiFeatured: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Restoration`,
    // apiItem: "./api-dummy/dummy-item-details.json",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "grid",
      item: {
        layout: "item-card",
        showPrice: false,
        showRibbons: false,
        showYear: false,
        showCategoryLink: false,
        details: {
          showWidgetYouTubeBtn: true,
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
    slug: "/page",
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      item: {
        showCategoryLink: false,
        details: {
          showWidgetYouTubeBtn: true,
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  History: {
    id: 10,
    name: "History",
    title: "History: 1991-Today",
    titleSub: "Thanks to all our customers over the years",
    titleHover: "Link to our history page",
    titleDocument: "History: 1991-Today",
    text: "April 4th 1991 was the date of incorporation of our company, previously known as Grundy Mack. We believe that as long as there are men and women with a love of nostalgia and old cars, there will always be a business in buying and selling them but for us it's been much more than a business – more a way of life.",
    slug: "/history",
    slugAppendBrand: "/history",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=History`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
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
          showWidgetYouTubeBtn: true,
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Videos: {
    id: 13,
    name: "Videos",
    title: "YouTube Videos",
    titleSub: "Classic & Sportscar Centre on YouTube",
    titleHover: "Link to our YouTube page",
    titleDocument: "",
    text: "",
    slug: "/videos",
    slugAppendBrand: "/videos",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Videos`,
    settings: {
      showFilter: false,
      showBrandList: false,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,      
      layout: "grid youtube",
      classContainer: "",
      item: {
        layout: "item-card",
        showExcerpt: false,
        showCategoryLink: false,
        details: {
          showWidgetYouTubeBtn: true,
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  },
  Staff: {
    id: 12,
    name: "Staff",
    title: "Meet the Team",
    titleSub: "",
    titleHover: "Link to our staff page",
    titleDocument: "Who are we?",
    text: "",
    slug: "/staff",
    slugAppendBrand: "/staff",
    api: `${process.env.REACT_APP_API_ENDPOINT}?api=items&spec=Staff`,
    settings: {
      showFilter: false,
      showBrandList: true,
      showWidgetYouTubeBtn: true,
      showWidgetOpeningHours: true,
      showWidgetContactDetails: true,
      showTitle: true,
      showTitleSub: true,
      layout: "grid",
      classContainer: "",
      postsPerPage: 30,
      item: {
        layout: "item-card staff",
        showSource: true,
        showExcerpt: false,
        showCategoryLink: true,
        details: {
          showWidgetYouTubeBtn: true,
          showWidgetOpeningHours: true,
          showWidgetContactDetails: true
        }
      }
    }
  }
};

export default catArray;
