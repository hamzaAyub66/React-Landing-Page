import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Home } from "./pages/Home";
import { FbrDigitalInvoicing } from "./pages/FbrDigitalInvoicing";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const normalizePath = (pathname) => {
  const trimmed = (pathname || "/").replace(/\/$/, "") || "/";
  return trimmed === "" ? "/" : trimmed;
};

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [path, setPath] = useState(() =>
    normalizePath(window.location.pathname)
  );

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  useEffect(() => {
    const syncPath = () =>
      setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", syncPath);
    return () => window.removeEventListener("popstate", syncPath);
  }, []);

  if (path === "/services/fbr-digital-invoicing") {
    return <FbrDigitalInvoicing />;
  }

  return <Home landingPageData={landingPageData} />;
};

export default App;
