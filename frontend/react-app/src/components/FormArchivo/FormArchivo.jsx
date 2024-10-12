import "./FormArchivo.css";
import Button from "../Button/Button";
import { useState } from "react";

function FormArchivo() {
  const { fileInput, setFileInput } = useState(null);
  const submitForm = () => {
    const file = e.Target.Value;
  };
  return (
    <form
      className="form_archivos"
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        submitForm();
      }}
    >
      <input className="form_archivo-input-file" type="file" />
      <Button type={"submit"} text={"Cargar Archivo"} />
    </form>
  );
}

export default FormArchivo;
