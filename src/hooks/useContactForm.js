import { useState } from "react";

const useContactForm = () => {
    const [loading, setLoading] = useState(false);
  
    const sendContactForm = async (data) => {
      try {
        setLoading(true);
        
        // Usar ruta relativa para que funcione en desarrollo y producción
        const apiUrl = import.meta.env.VITE_API_URL || '/services/api/_send-email.php';
        
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          return true;
        } else {
          return result.error || result.message || "Error al enviar el mensaje";
        }
      } catch (err) {
        console.error('Error en sendContactForm:', err);
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
