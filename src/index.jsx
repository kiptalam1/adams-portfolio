import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics";
import App from "./App";
import "./index.css";


inject();
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
