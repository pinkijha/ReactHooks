import React, { useMemo, useState } from "react";

const UseMemoHooks = () => {
  const [search, setSearch] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const productList = [
    "Mobile",
    "Car",
    "Charger",
    "Laptop",
    "MacBook",
    "Headphone",
    "AirPods",
    "Monitor",
  ];

  const serachProduct = (e) => {
    setSearch(e.target.value);
  };

  const increment = () => {
    setCartCount(cartCount + 1);
  };

  const decrement = () => {
    setCartCount(cartCount - 1);
  };

  // filter Products
  const filteredProducts = useMemo(() => {
    console.log("filtering Product...");
    return productList.filter((product) => {
        return product.toLowerCase().includes(search.toLowerCase());
    });
  }, [search]);

  return (
    <div>
      <h1>Search Products</h1>
      <input
        placeholder="serch product"
        value={search}
        onChange={serachProduct}
        type="text"
      />
      <button onClick={decrement}> - </button>
      <span> Add to cart ({cartCount}) </span>{" "}
      <button onClick={increment}>+</button>
      <ul>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default UseMemoHooks;
