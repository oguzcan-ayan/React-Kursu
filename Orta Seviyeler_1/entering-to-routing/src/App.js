import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Home from "./pages/Dashboard/Home";
import Contact from "./pages/Dashboard/Contact";
import Users from "./pages/Dashboard/Users";
import UserDetail from "./pages/Dashboard/UserDetail";
import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/DashboardLay/DashboardLayout";
import AuthLayout from "./layouts/AuthLay/AuthLayout";
import Register from "./pages/Auth/Register";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Home />}></Route>

          <Route path="/users" element={<Users />}></Route>
          <Route path="/users/:id" element={<UserDetail />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Route>

        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route path="*" element={<Error404 />}></Route>
        </Routes>
  </BrowserRouter>
  );
}

export default App;
