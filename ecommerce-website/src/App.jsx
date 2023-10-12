import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import PageRoute from "./routes/PageRoute";
import AuthProvider from "./contexts/AuthContext";
import CartProvider from "./contexts/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <PageRoute />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
