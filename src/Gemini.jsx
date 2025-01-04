import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "gemini_api_key";

const genAI = new GoogleGenerativeAI(apiKey);

export const fetchResponse = async (input) => {
  try {
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.7,
        topK: 1,
        topP: 0.8,
        maxOutputTokens: 500,
      }
    });

    // Generate content
    const result = await model.generateContent(input);
    const response = await result.response;
    
    if (!response.text()) {
      throw new Error('Empty response from Gemini API');
    }

    return response.text();
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    throw new Error(`Gemini Error: ${error.message}`);
  }
};