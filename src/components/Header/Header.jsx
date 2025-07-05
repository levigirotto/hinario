import { GrPrevious } from "react-icons/gr";
import { GoHomeFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const navigate = useNavigate();

  function goToHome() {
    navigate("/");
  }

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <button className={styles.homebutton} onClick={goToHome}>
          <GrPrevious /> <GoHomeFill />
        </button>
      </div>
      <p className={styles.title}>Hinário</p>
    </header>
  );
}

export default Header;
