import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];
  const isOnFirstPage = currentPage === 1 ? true : false;
  const isOnLastPage = currentPage === pageNumbers.length ? true : false;

  const btnPrev = (
    <li className="li-prev">
      <button onClick={() => paginate(currentPage - 1)}>
        <FaChevronLeft />
      </button>
    </li>
  );

  const btnNext = (
    <li className="li-next">
      <button onClick={() => paginate(currentPage + 1)}>
        <FaChevronRight />
      </button>
    </li>
  );

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-wrap">
      <ul className="ul-pagination">
        {!isOnFirstPage ? btnPrev : null}

        {pageNumbers.map(number => (
          <li key={number} className="li-num">
            <button
              onClick={() => paginate(number)}
              className={number == currentPage ? "active" : ""}
            >
              {number}
            </button>
          </li>
        ))}

        {!isOnLastPage ? btnNext : null}
      </ul>
    </nav>
  );
};

export default Pagination;
