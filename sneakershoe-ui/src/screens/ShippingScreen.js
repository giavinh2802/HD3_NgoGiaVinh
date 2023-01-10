import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { saveShippingAddress } from "../Redux/Actions/CartAction";
import InlineError from "../components/LoadingError/InlineError";
import {
  validateAddress,
  validateCity,
  validateCountry,
} from "../components/homeComponents/Validation";
import { Link } from "react-router-dom";

const ShippingScreen = ({ history }) => {
  window.scrollTo(0, 0);

  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!addressError && !cityError && !countryError) {
      dispatch(saveShippingAddress({ address, city, country, postalCode }));
      history.push("/payment");
    }
  };

  useEffect(() => {
    //Validation
    validateAddress({ address, setAddressError });
    validateCity({ city, setCityError });
    validateCountry({ country, setCountryError });
  }, [history, address, city, postalCode, country]);

  return (
    <>
      <Header />
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <Link to="/">
                <div className="item-menu">
                  {" "}
                  <img alt="logo" width="54px" src="/images/LogoSneaker.png" />
                </div>
              </Link>
              <p>
                <strong>PANDA SNEAKER SHOP</strong>
              </p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link to="">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center login-center">
        <form
          className="Login col-md-8 col-lg-4 col-11"
          onSubmit={submitHandler}
        >
          <h6>ĐỊA CHỈ GIAO HÀNG</h6>
          <div>
            <input
              type="text"
              placeholder="Địa Chỉ Giao Hàng"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {addressError && <InlineError error={addressError} />}
          </div>
          <div>
            <input
              type="text"
              placeholder="Quận, Huyện"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {cityError && <InlineError error={cityError} />}
          </div>
          <div>
            <input
              type="text"
              placeholder="Thành Phố"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Ghi Chú"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            {countryError && <InlineError error={countryError} />}
          </div>
          <button type="submit">TIẾP TỤC</button>
        </form>
      </div>
    </>
  );
};

export default ShippingScreen;
