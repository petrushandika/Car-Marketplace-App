import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth, SignIn } from "@clerk/clerk-react";
import HomePage from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./profile/index.jsx";
import AddListing from "./add-listing/index.jsx";
import { Toaster } from "sonner";

function App() {
  const { isSignedIn } = useAuth();

  const PrivateRoute = ({ element }) => {
    return isSignedIn ? element : <Navigate to="/" />;
  };

  return (
    <>
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={
            isSignedIn ? (
              <HomePage />
            ) : (
              <div className="w-full h-screen flex justify-center items-center">
                <SignIn />
              </div>
            )
          }
        />
        <Route
          path="/contact"
          element={<PrivateRoute element={<Contact />} />}
        />
        <Route
          path="/profile"
          element={<PrivateRoute element={<Profile />} />}
        />
        <Route
          path="/add-listing"
          element={<PrivateRoute element={<AddListing />} />}
        />
      </Routes>
    </>
  );
}

export default App;
