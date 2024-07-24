import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Tour from "./components/pages/Tour.jsx";
import Terms from "./components/pages/Terms.jsx";
import "./styles/index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/tour",
		element: <Tour />,
	},
	{
		path: "/terms-and-conditions",
		element: <Terms />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
