import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      {products.map((item,id) => (
        <img src={item.thumbnail} key={id} />
      ))}
    </div>
  );
}

export default Products;
