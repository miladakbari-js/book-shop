import BookCard from "../components/module/BookCard";
import { useProducts } from "../context/ProductContext";
import styles from "./HomePage.module.css"


function HomePage() {
  const products = useProducts();
  console.log(products.data?.data);
  
  return <div className={styles.container}>
    {products.data?.data.map(book=><BookCard key={book.id} data={book}/>)}
  </div>;
}

export default HomePage;
