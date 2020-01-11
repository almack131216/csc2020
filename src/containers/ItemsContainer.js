import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import TitleText from "../components/TitleText/TitleText";
import ItemsList from "../components/Items/ItemsList";
import Pagination from "../components/Pagination/Pagination";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading";

function ItemsContainer({ context }) {
  // console.log("[ItemsContainer.js] ...");
  //
  // INIT context
  const { categoryArr, siteData, loading, sortedItems, items } = context;
  // INIT appearance
  let catSettings = categoryArr.settings;
  let itemLayout = null; // LAYOUT items should be displayed in grid or row?
  let titlesComponent = null;
  let itemsFilterComponent = null;
  // INIT pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(siteData.pagination.postsPerPage);
  // GET appearance
  if (catSettings) {
    itemLayout = catSettings.layout ? catSettings.layout : "grid";

    itemsFilterComponent = catSettings.showFilter ? (
      <ItemsFilter items={items} />
    ) : null;

    const title = catSettings.showTitle ? categoryArr.title : null;
    const titleSub = catSettings.showTitle ? categoryArr.titleSub : null;

    titlesComponent =
      title || titleSub ? (
        <TitleText title={title} titleSub={categoryArr.titleSub} />
      ) : null;
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

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs />
      {itemsFilterComponent}
      {titlesComponent}
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
