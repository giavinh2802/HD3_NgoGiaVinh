import React from "react";
import { Link } from "react-router-dom";

const OrderDetailProducts = (props) => {
  const { order, loading } = props;

  if (!loading) {
    //Calc Price
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  return (
    <table className="table border table-lg">
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Sản Phẩm</th>
          <th style={{ width: "20%" }}>Đơn Giá</th>
          <th style={{ width: "20%" }}>Số Lượng</th>
          <th style={{ width: "20%" }} className="text-end">
            Tổng Giá
          </th>
        </tr>
      </thead>
      <tbody>
        {order.orderItems.map((item, index) => (
          <tr key={index}>
            <td>
              <Link className="itemside" to="#">
                <div className="left">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "40px", height: "40px" }}
                    className="img-xs"
                  />
                </div>
                <div className="info">{item.name}</div>
              </Link>
            </td>
            <td>
              {item.price.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}{" "}
            </td>
            <td>{item.qty} </td>
            <td className="text-end"> {Number(item.qty * item.price).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}</td>
          </tr>
        ))}

        <tr>
          <td colSpan="4">
            <article className="float-end">
              <dl className="dlist">
                <dt>Giá Tạm:</dt> <dd>{order.itemsPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}</dd>
              </dl>
              <dl className="dlist">
                <dt>Phí Giao Hàng:</dt> <dd>{order.shippingPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}</dd>
              </dl>
              <dl className="dlist">
                <dt>Tổng Tiền:</dt>
                <dd>
                  <b className="h5">{order.totalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}</b>
                </dd>
              </dl>
              <dl className="dlist">
                <dt className="text-muted">Trạng Thái:</dt>
                <dd>
                  {order.isPaid ? (
                    <span className="badge rounded-pill alert alert-success text-success">
                      Đã Thanh Toán
                    </span>
                  ) : (
                    <span className="badge rounded-pill alert alert-danger text-danger">
                      Chưa Thanh Toán
                    </span>
                  )}
                </dd>
              </dl>
            </article>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default OrderDetailProducts;
