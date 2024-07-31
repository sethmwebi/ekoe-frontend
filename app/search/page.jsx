import Product from "@/components/products/Product";

const Search = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return (
    <div className="container mt-10">
      <div className="col-span-12 gap-4 grid grid-cols-1 my-8 place-items-center sm:grid-cols-2 md:grid-cols-3">
        {products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;
