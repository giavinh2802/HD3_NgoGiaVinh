import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { listProducts } from "../../Redux/Actions/ProductAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import Pagination from "../Pagination";

const MainProducts = (props) => {
  const { pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  useEffect(() => {
    dispatch(listProducts(pagenumber));
  }, [dispatch, successDelete, pagenumber]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Sản Phẩm</h2>
        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Thêm Sản Phẩm
          </Link>
        </div>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header bg-white ">
          <div className="row gx-3 py-3">
            <div className="col-lg-4 col-md-6 me-auto d-flex">
              <input
                type="search"
                placeholder="Tìm Kiếm ..."
                className="form-control p-2"
              />
              {/* <button type="submit" className="search-button">Button</button> */}
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Tất Cả Danh Mục</option>
                <option>Electronics</option>
                <option>Clothings</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Sản Phẩm Mới Nhất</option>
                <option>Rẻ Nhất</option>
                <option>Nhiều lượt xem nhất</option>
              </select>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row">
              {/* Products */}
              {products.map((product) => (
                <Product product={product} key={product._id} />
              ))}
            </div>
          )}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <Pagination pages={pages} page={page} />
          </nav>
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
