import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from './App.jsx'
import Countrydetail from "./components/Countrydetail.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:country",
      element: <Countrydetail />,
    },
  ],
},
]);
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />
  
);
