import React, { useState } from 'react'

const UseMemoHooks = () => {
    const [search, setSearch] = useState('');
    const [cartCount, setCartCount] = useState(0);
    const productList =[
       'Mobile',
       'Car',
       'Charger',
       'Laptop',
       'MacBook',
       'Headphone',
        'AirPods',
        'Monitor',
    ]

    const serachProduct = (e) => {
        setSearch(e.target.value);
        console.log(search)
    }

    const ClickHandler = (() =>{
       setCartCount(cartCount+1)
    })

    // filter Products
    const filterProduct = productList.filter((pro) => {
        return pro.toLowerCase().includes(search.toLowerCase());
    })

    console.log("filtering Product...")

  return (
    <div>
      <h1>Search Products</h1>
      <input placeholder='serch product' value={search} onChange={serachProduct} type='text' />
      <button onClick={ClickHandler}> Add to cart ({cartCount})</button>
      <ul>
        {filterProduct.map((product,index)=>(
            <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  )
}

export default UseMemoHooks
