import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <NavBar />
      <App />
    </Provider>

  </StrictMode>,
);
