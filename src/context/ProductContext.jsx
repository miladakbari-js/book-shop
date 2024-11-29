import { createContext, useContext, useEffect, useState } from "react";
import api from "../configs/api";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setBooks(await api.get("book?page=1&limit=10"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  return <ProductContext.Provider value={books}>{children}</ProductContext.Provider>
}

const useProducts = (page)=>{
    const products = useContext(ProductContext);
    return products;
}

export default ProductsProvider;
export {useProducts}
