import Counter from "./components/Counter";
import React, {useState} from "react";

function App() {

  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
    <div>
      {isVisible && <Counter />}
      <button onClick={() => setIsVisible(!isVisible)}>Show / Hide</button>
    </div>
    <div>
      <Counter />
    </div>
    </>
  );
}

export default App;
