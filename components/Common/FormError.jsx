import { FaExclamationTriangle } from "react-icons/fa";

export const FormError = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-red-300/50 p-3 w-full rounded-md flex items-center justify-center mb-4 gap-x-2 text-sm text-red-400">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};
