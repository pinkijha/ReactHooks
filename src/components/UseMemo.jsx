import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  // State for cart items
  const [query, setQuery] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const products = [
    'Laptop',
    'Mobile',
    'Tablet',
    'Headphones',
    'Smartwatch',
    'Camera',
    'Speaker',
  ];

  // Memoizing filtered products
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...'); // Runs only when `query` changes
    return products.filter((product) =>
      product.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <h1>E-commerce Store</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setCartCount(cartCount + 1)}>Add to Cart ({cartCount})</button>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );

}

export default UseMemo
