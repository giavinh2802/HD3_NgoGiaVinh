import { React } from "react";
// import { getNews } from "../redux/selector";
// import { useSelector } from "react-redux";
// import ListNews from "../components/NewsList/ListNews";
import { Link } from "react-router-dom";

export default function NewsScreen() {
  //   const listNews = useSelector(getNews);
  return (
    <div>
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
      
      <div className="pd-header">
        <div className="container-fluid">
          <div className="pd-w-100 section-Chapter">
            <div className="text-center fs-3">
              <i className="fas fa-newspaper fs-4 color-primary" /> Tin tức
            </div>
            {/* {<ListNews news={listNews} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
