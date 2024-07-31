const ProductTags = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((product, index) => (
        <li
          key={`product-tag-${index}`}
          className="border border-black/[0.1] px-3 py-2 text-gray-600/75 cursor-pointer"
        >
          {product}
        </li>
      ))}
    </ul>
  );
};

export default ProductTags;
