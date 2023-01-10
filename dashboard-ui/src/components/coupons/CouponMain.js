import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import Coupons from "./Coupons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listCoupons } from "../../Redux/Actions/CouponAction";

const CouponMain = () => {
  const dispatch = useDispatch();

  const couponList = useSelector((state) => state.couponList);
  const { loading, error, coupons } = couponList;

  const couponDelete = useSelector((state) => state.couponDelete);
  const { error: errorDelete, success: successDelete } = couponDelete;

  useEffect(() => {
    dispatch(listCoupons());
  }, [dispatch, successDelete]);  

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Mã Khuyến Mãi</h2>
        <div>
          <Link to="/addcoupon" className="btn btn-primary">
            Thêm Mã Khuyến Mãi
          </Link>
        </div>
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
                <option>Hiển Thị Tất Cả</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Hiển Thị 20 Mã</option>
                <option>Hiển Thị 30 Mã</option>
                <option>Hiển Thị Tất Cả</option>
              </select>
            </div>
          </div>
        </header>
        <div className="card-body">
          <div className="table-responsive">
            {loading ? (
              <Loading />
            ) : error && errorDelete ? (
              <Message variant="alert-danger">{error && errorDelete}</Message>
            ) : (
              <Coupons coupons={coupons} key={coupons._id} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponMain;
