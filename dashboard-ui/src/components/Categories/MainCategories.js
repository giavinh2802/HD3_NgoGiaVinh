import React from "react";
import CreateCategory from "./AddCategoryMain";
import EditCategory from "./EditCategoryMain";
import CategoriesTable from "./CategoriesTable";

const MainCategories = () => {
  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categories</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory />
            {/* <EditCategory /> */}
            {/* Categories table */}
            <CategoriesTable />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
