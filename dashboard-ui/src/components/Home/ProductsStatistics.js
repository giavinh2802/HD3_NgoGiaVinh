import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h4 className="card-title">Thống Kê Sản Phẩm</h4>
          <iframe
            title="myProductsChart"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "400px",
            }}
            src="https://charts.mongodb.com/charts-sneakershop-qynoa/embed/charts?id=6375b97b-29c2-494e-82a4-d1686897c42e&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
