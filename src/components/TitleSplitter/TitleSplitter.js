import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { FaYoutube } from "react-icons/fa";

/*
* USAGE:
<TitleSplitter titleArr={catData["Archive"]} />
* OR: use custom values for 'See All' link
<TitleSplitter titleArr={{ title: "Classic & Sportscar Centre", slug: "/about", seeAll: true }} seeAllArr={{ title: "All", slug: catData["Live"].slug }} />
*/

const TitleSplitter = props => {
  // console.log("[TitleSplitter]...", props.seeAllArr);
  const icon = props.titleArr.icon ? props.titleArr.icon : null;
  const title = props.titleArr.title ? props.titleArr.title : null;
  const slug = props.titleArr.slug ? props.titleArr.slug : null;
  const body = props.titleArr.text ? props.titleArr.text : null;

  let seeAllTitle = props.seeAllArr ? props.seeAllArr.title : null;
  let seeAllSlug =
    props.seeAllArr && props.seeAllArr.slug ? props.seeAllArr.slug : null;
  if (props.titleArr.seeAll) {
    seeAllTitle = "See All";
    seeAllSlug = slug;
  }
  // if (!slug) seeAll = {};

  const titleTag = slug ? (
    <Link to={slug}>
      {
        icon === "videos" && <FaYoutube /> 
      }           
      <h2>{title}</h2>
    </Link>
  ) : (
    title
  );

  return (
    <div className="title_splitter_wrap margin-top-0">
      <div className="title-wrap">
        <div className={`title${icon ? ` icon icon--${icon}` : ''}`}>{titleTag}</div>
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
