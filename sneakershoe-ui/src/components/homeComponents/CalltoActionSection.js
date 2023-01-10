import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn có muốn những phần quà hấp dẫn ?</h2>
              <p>Đăng kí thành viên ngay để nhận những thông báo mới nhất từ chúng tôi.</p>
              <form className="form-section">
                <input placeholder="Email của bạn ..." name="email" type="email" />
                <input value="ĐĂNG KÍ LIỀN" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
