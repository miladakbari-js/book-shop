import BookCard from "../components/module/BookCard";
import { useGetProducts } from "../context/ProductContext";
import styles from "./HomePage.module.css";
import Pagination from "../components/module/Pgination";
import { useState } from "react";


function HomePage() {
  const [page, setPage] = useState(1);
  const products = useGetProducts();
  
  
  return (
    <>
      <div className={styles.container}>
        {products.data?.data.map((book) => (
          <BookCard key={book.id} data={book} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination setPage={setPage} page={page}/>
      </div>
    </>
  );
}

export default HomePage;
