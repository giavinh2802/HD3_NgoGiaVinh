import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCoupon2Fill, RiRefund2Fill } from "react-icons/ri";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas"><RiRefund2Fill/></i>
            </div>
            <h5>Cam Kết Chính Hãng</h5>
            <p>Đền tiền x2 nếu phát hiện đồ phà kè</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas"><TbTruckDelivery/></i>
            </div>
            <h5>Giao Hàng Miễn Phí</h5>
            <p>Cho hoá đơn trên 200.000đ</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas"><RiCoupon2Fill/></i>
            </div>
            <h5>Mã Khuyến Mãi Mỗi Ngày</h5>
            <p>Rất nhiều khuyến mãi đang đón chờ bạn</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
