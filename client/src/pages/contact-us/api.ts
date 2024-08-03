import { FormData } from './types';

export const sendData =async (data: FormData) => {
  const url = 'https://mail-verification.onrender.com/send-message';
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((dt) => dt)
    .catch((err) => {
      throw new Error(err.message);
    });
};
