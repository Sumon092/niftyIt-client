
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
// import Signup from "./pages/SignUp";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="*" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default App;