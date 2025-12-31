
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCourseRecommendation(userGoal: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `El usuario dice: "${userGoal}". Recomienda cuál de nuestros enfoques (Matemáticas Avanzadas o IA) debería priorizar y por qué, en un tono profesional y motivador. Responde en español y sé breve (máximo 3 frases).`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching Gemini recommendation:", error);
    return "Lo sentimos, nuestro asesor de IA está descansando. ¡Contáctanos por WhatsApp para una asesoría personalizada!";
  }
}
