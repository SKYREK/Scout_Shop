import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Overview from "./pages/Overview";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import EditItem from "./components/EditItem";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/additem" element={<AddItem />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/edititem" element={<EditItem />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
