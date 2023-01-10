import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants";
import { createProduct } from "./../../Redux/Actions/ProductAction";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import { listCategories } from "../../Redux/Actions/CategoryAction";
//FileStack
import { PickerOverlay } from "filestack-react";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const AddProductMain = () => {
  const [isPicker, setIsPicker] = useState(false);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { categories } = categoryList;

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, product } = productCreate;

  useEffect(() => {
    if (product) {
      toast.success("Product Added", ToastObjects);
      dispatch({ type: PRODUCT_CREATE_RESET });
      dispatch(listCategories());
      setName("");
      setCategory("");
      setPrice(0);
      setCountInStock(0);
      setDescription("");
      setImage("");
    }
  }, [product,categories, dispatch]);

  const sumitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(
        name,
        category.trim(),
        countInStock,
        price,
        description,
        image.filesUploaded[0].url
      )
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={sumitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Trở Về Danh Sách Sản Phẩm
            </Link>
            <h2 className="content-title">Thêm Sản Phẩm</h2>
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
                      Tên Sản Phẩm
                    </label>
                    <input
                      type="text"
                      placeholder="Nhập tên sản phẩm"
                      className="form-control"
                      id="product_title"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_category" className="form-label">
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
                        <option disabled selected>
                          -- Chọn Một Danh Mục --
                        </option>
                        {categories.map((category) => (
                          <option value={category._id} category={category} key={category._id}>
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
                      placeholder="Nhập giá"
                      className="form-control"
                      id="product_price"
                      required
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="product_countInStock"
                      className="form-label"
                    >
                      Số Lượng Trong Kho
                    </label>
                    <input
                      type="number"
                      placeholder="Nhập số lượng"
                      className="form-control"
                      id="product_countInStock"
                      required
                      value={countInStock}
                      onChange={(e) => setCountInStock(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Mô Tả Sản Phẩm</label>
                    <textarea
                      placeholder="Nhập mô tả"
                      className="form-control"
                      rows="7"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Hình Ảnh</label>
                    <br />
                    {/* <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      // required
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    /> */}
                    {/* <input className="form-control mt-3" type="file" /> */}
                    {image ? (
                      <img
                        required
                        className="form-control"
                        value={image.filesUploaded[0].url}
                        onChange={(e) => setImage(e.target.value)}
                        src={image.filesUploaded[0].url}
                        alt="imageUploaded"
                        style={{
                          width: "180px",
                          height: "auto",
                          objectFit: "cover",
                          borderRadius: "16px",
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
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default AddProductMain;
