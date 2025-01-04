import axios from 'axios';

const apiKey = "open_ai_api_key";

export const fetchResponse = async (input) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful AI assistant that provides clear, accurate, and detailed responses.'
          },
          {
            role: 'user',
            content: input
          }
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        }
      }
    );

    if (response.data.choices && response.data.choices[0]?.message?.content) {
      return response.data.choices[0].message.content.trim();
    } else {
      throw new Error('Invalid response format from GPT API');
    }
  } catch (error) {
    console.error("Error fetching GPT response:", error.response?.data || error.message);
    throw new Error(`GPT Error: ${error.response?.data?.error?.message || error.message}`);
  }
};