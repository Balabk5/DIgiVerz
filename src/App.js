import "./layouts/uploadPage/UploadPage.css";
import "./layouts/Login/Login.css";
import "./Components/Features/Features.css"
import "./Components/Navbar/Navbar.css";
import "./App.css";


import { NextUIProvider } from "@nextui-org/react";

import Login from "./layouts/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Uploadcsv } from "./layouts/Uploadcsv/Uploadcsv";
import { Navbar } from "./Components/Navbar/Navbar";
import { Features } from "./Components/Features/Features";
import { Modelbuilder } from "./Components/FeaturesComponents/Modelbuilder/Modelbuilder";





function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/home"
              element={
                <>
                  <Navbar />
                  <Features/>
                  <Modelbuilder/>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                </>
              }
            />
            <Route path="/upload" element={<Uploadcsv />} />
          </Routes>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
