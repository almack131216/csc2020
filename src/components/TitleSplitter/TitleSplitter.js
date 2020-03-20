import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
/*
* USAGE:
<TitleSplitter titleArr={catData["Archive"]} />
* OR: use custom values for 'See All' link
<TitleSplitter titleArr={{ title: "Classic & Sportscar Centre", slug: "/about" }} seeAllArr={{ title: "All", slug: catData["Live"].slug }} />
*/

const TitleSplitter = props => {
  console.log("[TitleSplitter.js]...", props.seeAllArr);
  const title = props.titleArr.title ? props.titleArr.title : null;
  const slug = props.titleArr.slug ? props.titleArr.slug : null;
  const body = props.titleArr.body ? props.titleArr.body : null;
  
  const seeAllTitle = props.seeAllArr ? props.seeAllArr.title : "See All";
  const seeAllSlug = props.seeAllArr && props.seeAllArr.slug ? props.seeAllArr.slug : slug;
  // if (!slug) seeAll = {};

  const titleTag = seeAllSlug ? (
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
  ) : (
    title
  );

  return (
    <div className="title_splitter_wrap margin-top-0">
      <div className="title-wrap">
        <div className="title">{titleTag}</div>
        <span className="spacer-line" />
        {seeAllSlug ? (
          <div className="see-all">
            <Link to={seeAllSlug}>{seeAllTitle}</Link>
          </div>
        ) : null}
      </div>
      {body ? <div className="body">{parse(body)}</div> : null}
    </div>
  );
};

export default TitleSplitter;
