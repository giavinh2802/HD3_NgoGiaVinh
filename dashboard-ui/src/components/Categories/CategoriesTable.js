import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Category from "./Category";
import { listCategories } from "../../Redux/Actions/CategoryAction";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const CategoriesTable = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { error: errorDelete, success: successDelete } = categoryDelete;

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { error: errorCreate, success: successCreate } = categoryCreate;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch, successDelete, successCreate]);

  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Công Bố</th>
            <th>Tên</th>
            <th>Mô Tả</th>
            <th className="text-end">Cài Đặt</th>
          </tr>
        </thead>
        <tbody>
          {/* Cate Table */}
          {errorDelete && (
            <Message variant="alert-danger">
              {errorDelete && errorCreate}
            </Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <>
              {/* Categories */}
              {categories.map((category) => (
                <tr>
                  <Category category={category} key={category._id} />
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
