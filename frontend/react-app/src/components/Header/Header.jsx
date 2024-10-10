import "./Header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header_container">
      <div className="logo_container">
        <img
          className="logo_img"
          src="./imgs/files-logo-drive.png"
          alt="logo-drive"
        />
      </div>
      <h3>Manejo de Archivos</h3>
      <Button text="Drive"></Button>
    </div>
  );
}
export default Header;
