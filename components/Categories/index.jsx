import { Button } from "../ui/button";
import { CardBody, CardContainer, CardItem } from "../ui/threed-card";
import Image from "next/image";

const categories = [
  {
    url: "https://images.pexels.com/photos/8525494/pexels-photo-8525494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "ekoe adaptive",
  },
  {
    url: "https://images.pexels.com/photos/953266/pexels-photo-953266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "clothing",
  },
  {
    url: "https://images.pexels.com/photos/9540482/pexels-photo-9540482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "bags",
  },
  {
    url: "https://images.pexels.com/photos/13225343/pexels-photo-13225343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "accessories",
  },
];

const Category = ({ url, text }) => {
  return (
    <CardContainer className="relative h-32 sm:h-36 lg:h-48 w-full flex justify-center items-center ">
      <CardBody className="bg-card relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full"
        >
          <Button
            variant="outline"
            className="bg-black/20 hover:bg-black/10 hover:dark:bg-black/20 w-32 border-[1px] border-[#ffb380] dark:border-[#ffa360] hover:border-[#ffa360] hover:dark:border-[#ffb380] absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[100] capitalize font-light text-[#f5f5fd] hover:text-[#f5f5fd]"
          >
            {text}
          </Button>
          <Image
            src={url}
            height="1000"
            width="1000"
            className="h-24 sm:h-28 lg:h-32 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

const Categories = () => {
  return (
    <div className="container mb-10 md:mb-20 grid gap-4 sm:grid-cols-2 sm:gap-2 md:grid-cols-4 md:gap-4">
      {categories.map((cat, idx) => (
        <Category key={`cat-${idx}`} url={cat.url} text={cat.text} />
      ))}
    </div>
  );
};
export default Categories;
