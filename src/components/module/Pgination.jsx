import { sp } from "../../services/numbers";
import styles from "./Pagination.module.css"
function Pgination({ setPage , page }) {
  return (
    <div className={styles.container}>
      <span onClick={() => setPage(1)} className={page===1 ? styles.selected : styles.unselected}>{sp(1)}</span>
      <span onClick={() => setPage(2)} className={page===2 ? styles.selected : styles.unselected}>{sp(2)}</span>
      <span onClick={() => setPage(3)} className={page===3 ? styles.selected : styles.unselected}>{sp(3)}</span>
    </div>
  );
}

export default Pgination;
