import GuestPagesLayout from "components/GuestPagesLayout/GuestPagesLayout";
import UserPagesLayout from "components/UserPagesLayout/UserPagesLayout";
import About from "pages/Guest/About/About";
import Contactus from "pages/Guest/Contactus/Contactus";
import Dashboard from "pages/User/Dashboard/Dashboard";
import Home from "pages/Guest/Home/Home";
import Login from "pages/Auth/Login/Login";
import Register from "pages/Auth/Register/Register";
import { Route, Routes, useLocation } from "react-router-dom";
import Card from "components/Card/card";
import DashboardRoutes from "./dashboardroutes";

// Define All Roles Routers in this File

function AppRouter() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <GuestPagesLayout>
              <Home />
            </GuestPagesLayout>
          }
        />
        <Route
          path="/contact-us"
          element={
            <GuestPagesLayout>
              <Contactus />
            </GuestPagesLayout>
          }
        />
        <Route
          path="/about"
          element={
            <GuestPagesLayout>
              <About />
            </GuestPagesLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <UserPagesLayout>
              <Dashboard />
            </UserPagesLayout>
          }
        />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
      </Routes>
    </>
  );
}

export default AppRouter;
