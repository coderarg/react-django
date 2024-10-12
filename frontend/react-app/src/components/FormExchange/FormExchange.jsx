import "./FormExchange.css";
import { useState, useRef, useEffect } from "react";

function FormExchange() {
  const dolarInput = useRef(null);
  const [rate, setRate] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const callApiExchange = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/6ca3610dfc6c36ac41db00e9/latest/EUR`
        );
        const datos = await response.json();

        setRate(datos.conversion_rates.USD);
      } catch (error) {
        console.log("El error es", error);
      }
    };

    callApiExchange();
  }, []);

  const doExchange = () => {
    setAmount(dolarInput.current.value * parseFloat(rate));
  };

  return (
    <div className="form_exchage">
      <label htmlFor="dollars">Dolares</label>
      <input ref={dolarInput} id="dollars" type="float" placeholder="00.00" />
      <button className="dolar_button" onClick={doExchange}>
        Submit
      </button>
      <p>Euros: $ {amount.toFixed(2)}</p>
    </div>
  );
}

export default FormExchange;
