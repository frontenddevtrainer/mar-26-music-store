"use client";

import { useEffect, useState } from "react";

const ProductListing = ({
  products,
  total,
}: {
  products: any[];
  total: number;
}) => {
  const [items, setItems] = useState(products);
  const [searchText, setSearchText] = useState("");
  const [totalItems, setTotalItem] = useState(total);
  const [selectedPage, setSelectedPage] = useState(1);

  const totalPages = Math.ceil(totalItems / 50);

  useEffect(() => {
    const getProducts = async (searchText: string) => {
      const url = `http://localhost:3000/api/search?${searchText !== "" ? `query=${searchText}` : ""}&${selectedPage !== 1 ? `page=${selectedPage}` : ""}`;

      const response = await fetch(url, );
      const { products, total } = await response.json();
      setItems(products);
    };

    getProducts(searchText);
  }, [searchText, selectedPage]);

  return (
    <>
      {Array(totalPages)
        .fill(null)
        .map((_, index) => {
          return (
            <button
              onClick={() => {
                setSelectedPage(index + 1);
              }}
              className="p-1 border border-green-50"
            >
              {index + 1}
            </button>
          );
        })}
      <input
        style={{ color: "black" }}
        onChange={(e) => {
          // Debounce
          setSearchText(e.target.value);
        }}
      />
      <ul>
        {items?.map((product, index) => {
          return (
            <li key={product._id}>
              {index + 1}: {product.product_name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductListing;
