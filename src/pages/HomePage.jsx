import BookCard from "../components/module/BookCard";
import { useProducts } from "../context/ProductContext";
import styles from "./HomePage.module.css";
import Pagination from "../components/module/Pgination";
import { useState } from "react";

function HomePage() {
  const [page , setPage] = useState(1);
  const products = useProducts(page);

  return (
    <div className={styles.container}>
      <Pagination setPage={setPage}/>
      {products.data?.data.map((book) => (
        <BookCard key={book.id} data={book} />
      ))}
    </div>
  );
}

export default HomePage;
