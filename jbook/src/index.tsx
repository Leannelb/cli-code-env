import { useState } from "react";
import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {

  const [input, setInput] = useState('');


  const onClick = () => {
    console.log(input);
  }
  return (
    <>
      <div>
        <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
        <div>
          <button onClick={onClick}>Submit</button>
        </div>
        <pre></pre>
      </div>
    </>
  )

};

export default App;
