import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import TitleText from "../components/TitleText/TitleText";
import ItemsList from "../components/Items/ItemsList";
import Pagination from "../components/Pagination/Pagination";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading";

function ItemsContainer({ context }) {
  const { categoryArr, siteData, loading, sortedItems, items } = context;
  // LAYOUT items should be displayed in grid or row?
  const itemLayout = categoryArr.layout ? categoryArr.layout : "grid";
  // console.log("[ItemsContainer.js] ...");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(siteData.pagination.postsPerPage);
  // TITLES
  let titles = null;
  if (categoryArr.id === 4) {
    titles = <TitleText categoryArr={categoryArr} />;
  }
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

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs />
      <ItemsFilter items={items} />
      {titles}
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
