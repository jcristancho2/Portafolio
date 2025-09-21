// src/api/index.js
import axios from "axios";

const API_URL =  process.env.REACT_APP_API_URL;

export const sendWhatsApp = async (contact) => {
  return await axios.post(`${API_URL}/whatsapp/send`, contact);
};

export const sendEmail = async (to, subject, message) => {
  return await axios.post(`${API_URL}/email/send`, {
    to,
    subject,
    message,
  });
};
