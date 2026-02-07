import axios from "axios";

class WhatsAppService {
  static async sendTemplateMessage({ phone, templateName, language = "en", parameters = [] }) {
    try {
      const payload = {
        messaging_product: "whatsapp",
        to: phone,
        type: "template",
        template: {
          name: templateName,
          language: { code: language },
          components: [
            {
              type: "body",
              parameters: parameters.map(p => ({
                type: "text",
                text: p
              }))
            }
          ]
        }
      };

      const response = await axios.post(
        `${process.env.WHATSAPP_API_URL}/${process.env.WHATSAPP_PHONE_NUMBER_ID}/messages`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
            "Content-Type": "application/json"
          }
        }
      );

      return response.data;
    } catch (error) {
      console.error("WhatsApp Error:", error.response?.data || error.message);
      throw error;
    }
  }
}

export default WhatsAppService;
