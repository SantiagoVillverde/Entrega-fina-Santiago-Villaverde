import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CustomProvider } from "./context";
import Cart from "./routes/cart";
import ItemRoot from "./routes/ItemRoot.jsx";
import Root from "./routes/root";
import Layout from "./components/Layout";
import ErrorPage from "./routes/error-page";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC84yesQ0evufjpCYwB1SxX9sGou9Jomro",
  authDomain: "tienda-rocket.firebaseapp.com",
  projectId: "tienda-rocket",
  storageBucket: "tienda-rocket.appspot.com",
  messagingSenderId: "283287135624",
  appId: "1:283287135624:web:65f129b6c5f99da8ae863d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/category/:id",
        element: <Root />,
      },
      {
        path: "/item/:id",
        element: <ItemRoot />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <RouterProvider router={router} />
    </CustomProvider>
  </React.StrictMode>
);
