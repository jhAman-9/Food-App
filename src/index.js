import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Body from "./components/Body";
import App from "./App";
import Cart from "./components/Cart";
// import RestorentMenu from "./components/RestorentMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const RestorentMenu = lazy(() => import("./components/RestorentMenu"));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Body />} errorElement={<Error />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route
        path="/grocery"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />{" "}
          </Suspense>
        }
      ></Route>
      <Route
        path="/restaurants/:resId"
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestorentMenu />{" "}
          </Suspense>
        }
      ></Route>
      <Route
        path="/cart"
      element={<Cart/>}>
      </Route>
    </Route>
  )
);

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     Element: <App />,
//     errorElement: <Error />,
//     children: [
//       {
//         path: "/",
//         element: <Body />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

reportWebVitals();
