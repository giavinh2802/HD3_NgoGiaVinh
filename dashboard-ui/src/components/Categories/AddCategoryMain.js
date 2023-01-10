import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CATEGORY_CREATE_RESET,
} from "../../Redux/Constants/CategoryConstants";
import {
  createCategory,
} from "../../Redux/Actions/CategoryAction";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const CreateCategory = () => {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [published, setPublished] = useState(false);

  const dispatch = useDispatch();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, category } = categoryCreate;

  useEffect(() => {
    if (category) {
      toast.success("Category Added", ToastObjects);
      dispatch({ type: CATEGORY_CREATE_RESET });
      setType("");
      setPublished(true);
      setDescription("");
    }
  }, [category, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createCategory(type, published, description));
  };

  return (
    <>
      <Toast />
      <div className="col-md-12 col-lg-4">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="product_name" className="form-label" required>
              Tên Danh Mục
            </label>
            <input
              type="text"
              placeholder="Nhập tên danh mục"
              className="form-control py-3"
              id="product_name"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
          <div className="mb-4 ">
            <label className="form-label">Công Bố</label>
            <br />
            <label className="switch">
              <input
                type="checkbox"
                className="form-control"
                value={published}
                onChange={(e) => setPublished(e.target.value)}
              />
              <span class="slider round"></span>
            </label>
          </div>
          <div className="mb-4">
            <label className="form-label">Mô Tả</label>
            <textarea
              placeholder="Nhập mô tả danh mục"
              className="form-control"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary py-3">
              Tạo Danh Mục
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
