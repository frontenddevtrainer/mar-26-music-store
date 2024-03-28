import ProductListing from "./listing";

const ProductsPage = async () => {
  const response = await fetch("http://localhost:3000/api/search", {
    next: { revalidate: 1 },
  });
  const { products, total } = await response.json();

  return <ProductListing products={products} total={total} />;
};

export default ProductsPage;
