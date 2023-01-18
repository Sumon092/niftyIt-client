
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Payment from "./Component/Payment";
import Products from "./pages/Products";



function App() {

  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Products />} />
        <Route
          path="/product/:id"
          element={<Payment />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;