import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

/* [ Provider ]
 * Provider에 쌓여진 하위 컴포넌트들은 Provider를 통해 redux store에 접근할 수 있다.
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
