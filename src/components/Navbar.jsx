import React, { useContext } from "react";
import { LanguageContext } from "../App";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <ul className="navbar-nav container d-flex align-items-center justify-content-between w-100 p-2">
            <li className="fw-bold text-white"><a>LOGO</a></li>
            <button onClick={() => setLanguage(language === "en" ? "id" : "en")} className="btn btn-outline-light">
                {language === "en" ? "EN" : "ID"}
            </button>
        </ul>
    </nav>
  )
}

export default Navbar;