import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router.tsx";

createRoot(document.getElementById("root") || document.body).render(
	<RouterProvider router={router} />,
);
