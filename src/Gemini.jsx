import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "gemini_api_key";

const genAI = new GoogleGenerativeAI(apiKey);

export const fetchResponse = async (input) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent([input]);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    return text;
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    throw new Error(`Gemini Error: ${error.message}`);
  }
};
