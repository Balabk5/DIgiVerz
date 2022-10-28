import "./layouts/uploadPage/UploadPage.css";
import "./layouts/Login/Login.css";
import "./Components/Features/Features.css"
import "./Components/Navbar/Navbar.css";
import "./Components/FeaturesComponents/Modelbuilder/Modelbuilder.css"
import "./Components/sidenav/Sidenav.css"
import "./Components/FeaturesComponents/Modelbuilder/Mbresult.css"
import "./layouts/Uploadcsv/Uploadcsv.css"
import "./Components/FeaturesComponents/Dataquality/Dataquality.css"
import "./Components/FeaturesComponents/Modelbuilder/MBhistory.css"
import "./App.css";


import { NextUIProvider } from "@nextui-org/react";

import Login from "./layouts/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Uploadcsv } from "./layouts/Uploadcsv/Uploadcsv";
import { Navbar } from "./Components/Navbar/Navbar";
import { Features } from "./Components/Features/Features";
import { Modelbuilder } from "./Components/FeaturesComponents/Modelbuilder/Modelbuilder";
import { Sidenav } from "./Components/sidenav/Sidenav";
import { Mbresul } from "./Components/FeaturesComponents/Modelbuilder/Mbresul";

import { MBhistory } from "./Components/FeaturesComponents/Modelbuilder/MBhistory";
import { Dataquality } from "./Components/FeaturesComponents/Dataquality/Dataquality";
import { Dqhistory } from "./Components/FeaturesComponents/Dataquality/Dqhistory";






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
            <Route path="/sidenav" element={<Sidenav/>} />
            <Route path="/modelbuilder" element={<Modelbuilder/>} />
            <Route path="/mbresult" element={<Mbresul/>} />
            <Route path="/mbhistory" element={<MBhistory/>} />
            <Route path="/dataQuality" element={<Dataquality/>} />
            <Route path="/dqhistory" element={<Dqhistory/>} />
          </Routes>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
