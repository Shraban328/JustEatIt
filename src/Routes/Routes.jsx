import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import CocaColaProducts from "../Pages/Home/BrandProducts/CocaColaProducts";
import NestleProducts from "../Pages/Home/BrandProducts/NestleProducts";
import McDonaldsProducts from "../Pages/Home/BrandProducts/McDonaldsProducts";
import KelloggsProducts from "../Pages/Home/BrandProducts/KelloggsProducts";
import StarBucksProducts from "../Pages/Home/BrandProducts/StarBucksProducts";
import PepsiCoProducts from "../Pages/Home/BrandProducts/PepsiCoProducts";
import AddProduct from "../Pages/AddProduct/AddProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/products/coca-cola",
        element: <CocaColaProducts />,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/products/nestle",
        element: <NestleProducts />,
      },
      {
        path: "/products/mcdonalds",
        element: <McDonaldsProducts />,
      },
      {
        path: "/products/kelloggs",
        element: <KelloggsProducts />,
      },
      {
        path: "/products/starbucks",
        element: <StarBucksProducts />,
      },
      {
        path: "/products/pepsico",
        element: <PepsiCoProducts />,
      },
    ],
  },
]);

export default Routes;
