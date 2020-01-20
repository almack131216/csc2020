import React from "react";
import { Link } from "react-router-dom";
/*
* USAGE:
<TitleSplitter categoryArr={catData["Archive"]} />
* OR: use custom values for 'See All' link
<TitleSplitter categoryArr={catData["Archive"]} seeAll={{ title: "All", slug: catData["Live"].slug }} />
*/

const TitleSplitter = props => {
  // console.log('[TitleSplitter.js]'...);
  const title = props.categoryArr.title;
  const slug = props.categoryArr.slug;
  let seeAll = props.seeAll ? props.seeAll : { ...props.categoryArr };
  if (seeAll && !props.seeAll) seeAll.title = "See All";
  if (seeAll && !seeAll.slug) seeAll.slug = props.categoryArr.slug;

  return (
    <div className="title_splitter_wrap margin-top-0">
      <div className="title">
        <Link to={slug}>
          <h2>{title}</h2>
        </Link>
      </div>
      <span className="spacer-line" />
      {seeAll ? (
        <div className="see-all">
          <Link to={seeAll.slug}>{seeAll.title}</Link>
        </div>
      ) : null}
    </div>
  );
};

export default TitleSplitter;
