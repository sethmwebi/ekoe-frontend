import Image from "next/image";

const WriterBio = ({ writer }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full items-center">
      <div className="w-24 h-24 flex">
        <div className="h-20 w-20 rounded-full overflow-hidden relative self-center">
          <Image
            src={writer.image}
            alt={writer.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <p className="tracking-wider font-medium text-lg mb-2 text-center sm:text-left">
          {writer.name}
        </p>
        <p className="font-light">{writer.bio}</p>
      </div>
    </div>
  );
};

export default WriterBio;
