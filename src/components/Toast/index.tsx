import { toast } from 'react-toastify';

export const successToast = (text: string) => {
  return toast.success(text, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    closeOnClick: true,
    hideProgressBar: true,
  });
};

export const errorToast = (text: string) => {
  return toast.error(text, {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 1000,
    closeOnClick: true,
    hideProgressBar: true,
  });
};
