import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "./assets/styles.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense } from "react";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { Provider } from "react-redux";
import { store } from "./store/index.js"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {},
  },
});

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
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
              <ReactQueryDevtools />
            </QueryClientProvider>
          </Provider>
        </StyleProvider>
      </ConfigProvider>
    </Suspense>
  </BrowserRouter>
);
