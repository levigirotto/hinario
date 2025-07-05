import styles from "./HymnCard.module.css";
import { useNavigate } from "react-router-dom";

function HymnCard(props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/hymns/${props.number}`);
      }}
      className={styles.hymncard}
    >
      <h2 className={styles.hymnnumber}>{props.number}</h2>
      <div className={styles.contentdiv}>
        <h3 className={styles.hymntitle}>{props.title}</h3>
        <p className={styles.description}>{props.lyrics.slice(0, 60)}...</p>
      </div>
    </div>
  );
}

export default HymnCard;
