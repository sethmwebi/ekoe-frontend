import axios from "axios";
import Currency from "@/components/Common/Currency";
import ImageItem from "@/components/Common/ImageItem";

const getProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

  return data;
};

const SingleProduct = async ({ params }) => {
  const singleProduct = await getProduct(params.id);
  return (
    <div className="mt-[48px] max-w-6xl mx-auto px-2 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 min-h-[calc(100vh-48px)]">
      <div className="lg:w-2/5">
        <div className="w-[400px] h-[300px] lg:h-96 lg:w-80">
          <img
            className="w-full h-full mr-4 object-cover object-center"
            src={singleProduct.image}
            alt={singleProduct.title}
          />
        </div>
      </div>
      <div className="lg:w-3/5">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            {singleProduct.title}
          </h1>
          <Currency
            product={singleProduct}
            classNames={"text-accent font-bold text-xl md:text-3xl"}
          />
        </div>

        <div className="mt-4">
          <p className="text-sm">{singleProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
