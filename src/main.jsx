import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles.css"
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense fallback={<></>}>
      <ToastContainer />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ff416c",
            paddingLG: 0,
          },
          components: {
            Tabs: {
              verticalItemPadding: "0",
            },
          },
        }}
      >
        <StyleProvider hashPriority="low">
          <App />
        </StyleProvider>
      </ConfigProvider>
    </Suspense>
  </BrowserRouter>
);
