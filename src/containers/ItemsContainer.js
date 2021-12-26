import React, { useState } from "react";
import parse from "html-react-parser";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import ItemsFilter from "./ItemsFilter/ItemsFilter";
import TitleText from "../components/TitleText/TitleText";
import ItemsList from "../components/Items/ItemsList/ItemsList";
import Pagination from "../components/Pagination/Pagination";
// import CarouselDynamic from "../components/CarouselDynamic/CarouselDynamic";
import { withItemConsumer } from "../Context";
import Loading from "../components/Loading/Loading";
import Linkify from 'linkifyjs/react';// 2do - might not need when we lose /2020/ subdir
// import { MdSettingsInputAntenna } from "react-icons/md";

function ItemsContainer({ context, page }) {
  // console.log("[ItemsContainer] ...");
  //
  // INIT context
  const { categoryArr, siteData, loading, sortedItems, items, subcategoryArr } = context;
  // INIT appearance
  let catSettings = categoryArr.settings;
  let itemLayout = null; // LAYOUT items should be displayed in grid or row?
  let titlesComponent = null;
  let itemsFilterComponent = null;
  let postsPerPage = useState(siteData.pagination.postsPerPage);
  // catSettings && console.log("[ItemsContainer] ... catSettings: " + categoryArr.slug);
  
  // INIT pagination
  let loadPageNum = 1;
  if (Number.isInteger(parseInt(page))){
    // console.log("[ItemsContainer] ... is INT, ", page);
    loadPageNum = page;
  }else{
    // console.log("[ItemsContainer] ... is NOT INT, ", page);
  }
  // const [currentPage, setCurrentPage] = useState(loadPageNum);
  // console.log('postsPerPage: ', categoryArr.settings);
  // const [postsPerPage] = useState(siteData.pagination.postsPerPage);
  if(categoryArr.settings && categoryArr.settings.postsPerPage) postsPerPage = categoryArr.settings.postsPerPage;
  // const pageCount = sortedItems.length && postsPerPage ? Math.ceil(sortedItems.length / postsPerPage) : 1;
  
  // console.log("[ItemsContainer] ...", loadPageNum, " (", page, ")");
  // if(loadPageNum > pageCount){    
  //   loadPageNum = pageCount;
  //   console.log("[ItemsContainer] ... DEFAULT TO: ", loadPageNum);
  //   // setCurrentPage(12);
  // }
  const [currentPageBefore, setCurrentPageBefore] = useState(parseInt(loadPageNum));
  let currentPageNum = parseInt(loadPageNum);
  let currentPageSlug = categoryArr && categoryArr.slug ? categoryArr.slug : null;
  const totalPages = Math.ceil(sortedItems.length / postsPerPage);
  // console.log('[ItemsContainer] totalPages: ' + totalPages + ', currentPageNum: ' + currentPageNum + ', currentPageBefore: ' + currentPageBefore );
  if(currentPageNum > totalPages){
    // console.log('[ItemsContainer] !!! FORCE to last page');
    currentPageNum = totalPages;
  }

  let title = null;
  let titleSub = null;
  let text = null;
  // GET appearance
  if (catSettings) {
    itemLayout = catSettings.layout ? catSettings.layout : "grid";

    itemsFilterComponent = catSettings.showFilter ? (
      <ItemsFilter items={items} />
    ) : null;

    title = catSettings.showTitle ? categoryArr.title : null;
    titleSub = catSettings.showTitle ? categoryArr.titleSub : null;
    text = catSettings.showTitle && categoryArr.text ? categoryArr.text : null;
      
    // LINKIFY - convert <a> tags to <Link> route tags
    // To view our full online archive, please go to our <a href="/sold">sold</a>
    let textWithLinks = text ? <Linkify>{parse(text)}</Linkify> : null;
    // (END) LINKIFY

    // change title & text for the Archive pages when brand is selected
    if(categoryArr.name === "Archive" && subcategoryArr.brand){
      title = `${subcategoryArr.brand} Sold`;
      titleSub = '';
    }
    // change title & text for the Staff pages when department is selected
    if(categoryArr.name === "Staff" && subcategoryArr.brand){
      title = `${categoryArr.title}: ${subcategoryArr.brand}`;
      // titleSub = '';
    }

    titlesComponent = title || titleSub ? <TitleText title={title} titleSub={titleSub} text={textWithLinks} /> : null;    
  }
  // PAGINATION
  // const paginate = pageNumber => setCurrentPage(loadPageNum);
  // GET current posts
  // console.log('[ItemsContainer] currentPageNum: ' + currentPageNum + ', currentPageBefore: ' + currentPageBefore );
  const indexOfLastPost = currentPageNum * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts =
    sortedItems.length > postsPerPage
      ? sortedItems.slice(indexOfFirstPost, indexOfLastPost)
      : sortedItems;
  const showPagination = sortedItems.length > postsPerPage ? true : false;
    

  // CHANGE page
  const paginate = pageNumber => setCurrentPageBefore(loadPageNum);
  // setCurrentPageBefore(loadPageNum);
  // const paginate = pageNumber => currentPageBefore;
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
  if (categoryArr.name === "Archive" && subcategoryArr.brand) {
    if(subcategoryArr.brand){
      let subcatArr = {
        title: subcategoryArr.brand,
        slug: `/${subcategoryArr.slug}/sold`
      };
      crumbsArr.push(subcatArr);
      currentPageSlug = subcatArr.slug;
    }
    
    let archiveAllArr = {
      title: 'Archive',
      slug: `/sold`
    };
    crumbsArr.push(archiveAllArr);
  }

  // Brand crumb
  if(categoryArr.name === "Live" && subcategoryArr.brand){
    const saleStatus = categoryArr.name === "Live" ? '/for-sale' : '/sold';
    const tmp = {
      title: subcategoryArr.brand,
      slug: `/${subcategoryArr.slug}${saleStatus}`,
      class: 'crumb-subcategory'
    }
    crumbsArr.push(tmp);
    currentPageSlug = tmp.slug;
  }
  // Staff department crumb
  if(categoryArr.name === "Staff" && subcategoryArr.brand){
    const tmp = {
      title: subcategoryArr.brand,
      slug: `/${subcategoryArr.slug}/staff`,
      class: 'crumb-subcategory'
    }
    crumbsArr.push(tmp);
    currentPageSlug = tmp.slug;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumbs crumbsArr={crumbsArr} pageType="items-list" />
      {itemsFilterComponent}

      {categoryArr.name !== "Restoration" && titlesComponent}

      <ItemsList items={currentPosts} layout={itemLayout} />
      {showPagination === true && currentPageNum ? (
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={sortedItems.length}
          paginate={paginate}
          currentPageBefore={currentPageBefore}
          currentPageNum={currentPageNum}
          currentPageSlug={currentPageSlug}
        />
      ) : null}
    </>
  );
}

export default withItemConsumer(ItemsContainer);
