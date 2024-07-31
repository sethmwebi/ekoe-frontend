import { BiLogoFacebook } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Share = () => (
  <div className="flex gap-4">
    <p className="tracking-wider font-light">Share:</p>
    <div className="flex gap-x-6 items-baseline">
      <BiLogoFacebook size={20} className="cursor-pointer" />
      <FaTwitter size={18} className="cursor-pointer" />
      <FaInstagram size={18} className="cursor-pointer" />
    </div>
  </div>
);

export default Share;
