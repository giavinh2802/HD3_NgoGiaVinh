import React, { useEffect } from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Orders from "./Orders";
import { useDispatch, useSelector } from "react-redux";
import PaginationOrder from "../PaginationOrder";
import { Link } from "react-router-dom";
import { listOrders } from "../../Redux/Actions/OrderAction";

const OrderMain = (props) => {
  const { pagenumber } = props;
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders, page, pages } = orderList;

  useEffect(() => {
    dispatch(listOrders(pagenumber));
  }, [dispatch, pagenumber]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Orders</h2>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Search..."
                className="form-control p-2"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Trạng Thái</option>
                <option>Mở</option>
                <option>Đóng</option>
                <option>Xem Tất Cả</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiển Thị 20 SP</option>
                <option>Hiển Thị 30 SP</option>
                <option>Hiển Thị 40 SP</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error ? (
              <Message variant="alert-danger">{error}</Message>
            ) : (
              <Orders orders={orders} />
            )}
            {/* nav */}
            <nav className="float-end mt-4" aria-label="Page navigation">
              <ul className="pagination">
                <li>
                  <PaginationOrder pages={pages} page={page} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderMain;
