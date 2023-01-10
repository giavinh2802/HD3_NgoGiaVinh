import React from "react";
import { Link } from "react-router-dom";

const PaginationOrder = (props) => {
  const { page, pages } = props;
  return (
    pages > 1 && (
      <nav>
        <ul className="pagination justify-content-center">
          {[...Array(pages).keys()].map((x) => (
            <li
              className={`page-item ${x + 1 === page ? "active" : ""}`}
              key={x + 1}
            >
              <Link className="page-link" to={`/order/${x + 1}`}>
                {x + 1}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    )
  );
};

export default PaginationOrder;
