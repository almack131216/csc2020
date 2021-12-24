import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPageNum, currentPageSlug }) => {
  const pageNumbers = [];
  const minPagesForPrevNext = 3;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  // const currentPageSlug = currentPageSlug;
  // console.log('[Pagination] currentPageNum: ', currentPageNum, " (", totalPages, ")");
  if(currentPageNum > totalPages) paginate(totalPages);

  ///////
  // <li> Generate Tag to avoid duplication of markup
  const generateLiTag = ({ num, isPrev, isNext, isActive }) => {
    // console.log("[Pagination] generateLiTag() > isPrev: " + isPrev);
    // console.log('[Pagination] generateLiTag() > currentPageNum: ', num, ' - ', isActive);

    let liKey = num;
    if (isPrev) liKey = "li-prev";
    if (isNext) liKey = "li-next";
    let liClass = isPrev || isNext ? "li-prev-next" : "li-num";
    if (isActive === true) {
      liClass += " active";
    }    

    // const updatePagination = (getPageNum) => {
    //   window.scrollTo(0, 0);      
    //   paginate(getPageNum);
    // }

    const updatePage = (getPageNum) => {
      // this.props.history(`/page-${getPageNum}`);
      // console.log('>>>PATHNAME: ',window.location);
      window.scrollTo(0, 0);
      paginate(getPageNum);
    }

    let liTag = (
      <li key={liKey} className={liClass}>
        {/* <button onClick={() => updatePage(num)}>
          {isPrev ? <FaChevronLeft /> : null}
          {isNext ? <FaChevronRight /> : null}
          {!isPrev && !isNext ? num : null}
        </button> */}
        <Link to={`${currentPageSlug}/page-${num}`} onClick={() => updatePage(num)}>
          {isPrev ? <FaChevronLeft /> : null}
          {isNext ? <FaChevronRight /> : null}
          {!isPrev && !isNext ? num : null}
        </Link>
      </li>
    );

    return liTag;
  };

  //////
  // GET page numbers
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  //////////////
  // PREV / NEXT buttons
  const showBtnPrev =
    currentPageNum > 1 && pageNumbers.length >= minPagesForPrevNext ? true : false;
  const showBtnNext =
    currentPageNum < pageNumbers.length &&
    pageNumbers.length >= minPagesForPrevNext
      ? true
      : false;

  const btnPrev = showBtnPrev
    ? generateLiTag({ num: currentPageNum - 1, isPrev: true })
    : null;
  const btnNext = showBtnNext
    ? generateLiTag({ num: currentPageNum + 1, isNext: true })
    : null;

  /////////
  // RETURN pagination
  return (
    <nav className="pagination-wrap">
      <ul className="ul-pagination">
        {btnPrev}

        {currentPageNum && pageNumbers.map(number =>
          generateLiTag({
            num: parseInt(number),
            isActive: number === parseInt(currentPageNum) ? true : false
          })
        )}

        {btnNext}
      </ul>
    </nav>
  );
};

export default Pagination;
