import { createContext, useState,useEffect } from "react";
import { addColectionAndDocuments } from "../utils/firebase/firebase.utils";
import SHOP_DATA from "../shop-data";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
addColectionAndDocuments('category', SHOP_DATA)
  },[])

  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
