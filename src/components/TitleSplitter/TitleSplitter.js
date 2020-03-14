import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
/*
* USAGE:
<TitleSplitter categoryArr={catData["Archive"]} />
* OR: use custom values for 'See All' link
<TitleSplitter categoryArr={catData["Archive"]} seeAll={{ title: "All", slug: catData["Live"].slug }} />
*/

const TitleSplitter = props => {
  // console.log('[TitleSplitter.js]'...);
  const title = props.categoryArr ? props.categoryArr.title : props.title;
  const slug = props.categoryArr ? props.categoryArr.slug : null;
  const body = props.body ? props.body : null;
  let seeAll = props.seeAll ? props.seeAll : { ...props.categoryArr };
  if (slug && seeAll && !props.seeAll) seeAll.title = "See All";
  if (slug && seeAll && !seeAll.slug) seeAll.slug = props.categoryArr.slug;
  if (!slug) seeAll = {};

  const titleTag = seeAll.slug ? (
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
        {seeAll.slug ? (
          <div className="see-all">
            <Link to={seeAll.slug}>{seeAll.title}</Link>
          </div>
        ) : null}
      </div>
      {body ? <div className="body">{parse(body)}</div> : null}
    </div>
  );
};

export default TitleSplitter;
