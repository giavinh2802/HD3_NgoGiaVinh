import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h4 className="card-title">Thống Kê Bán Hàng</h4>
          <iframe
            title="mySalesChart"
            style={{
              background: "#FFFFFF",
              border: "none",
              borderRadius: "2px",
              boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
              width: "100%",
              height: "400px",
            }}
            src="https://charts.mongodb.com/charts-sneakershop-qynoa/embed/charts?id=6375b003-3101-4b6c-8c5d-a6bcb5e0fb5d&maxDataAge=3600&theme=light&autoRefresh=true"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
