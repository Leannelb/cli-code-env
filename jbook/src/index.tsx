import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return <h1>hi</h1>;
};

//testing project 
root.render(<App />);
