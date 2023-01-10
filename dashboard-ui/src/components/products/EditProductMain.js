import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductAction";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { PickerOverlay } from "filestack-react";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const [isPicker, setIsPicker] = useState(false);

  const { productId } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setName(product.name);
        setDescription(product.description);
        setCountInStock(product.countInStock);
        setCategory(product.category);
        setImage("");
        setPrice(product.price);
      }
    }
  }, [product, dispatch, productId, successUpdate, categories]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(category.type);
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        description,
        category: category.trim(),
        image: image.filesUploaded[0].url,
        countInStock,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Trở Về Danh Sách Sản Phẩm
            </Link>
            <h2 className="content-title">Cập Nhật Sản Phẩm</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Cập Nhật
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Tên Sản Phẩm
                        </label>
                        <input
                          type="text"
                          placeholder="Nhập tên"
                          className="form-control"
                          id="product_title"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="product_category"
                          className="form-label"
                        >
                          Danh Mục
                        </label>
                        <div
                          className="col-lg-5 col-6 col-md-3"
                          id="product_category"
                          required
                        >
                          <select
                            className="form-select"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            {categories.map((category) => (
                              <option
                                value={category._id}
                                category={category}
                                setCategory={setCategory}
                                key={category._id}
                              >
                                {category.type}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Giá Tiền
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="product_price" className="form-label">
                          Số Lượng Hàng Trong Kho
                        </label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          id="product_price"
                          required
                          value={countInStock}
                          onChange={(e) => setCountInStock(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Mô Tả Sản Phẩm</label>
                        <textarea
                          placeholder="Type here"
                          className="form-control"
                          rows="7"
                          required
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Images</label>
                        <br />
                        {image ? (
                          <img
                            className="form-control"
                            value={image.filesUploaded[0].url}
                            onChange={(e) => setImage(e.target.value)}
                            src={image.filesUploaded[0].url}
                            alt="imageUploaded"
                            style={{
                              width: "180px",
                              height: "auto",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              isPicker ? setIsPicker(false) : setIsPicker(true)
                            }
                          >
                            <div>Chọn Hình</div>
                          </button>
                        )}
                      </div>

                      <div className="mt-4 relative">
                        {isPicker && (
                          <PickerOverlay
                            apikey={"AoRcGoKcTSBGbtz9KxLEzz"}
                            onSuccess={(res) => {
                              setImage(res);
                              setIsPicker(false);
                            }}
                            onError={(res) => alert(res)}
                            pickerOptions={{
                              maxFiles: 1,
                              accept: ["image/*"],
                              errorsTimeout: 2000,
                              maxSize: 1 * 1000 * 1000,
                            }}
                            onUploadDone={(res) => console.log(res)}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
