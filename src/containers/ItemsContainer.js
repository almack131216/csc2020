import React, { useState } from "react";
import parse from "html-react-parser";
import { Link, Redirect } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import TitleText from "../components/TitleText/TitleText";
import ItemsList from "../components/Items/ItemsList/ItemsList";
import Pagination from "../components/Pagination/Pagination";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading/Loading";
import Linkify from 'linkifyjs/react';// 2do - might not need when we lose /2020/ subdir

function ItemsContainer({ context }) {
  // console.log("[ItemsContainer.js] ...");
  //
  // INIT context
  const { categoryArr, siteData, loading, sortedItems, items, subcategoryArr } = context;
  // INIT appearance
  let catSettings = categoryArr.settings;
  let itemLayout = null; // LAYOUT items should be displayed in grid or row?
  let titlesComponent = null;
  let itemsFilterComponent = null;
  // INIT pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(siteData.pagination.postsPerPage);

  let title = null;
  let titleSub = null;
  // GET appearance
  if (catSettings) {
    itemLayout = catSettings.layout ? catSettings.layout : "grid";

    itemsFilterComponent = catSettings.showFilter ? (
      <ItemsFilter items={items} />
    ) : null;

    title = catSettings.showTitle ? categoryArr.title : null;
    titleSub = catSettings.showTitle ? categoryArr.titleSub : null;
    let text = catSettings.showTitle && categoryArr.text ? categoryArr.text : null;
      
    // LINKIFY - convert <a> tags to <Link> route tags
    // To view our full online archive, please go to our <a href="/2020/sold">sold</a>
    let textWithLinks = text ? <Linkify>{parse(text)}</Linkify> : null;
    // (END) LINKIFY

    // change title & text for the Archive pages when brand is selected
    if(categoryArr.name === "Archive" && subcategoryArr.brand){
      title = `${subcategoryArr.brand} Sold`;
      titleSub = '';
    }

    titlesComponent = title || titleSub ? <TitleText title={title} titleSub={titleSub} text={textWithLinks} /> : null;    
  }
  // PAGINATION
  // GET current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    sortedItems.length > postsPerPage
      ? sortedItems.slice(indexOfFirstPost, indexOfLastPost)
      : sortedItems;
  const showPagination = sortedItems.length > postsPerPage ? true : false;
  // CHANGE page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // (END) PAGINATION
  // SET breadcrumbs array
  let crumbsArr = [];
  if (categoryArr.name === "History") {
    let categorAboutArr = {
      title: "About Us",
      slug: "/about"
    };
    crumbsArr.push(categorAboutArr);
  }  
  categoryArr.class = categoryArr.name;
  crumbsArr.push(categoryArr);
  // Archive (brand selected)
  if (categoryArr.name === "Archive") {
    if(subcategoryArr.brand){
      let subcatArr = {
        title: subcategoryArr.brand,
        slug: `/${subcategoryArr.slug}/sold`
      };
      crumbsArr.push(subcatArr);
    }
    
    let archiveAllArr = {
      title: 'Archive',
      slug: `/sold`
    };
    crumbsArr.push(archiveAllArr);
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs crumbsArr={crumbsArr} pageType="items-list" />
      {itemsFilterComponent}

      {/* // 2do - cull when LIVE */}
      {
        // 2do - when we no longer need the /2020/ subdir, undo this
      categoryArr.name === "Archive"  ? 
        <div className="title-text">
          {title ? <h1>{title}</h1> : null}
          {titleSub ? <h2>{titleSub}</h2> : null}
          <span>To view our full online archive, please go to our </span>
          <Link to="/sold">archive</Link>
        </div>
        : titlesComponent
      }

      <ItemsList items={currentPosts} layout={itemLayout} />
      {showPagination === true ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={sortedItems.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </>
  );
}

export default withItemConsumer(ItemsContainer);
