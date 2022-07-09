import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider
    desiredChainId={ChainId.Rinkeby}
    chainRpc={{
      [ChainId.Rinkeby]:
        "https://rinkeby.infura.io/v3/dffa5d399cf34bb1944dc6e6e5aca83d",
    }}
  >
    <App />
  </ThirdwebProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
