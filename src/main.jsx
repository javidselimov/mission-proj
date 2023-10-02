import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./state/store.js";



ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
    <Provider store={store}>
      <App />

      </Provider>

      </BrowserRouter>
    
 
);



