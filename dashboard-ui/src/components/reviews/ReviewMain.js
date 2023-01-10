// import React from "react";
// import { Link } from "react-router-dom";
// import Message from "../LoadingError/Error";
// import Loading from "../LoadingError/Loading";
// // import Reviews from "./Reviews";
// import Product from "../products/Product";

// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";

// // import { listReviews } from "../../Redux/Actions/ReviewAction";
// import { listProducts } from "../../Redux/Actions/ProductAction";

// const ReviewMain = () => {
//   const dispatch = useDispatch();

//   const productList = useSelector((state) => state.productList);
//   const { loading, error, products } = productList;
  
//   // const couponDelete = useSelector((state) => state.couponDelete);
//   // const { error: errorDelete, success: successDelete } = couponDelete;

//   useEffect(() => {
//     dispatch(listProducts());
//   }, [dispatch]);
//   // console.log("review",listProducts());

//   return (
//     <section className="content-main">
//       <div className="content-header">
//         <h2 className="content-title">Đánh Giá</h2>
//         <div>
//           <Link to="/addcoupon" className="btn btn-primary">
//             Thêm Đánh Giá
//           </Link>
//         </div>
//       </div>

//       <div className="card mb-4 shadow-sm">
//         <header className="card-header bg-white">
//           <div className="row gx-3 py-3">
//             <div className="col-lg-4 col-md-6 me-auto">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="form-control p-2"
//               />
//             </div>
//             <div className="col-lg-2 col-6 col-md-3">
//               <select className="form-select">
//                 <option>Trạng Thái</option>
//                 <option>Mở</option>
//                 <option>Đóng</option>
//                 <option>Hiển Thị Tất Cả</option>
//               </select>
//             </div>
//             <div className="col-lg-2 col-6 col-md-3">
//               <select className="form-select">
//                 <option>Hiển Thị 20 Mã</option>
//                 <option>Hiển Thị 30 Mã</option>
//                 <option>Hiển Thị Tất Cả</option>
//               </select>
//             </div>
//           </div>
//         </header>
//         <div className="card-body">
//           <div className="table-responsive">
//             {loading ? (
//               <Loading />
//             ) : error ? (
//               <Message variant="alert-danger">{error}</Message>
//             ) : (
//               <Product products={products} key={products._id} />
//               // <div>
//               //   {" "}
//               //   {products.map((product) => (
//               //     <Product product={product} key={product._id} />
//               //   ))}
//               // </div>
//             )}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReviewMain;
