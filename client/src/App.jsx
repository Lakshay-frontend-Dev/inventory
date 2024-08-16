import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { Outlet } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponents from "./components/FooterComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavbarComponents />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <FooterComponents />
    </>
  );
}

export default App;
