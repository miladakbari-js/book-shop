import bookimage from "../../images/bookimage.jpg";
import shopping_cart from "../../images/shopping-cart.png";
import { sp } from "../../services/numbers";
import styles from "./BookCard.module.css";

function BookCard({ book }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img src={bookimage} alt="book_image" />
        <h4>جنایت و مکافات</h4>
      </div>
      <div className={styles.shop}>
        <p>{sp(250)} هزار تومان</p>
        <img src={shopping_cart} />
      </div>
    </div>
  );
}

export default BookCard;
