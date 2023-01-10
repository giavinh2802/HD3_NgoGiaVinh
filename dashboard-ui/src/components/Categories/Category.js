import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../../Redux/Actions/CategoryAction";

const Category = (props) => {
  const { category } = props;
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("Xoá danh mục sẽ xoá luôn các sản phẩm có trong nó. Bạn có chắc muốn xoá?")) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <>
      {/* Table Data */}
      <td>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
        </div>
      </td>
      <td>
        <Link>{category._id}</Link>
      </td>
      <td>
        <label className="switch">
          <input
            type="checkbox"
          />
          <span class="slider round">{category.published}</span>
        </label>
      </td>
      <td>
        <b>{category.type}</b>
      </td>
      <td>{category.description}</td>
      <td className="text-end">
        <div className="dropdown">
          <Link to="#" data-bs-toggle="dropdown" className="btn btn-light">
            <i className="fas fa-ellipsis-h"></i>
          </Link>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to={`/category/${category._id}/edit`}>
              Chỉnh Sửa Thông Tin
            </Link>
            <Link
              className="dropdown-item text-danger"
              to="#"
              onClick={() => deleteHandler(category._id)}
            >
              Xoá
            </Link>
          </div>
        </div>
      </td>
    </>
  );
};

export default Category;
