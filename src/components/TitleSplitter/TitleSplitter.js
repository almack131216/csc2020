import React from "react";
import { Link } from "react-router-dom";
/*
* USAGE:
<TitleSplitter category={catData["Archive"]} />
* OR: use custom values for 'See All' link
<TitleSplitter category={catData["Archive"]} seeAll={{ title: "All", slug: catData["Live"].slug }} />
*/

const TitleSplitter = props => {
  //   const categoryArr = [{ ...props.category }];
  const title = props.category.title;
  const slug = props.category.slug;
  let seeAll = props.seeAll ? props.seeAll : { ...props.category };
  if (seeAll && !props.seeAll) seeAll.title = "See All";
  if (seeAll && !seeAll.slug) seeAll.slug = props.category.slug;

  return (
    <div className="title_splitter_wrap margin-top-0">
      <div className="title">
        <Link to={slug} className="a-title">
          <h2>{title}</h2>
        </Link>
      </div>
      {seeAll ? (
        <div className="see-all">
          <Link to={seeAll.slug} className="a-all">
            {seeAll.title}
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default TitleSplitter;
