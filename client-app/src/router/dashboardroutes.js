import UserPagesLayout from "components/UserPagesLayout/UserPagesLayout";
import Collections from "pages/User/Collections/Collections";
import Dashboard from "pages/User/Dashboard/Dashboard";
import { Route, Routes, useLocation } from "react-router-dom";

// Define All Roles Routers in this File

function DashboardRoutes() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route
          path="/  b  "
          element={
            <UserPagesLayout>
              <Dashboard />
            </UserPagesLayout>
          }
        />
        <Route
          path="/collections"
          element={
            <UserPagesLayout>
              <Collections />
            </UserPagesLayout>
          }
        />
        <Route
          path="/collections"
          element={
            <UserPagesLayout>
              <Collections />
            </UserPagesLayout>
          }
        />
      </Routes>
    </>
  );
}

export default DashboardRoutes;
