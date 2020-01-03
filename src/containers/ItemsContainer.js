import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import ItemsList from "../components/Items/ItemsList";
import Pagination from "../components/Pagination/Pagination";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading";

function ItemsContainer({ context }) {
  const { siteData, loading, sortedItems, items } = context;
  // console.log("[ItemsContainer.js] ...");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(siteData.pagination.postsPerPage);

  // GET current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedItems.slice(indexOfFirstPost, indexOfLastPost);
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
      <ItemsList items={currentPosts} />
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
