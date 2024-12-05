import { createContext, useContext, useEffect, useState } from "react";
import api from "../configs/api";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <ProductContext.Provider value={{ data, setData }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useGetProducts = (page, perPage = 10) => {
  const { data, setData } = useContext(ProductContext);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get(`book?page=${page}&limit=${perPage}`);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, [page]);
  return data;
};
export default ProductsProvider;
