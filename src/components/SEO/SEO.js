import React, {useEffect} from "react";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { setMetaTagImageCard, setMetaDesc, ConsoleLog } from "../../assets/js/Helpers";

const DEFAULT_NAME = "Classic & Sportscar Centre";
const DEFAULT_TYPE = "article";

const DOMAIN = "https://classicandsportscar.ltd.uk";
const MAIN_KEYWORDS = "Classic Cars For Sale, Sports Cars For Sale";

const DEFAULT_IMAGE_CARD = "https://classicandsportscar.ltd.uk/logo512.png";
const DEFAULT_TITLE = "Classic & Sportscar Centre";
const DEFAULT_DESCRIPTION =
  "Selling classic cars worldwide for 30 years. All our cars come fully prepared from our in-house workshop and are fully inspected prior to collection or delivery.";

// const FAVICON_SOURCE = "https://classicandsportscar.ltd.uk/favicon.ico";

const POSTFIX_TITLE = " | Classic & Sportscar Centre";

const SEO = ({
  title,
  description,
  link,
  type,
  keywords,
  imageCard,
  largeTwitterCard = false,
  addPostfititle = false,
  noIndex = false,
  children = null,
}) => {

  let metaTitle;

  if (addPostfititle) {
    metaTitle = title + POSTFIX_TITLE;
  } else {
    metaTitle = title;
  }

  const metaName = DEFAULT_NAME;
  const metaType = type ? type : DEFAULT_TYPE;
  const metaDesc = description ? description.replace(/<[^>]+>/g, '') : DEFAULT_DESCRIPTION;
  const metaDescLite = metaDesc ? setMetaDesc(metaDesc) : "Supplying classic cars worldwide for over 30 years";
  const metaLink = window.location.href; //.replace("http://localhost:3000/","https://classicandsportscar.ltd.uk/");

  const metaKeywords =
    keywords && keywords.length
      ? MAIN_KEYWORDS + ", " + keywords
      : MAIN_KEYWORDS;

  let metaImageCard;

  if (imageCard) {
    if (imageCard.startsWith("https")) {
      metaImageCard = imageCard;
    } else {
      metaImageCard = DOMAIN + imageCard;
    }
  } else {
    metaImageCard = DEFAULT_IMAGE_CARD;
  }

  
  // useEffect
  useEffect(() => {
    ConsoleLog("[SEO useEffect]");
    setMetaTagImageCard(metaImageCard);
  }, [metaImageCard]);
  // (END) useEffect

  const metaRobots = noIndex ? "noindex, nofollow" : "index, follow";

  // const twitterCardType = largeTwitterCard ? "summary_large_image" : "summary";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescLite} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaLink} />
      <meta name="robots" content={metaRobots} />
      {/* End standard metadata tags */}
      {/* OG Tags */}
      {/* https://ogp.me/ */}
      <meta property="og:url" content={metaLink} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescLite} />
      <meta property="og:type" content={metaType} />
      <meta property="og:site_name" content={metaName} />
      {/* <meta property="og:image" content={metaImageCard} /> */}
      {/* End Facebook tags */}

      {/* https://moz.com/blog/meta-referrer-tag */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      {children}
    </Helmet>
  );
};

Helmet.defaultProps = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  link: DOMAIN,
  imageCard: DEFAULT_IMAGE_CARD,
  largeTwitterCard: false,
  addPostfititle: false,
  noIndex: false,
  children: null,
  keywords: "",
};

Helmet.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string.isRequired,
  keywords: PropTypes.string,
  imageCard: PropTypes.string,
  largeTwitterCard: PropTypes.bool,
  addPostfititle: PropTypes.bool,
  noIndex: PropTypes.bool,
  children: PropTypes.node,
};

export default SEO;
