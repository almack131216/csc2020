import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const minPagesForPrevNext = 3;

  ///////
  // <li> Generate Tag to avoid duplication of markup
  const generateLiTag = ({ num, isPrev, isNext, isActive }) => {
    // console.log("[Pagination] generateLiTag() > isPrev: " + isPrev);

    let liKey = num;
    if (isPrev) liKey = "li-prev";
    if (isNext) liKey = "li-next";
    let liClass = isPrev || isNext ? "li-prev-next" : "li-num";
    if (isActive === true) {
      liClass += " active";
    }    

    const updatePagination = (getPageNum) => {
      window.scrollTo(0, 0);      
      paginate(getPageNum);
    }

    let liTag = (
      <li key={liKey} className={liClass}>
        <button onClick={() => updatePagination(num)}>
          {isPrev ? <FaChevronLeft /> : null}
          {isNext ? <FaChevronRight /> : null}
          {!isPrev && !isNext ? num : null}
        </button>
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
    currentPage > 1 && pageNumbers.length >= minPagesForPrevNext ? true : false;
  const showBtnNext =
    currentPage < pageNumbers.length &&
    pageNumbers.length >= minPagesForPrevNext
      ? true
      : false;

  const btnPrev = showBtnPrev
    ? generateLiTag({ num: currentPage - 1, isPrev: true })
    : null;
  const btnNext = showBtnNext
    ? generateLiTag({ num: currentPage + 1, isNext: true })
    : null;

  /////////
  // RETURN pagination
  return (
    <nav className="pagination-wrap">
      <ul className="ul-pagination">
        {btnPrev}

        {pageNumbers.map(number =>
          generateLiTag({
            num: number,
            isActive: number === currentPage ? true : false
          })
        )}

        {btnNext}
      </ul>
    </nav>
  );
};

export default Pagination;
