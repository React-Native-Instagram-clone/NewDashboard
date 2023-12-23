import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import './App.css'
import RegistrationForm from "./scenes/form/RegistrationForm";
import LoginForm from "./scenes/form/LoginForm";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Insert from "./components/Insert";
import EmailUtility from './components/Email'
import JwelleryGrid from "./AgGrid/JwelleryGrid";
import DiamondGrid from "./AgGrid/DiamondGrid";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/registration" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/insert" element={<Insert />} />
              <Route path="/emailutility" element={<EmailUtility />} />
              <Route path='/jwellery' element={<JwelleryGrid />} />
              <Route path ='diamond' element={<DiamondGrid/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
