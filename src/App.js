import React from "react";
import Navbar from "./component/Navbar"
import Start from "./component/Start";
import Section2 from "./component/Section2";
import Section3 from "./component/Section3";
import Section4 from "./component/Section4";
import Section5 from "./component/Section5";
import Fouter from "./component/Fouter";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Start />
    <Section2 />
     <Section3 /> 
     <Section4 />
     <Section5 />
     <Fouter />
    </div>
  );
}

export default App;
