import React from "react";
import Background from "./Components/Background";
import Foregorund from "./Components/Foregorund";


const App = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800">
      <Background></Background>

      <Foregorund></Foregorund>
 
    </div>
  );
};

export default App;
