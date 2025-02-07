import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

// Create Context
const SubdomainContext = createContext();

// Provider Component
export const SubdomainProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const hostname = window.location.hostname;
    console.log(hostname);

    const mainDomain = "artpallatte.com"; // Change to your actual domain
    // let subdomain = hostname.replace(`.${mainDomain}`, "");
    let subdomain = "mukesh";

    if (hostname === mainDomain || hostname === "www." + mainDomain) {
      setUserData({ type: "home" });
      setLoading(false);
      return;
    }

    // API Request using Axios
    axios
      .get(
        `https://admin.artpallatte.com/api/website-data/${subdomain}?frompreview=true`
      )
      .then((response) => {
        if (response.data && Object.keys(response.data).length > 0) {
          setUserData({ type: "subdomain", data: response.data.data });
        } else {
          setError("No user available, make this subdomain yours.");
        }
      })
      .catch((err) => setError("Something went wrong!"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SubdomainContext.Provider value={{ userData, loading, error }}>
      {children}
    </SubdomainContext.Provider>
  );
};

// Custom Hook for using context
export const useSubdomain = () => useContext(SubdomainContext);
