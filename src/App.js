import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/User";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Booking from "./pages/Booking";
import Checkin from "./ui/Checkin";
import ProtectedRoute from "./ui/ProtectedRoute";
const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 200,
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="bookings/:bookingID" element={<Booking />} exact />
              <Route path="cabins" element={<Cabins />} />
              <Route path="users" element={<Users />} />
              <Route path="settings" element={<Settings />} />
              <Route path="account" element={<Accounts />} />
              <Route path="bookings/check-in/:id" element={<Checkin />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "black",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
};

export default App;

//%*FekEzB+5CDF*m
