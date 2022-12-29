import React from "react";
import Navbar from "./component/Navbar"
import Start from "./component/Start";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Start />
    <Section2 />
     <Section3 /> 
     <Section4 />
    </div>
  );
}

export default App;
