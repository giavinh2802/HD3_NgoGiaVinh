// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { CATEGORY_UPDATE_RESET } from "../../Redux/Constants/CategoryConstants";
// import {
//   editCategory,
//   updateCategory,
// } from "../../Redux/Actions/CategoryAction";
// import Toast from "../LoadingError/Toast";
// import Message from "../LoadingError/Error";
// import Loading from "../LoadingError/Loading";

// const ToastObjects = {
//   pauseOnFocusLoss: false,
//   draggable: false,
//   pauseOnHover: false,
//   autoClose: 2000,
// };

// const EditCategoryMain = (props) => {
//   const [type, setType] = useState("");
//   const [description, setDescription] = useState("");
//   const [published, setPublished] = useState(false);

//   const { categoryId } = props;
//   const dispatch = useDispatch();

//   const categoryEdit = useSelector((state) => state.categoryEdit);
//   const { loading, error, category } = categoryEdit;

//   const categoryUpdate = useSelector((state) => state.categoryUpdate);
//   const {
//     loading: loadingUpdate,
//     error: errorUpdate,
//     success: successUpdate,
//   } = categoryUpdate;

//   useEffect(() => {
//     if (successUpdate) {
//       dispatch({ type: CATEGORY_UPDATE_RESET });
//       toast.success("Category Updated", ToastObjects);
//     } else {
//       if (categoryId) {
//         dispatch(editCategory(categoryId));
//       } else {
//         setType(category.type);
//         setDescription(category.description);
//         setPublished(category.published);
//       }
//     }
//   }, [category, dispatch, categoryId, successUpdate]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     dispatch(
//       updateCategory({
//         _id: categoryId,
//         type,
//         published,
//         description,
//       })
//     );
//   };

//   return (
//     <>
//       <Toast />
//       <div className="col-md-12 col-lg-4">
//         {errorUpdate && <Message variant="alert-danger">{errorUpdate}</Message>}
//         {loadingUpdate && <Loading />}
//         {loading ? (
//           <Loading />
//         ) : error ? (
//           <Message variant="alert-danger">{error}</Message>
//         ) : (
//           <form onSubmit={submitHandler}>
//             <div className="mb-4">
//               <label htmlFor="category_name" className="form-label" required>
//                 Type Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Type here"
//                 className="form-control py-3"
//                 id="category_type"
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//               />
//             </div>
//             <div className="mb-4 ">
//               <label className="form-label">Published</label>
//               <br />
//               <label className="switch">
//                 <input
//                   id="category_published"
//                   type="checkbox"
//                   className="form-control"
//                   value={published}
//                   onChange={(e) => setPublished(e.target.value)}
//                 />
//                 <span class="slider round"></span>
//               </label>
//             </div>
//             <div className="mb-4">
//               <label className="form-label">Description</label>
//               <textarea
//                 id="category_description"
//                 placeholder="Type here"
//                 className="form-control"
//                 rows="4"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               ></textarea>
//             </div>

//             <div className="d-grid">
//               <button type="submit" className="btn btn-primary py-3">
//                 Update Category
//               </button>
//             </div>
//           </form>
//         )}
//       </div>
//     </>
//   );
// };

// export default EditCategoryMain;
