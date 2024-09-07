import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./profile/index.jsx";
import AddListing from "./add-listing/index.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage />}
      />
      <Route
        path="/contact"
        element={<Contact />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/add-listing"
        element={<AddListing />}
      />
    </Routes>
  );
}

export default App;
