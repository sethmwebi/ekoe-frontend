import { FaCheckCircle } from "react-icons/fa";

export const FormSuccess = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/20 p-3 w-full justify-center mb-4 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <FaCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
