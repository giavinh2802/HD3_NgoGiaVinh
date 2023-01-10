import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../homeComponents/pagination";
import { useDispatch, useSelector } from "react-redux";
import { listCoupon } from "../../Redux/Actions/CouponAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const CouponSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const couponList = useSelector((state) => state.couponList);
  const { loading, error, coupons, page, pages } = couponList;

  useEffect(() => {
    dispatch(listCoupon(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    <div className="pb-4" style={{ fontSize: "28px" }}>
                      <strong>MÃ KHUYẾN MÃI</strong>
                      <h5>Các chương trình khuyến mãi</h5>
                    </div>
                    {coupons.map((coupon) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-6"
                        key={coupon._id}
                      >
                        <div className="border-product">
                          <p>Mã: {coupon.code}</p>
                          <div className="shoptext">
                            <p>
                              Giảm {coupon.percentage}% trên tổng giá trị của
                              đơn hàng trên 500k (không bao gồm phí ship)
                            </p>
                            <div>Tháng Áp Dụng: {coupon.index}</div>

                            <p>Loại Sản Phẩm: {coupon.type}</p>
                            <div className="pt-4 pb-2 d-flex justify-content-center">
                              <button className="btn btn-primary py-2 px-4 ">
                                <strong>Sử Dụng</strong>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponSection;
