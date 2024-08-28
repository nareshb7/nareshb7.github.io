import { useState } from 'react';
import { sendData } from './api';
import { FormData } from './types';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
const INITIAL_MESSAGE = {
  type: '',
  content: '',
};

const SUCCESS_MESSAGE =
  'Mail sent Successfully, You will receive a confirmation mail from My team..!';
const ERROR_MESSAGE = 'Error Occured, while sending  mail please try again...';
const VALIDATION_MESSAGE = 'Please fill the required fields..!';

export const useContactus = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(INITIAL_MESSAGE);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMessage(INITIAL_MESSAGE);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const checkFormIsValid =()=> {
    return Object.values(formData).filter(val => val).length === 4
  }
  const handleSend = () => {
    const isValid = checkFormIsValid()
    if (isValid) {
      setIsLoading(true);
      sendData(formData)
        .then(() => {
          setFormData(INITIAL_FORM_DATA);
          setMessage({
            type: 'SUCCESS',
            content: SUCCESS_MESSAGE,
          });
        })
        .catch((_) => {
          setMessage({
            type: 'ERROR',
            content: ERROR_MESSAGE,
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setMessage({
        type: 'ERROR',
        content: VALIDATION_MESSAGE,
      });
    }
  };
  return {
    formData,
    message,
    isLoading,
    handleChange,
    handleSend,
  };
};
