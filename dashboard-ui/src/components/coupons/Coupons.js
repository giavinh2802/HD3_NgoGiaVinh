import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCoupon } from "../../Redux/Actions/CouponAction";

const Coupons = (props) => {
  const { coupons } = props;
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCoupon(id));
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Tháng Áp Dụng</th>
          <th scope="col">Tên Mã</th>
          <th scope="col">Code</th>
          <th scope="col">Ngày Hết Hạn</th>
          <th scope="col">Phần Trăm Giảm</th>
          <th scope="col">Số Lượng Mã</th>
          <th scope="col">Loại Mã</th>
          <th className="text-end">Cài Đặt</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((coupon) => (
          <tr key={coupon._id}>
            <td>
              <b>{coupon.index}</b>
            </td>
            <td>{coupon.name}</td>
            <td>{coupon.code}</td>
            <td>{coupon.validityTime}</td>
            <td>{coupon.percentage}%</td>
            <td>{coupon.minAmount}</td>
            <td>{coupon.type}</td>
            <td className="text-end">
              <div className="dropdown d-flex justify-content-end align-item-center">
                <Link
                  to="#"
                  data-bs-toggle="dropdown"
                  className="btn btn-light"
                >
                  <i className="fas fa-ellipsis-h"></i>
                </Link>
                <div className="dropdown-menu">
                  <Link
                    className="dropdown-item"
                    to={`/coupon/${coupon._id}/edit`}
                  >
                    Chỉnh Sửa Thông Tin
                  </Link>
                  <Link
                    className="dropdown-item text-danger"
                    to="#"
                    onClick={() => deleteHandler(coupon._id)}
                  >
                    Xoá
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        ))}

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Coupons;
