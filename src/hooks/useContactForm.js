import { useState } from "react";
import apiClient from "./apiClient";
const useContactForm = () => {
    const [loading, setLoading] = useState(false);
  
    const sendContactForm = async (data) => {
      try {
        setLoading(true);
        await apiClient.post("/api/contact", data);
        return true;
      } catch (err) {
        if (err.response && err.response.data) {
          return err.response.data;
        }
        return "Error al enviar el mensaje";
      } finally {
        setLoading(false);
      }
    };
  
    return {
      sendContactForm,
      loading,
    };
  };
  

export default useContactForm;
