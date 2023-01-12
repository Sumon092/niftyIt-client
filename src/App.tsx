
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Navbar from "./Component/NavBar";
import Profile from "./pages/Profile";
import Product from "./pages/Product";




function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;