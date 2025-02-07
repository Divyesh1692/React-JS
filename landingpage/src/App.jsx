import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSubdomain } from "./context/SubdomainContext";
import Dashbord from "./Dashbord";
import Home from "./Home";
import ArtGallery from "./ArtGalleryPage";

export default function App() {
  const { userData, loading, error } = useSubdomain();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  // Get the current hostname (e.g., 'example.com' or 'sub.example.com')
  const hostname = window.location.hostname;
  const isSubdomain = true; // Check if it's a subdomain

  // Conditional Route Rendering
  return (
    <Routes>
      {/* Conditional rendering based on userData and subdomain check */}
      <Route
        path="/"
        element={userData?.type === "home" ? <Home /> : <Dashbord />}
      />

      {/* ArtGallery should only be accessible on subdomains */}
      <Route
        path="/artgallery"
        element={isSubdomain ? <ArtGallery /> : <Navigate to="/" />} // Redirect to Home if not a subdomain
      />

      {/* Optionally, handle unknown routes */}
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}
