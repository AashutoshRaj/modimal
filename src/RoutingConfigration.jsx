import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './Components/Pages/HomePage/HomePage'
import Login from './Components/LoginPages/Login'
import ProductPage from './Components/Pages/ProductPage/ProductPage'
import CreateAccount from './Components/LoginPages/CreateAccount'
import ProductDetailsPage from './Components/Pages/ProductDetailsPage/ProductDetailsPage'
import ProductPage2 from './Components/Pages/ProductPage/ProductPage2'
import ProtectedRoute from './ProtectRoute'
import NutritionFacts from './Components/REcipet/NutritionFacts'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
        name: "HomePage"

      },
      {
        path: "/product_page",
        element: <ProductPage2 />,
        name: 'ProductPage'
      },
      {
        path: "/create_account",
        element: <CreateAccount />,
        name: 'CreateAccount'
      },
      {
        path: "/login",
        element: <Login />,
        name: 'Login',
      },
      {
        path: "/receipt",
        element: <NutritionFacts/>,
        name: 'receipt',
      },
      {
        path: "/product_detail/",
        element: <ProtectedRoute> <ProductDetailsPage /> </ProtectedRoute>,
        name: 'ProductDetail',
      },
      // {
      //   path: "/product_detail/:pId",
      //   element: <ProtectedRoute> <ProductDetailsPage /> </ProtectedRoute>,
      //   name: 'ProductDetail',
      // },
    ],
  },

// {
//   path: "*",
//   element: <NotFound />, 
// }

])


const RoutingConfiguration = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default RoutingConfiguration
