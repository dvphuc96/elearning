import { isAxiosError } from "axios";
import { toast } from "react-toastify";

export const handleError = (error, message) => {
  if (isAxiosError(error)) {
    toast.error(message || error);
  }
};
