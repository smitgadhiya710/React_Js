import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header_Navbar from "./components/Header_Navbar";
import Poweredby from "./components/Poweredby";
import Footer from "./components/Footer";
import Process from "./components/Process";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Header_Navbar/>
    <Poweredby/>
    <Process/>
    <Footer/>
    
    </>
  );
}

export default App;
