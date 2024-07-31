import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Smartphone } from "lucide-react";

const Item = ({ Icon, header, value }) => {
  return (
    <div className="px-4 py-3 flex items-center gap-x-4 shadow-lg rounded-lg font-light">
      <Icon className="h-8 w-auto" />
      <div className="flex flex-col">
        <span className="text-sm">{header}</span>
        <span>{value}</span>
      </div>
    </div>
  );
};
const ReactUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-8 mt-6 md:mt-14">
      <div className="w-full md:w-3/4">
        <h2 className="text-xl font-medium mb-6">Contact Us</h2>
        <div className="flex flex-col gap-y-4">
          <Item
            Icon={MapPin}
            header={"Address:"}
            value={"KM Market, Kenyatta University"}
          />
          <Item
            Icon={Smartphone}
            header={"Phone:"}
            value={"+254 704-387-700"}
          />
          <Item Icon={Mail} header={"Email:"} value={"ekoebrand@gmail.com"} />
        </div>
      </div>
      <form>
        <h2 className="text-xl font-medium mb-4">Leave a Comment</h2>
        <p className="mb-2">
          We will email you as soon as possible, thank you!
        </p>
        <div className="font-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
            <Input type="text" placeholder="Your name" />
            <Input type="text" placeholder="Your email" />
          </div>
          <div className="w-full mb-5">
            <Textarea rows={5} placeholder="Your thoughts" />
          </div>
          <Button className="text-[#f5f5fd] bg-[#ff7a20] dark:bg-[#ff6700] hover:bg-[#ff6700] hover:dark:bg-[#ff7a20]">
            send message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReactUs;
