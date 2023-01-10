import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { COUPON_CREATE_RESET } from "../../Redux/Constants/CouponConstants";
import { createCoupon } from "./../../Redux/Actions/CouponAction";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { listCoupons } from "../../Redux/Actions/CouponAction";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddCouponMain = () => {
  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [validityTime, setValidityTime] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [minAmount, setMinAmount] = useState(0);
  const [type, setType] = useState("");

  const dispatch = useDispatch();

  const couponCreate = useSelector((state) => state.couponCreate);
  const { loading, error, coupon } = couponCreate;

  useEffect(() => {
    if (coupon) {
      toast.success("Coupon Added", ToastObjects);
      dispatch({ type: COUPON_CREATE_RESET });
      dispatch(listCoupons());
      setIndex("");
      setName("");
      setCode("");
      setValidityTime("");
      setPercentage(0);
      setMinAmount(0);
      setType("");
    }
  }, [coupon, dispatch]);

  const sumitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createCoupon(index, name, code, validityTime, percentage, minAmount, type)
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={sumitHandler}>
          <div className="content-header">
            <Link to="/coupons" className="btn btn-danger text-white">
              Trở Về Danh Sách Mã Khuyến Mãi
            </Link>
            <h2 className="content-title">Thêm Mã Khuyến Mãi</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Thêm
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {error && <Message variant="alert-danger">{error}</Message>}
                  {loading && <Loading />}
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên Tháng Áp Dụng
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên tháng"
                      className="form-control"
                      id="product_title"
                      required
                      value={index}
                      onChange={(e) => setIndex(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Tên Mã Khuyến Mãi
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên mã"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_title" className="form-label">
                      Code
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập code"
                      className="form-control"
                      id="product_title"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_price" className="form-label">
                      Ngày Hết Hạn
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập ngày"
                      className="form-control"
                      id="product_price"
                      required
                      value={validityTime}
                      onChange={(e) => setValidityTime(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="product_countInStock"
                      className="form-label"
                    >
                      Phần Trăm Giảm Giá
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập phần trăm"
                      className="form-control"
                      id="product_countInStock"
                      required
                      value={percentage}
                      onChange={(e) => setPercentage(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Số Lượng Mã</label>
                    <input
                      placeholder="Nhập số lượng"
                      className="form-control"
                      required
                      value={minAmount}
                      onChange={(e) => setMinAmount(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Loại Mã</label>
                    <input
                      placeholder="Nhập loại"
                      className="form-control"
                      required
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddCouponMain;
