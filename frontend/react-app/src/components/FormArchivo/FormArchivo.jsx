import "./FormArchivo.css";
import Button from "../Button/Button";
function FormArchivo() {
  return (
    <form className="form_archivos" action="">
      <input className="form_archivo-input-file" type="file" />
      <Button type={"submit"} text={"Cargar Archivo"} />
    </form>
  );
}

export default FormArchivo;
