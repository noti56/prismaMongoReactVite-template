import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";

export const axiosErrorHandling = (error: unknown) => {
  console.error(error);
  if (axios.isAxiosError(error)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const axiosError = error as AxiosError<Partial<any>>;
    toast(axiosError?.response?.data?.msg || "An error occurred");
  } else {
    toast("An error occurred");
  }
};
