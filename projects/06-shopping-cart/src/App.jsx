import { useState } from "react";

import { Products } from "./components/Products";
import { products as initialProducts } from "./mocks/products.json";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function useFilters() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  //PARA JUNIORS---------
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };
  return { filterProducts, setFilters, filters };
}

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts, setFilters, filters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      <Footer filters={filters} />
    </>
  );
}

export default App;
