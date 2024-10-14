import Header from "./components/Header/Header";
import FormArchivo from "./components/FormArchivo/FormArchivo";
import FormExchange from "./components/FormExchange/FormExchange";

import "./App.css";

function App() {
  return (
    <>
      <main>
        <h1 className="dolares_cambio-titulo">Cambio Dólar a Euro</h1>
        <FormExchange></FormExchange>
      </main>
    </>
  );
}

export default App;
