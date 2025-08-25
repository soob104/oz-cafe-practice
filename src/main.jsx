import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from "./Context/menuContext.jsx";
import { CartProvider } from "./Context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(

  <MenuProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </MenuProvider>


);
