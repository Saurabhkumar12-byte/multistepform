import { useState, useContext, createContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Box from "./components/Box";
export const cardnum = createContext();
export const cardnumFunc = createContext();
function App() {
  const [cardActive, setcardActive] = useState(1);

  return (
    <div className="App">
      <cardnumFunc.Provider value={setcardActive}>
      <cardnum.Provider value={cardActive}>
        <Box />
      </cardnum.Provider>
      </cardnumFunc.Provider>
    </div>
  );
}

export default App;
