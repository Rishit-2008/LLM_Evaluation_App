import axios from 'axios';

const apiKey = "open_ai_api_key";

export const evaluateResponse = async (responses) => {
  const evaluationPrompt = `
Please evaluate these AI responses objectively:

Response A:
${responses.Gemini}

Response B:
${responses.GPT}

Compare these responses based on:
1. Accuracy and factual correctness
2. Completeness and detail
3. Clarity and coherence
4. Relevance to the prompt

Provide:
1. A brief analysis of each response
2. Identify which response (A or B) is better overall
3. Explain your reasoning in detail
4. End your response with exactly one line stating "Better response: [A/B]"`;

  try {
    const result = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are an objective evaluator of AI responses. Analyze responses without bias or preference for any specific AI model. Focus solely on the content quality."
          },
          {
            role: "user",
            content: evaluationPrompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const evaluationText = result.data.choices[0].message.content;
    
    
    const lastLine = evaluationText.split('\n').filter(line => line.trim()).pop();
    const betterResponse = lastLine.includes('A') ? 'Gemini' : 'GPT';
    
    return {
      bestResponse: responses[betterResponse],
      bestLLM: betterResponse === 'GPT' ? 'GPT 3.5' : 'Gemini Pro',
      evaluation: evaluationText
    };
  } catch (error) {
    console.error("Error in evaluation:", error.response?.data || error);
    throw new Error(`Evaluation Error: ${error.response?.data?.error?.message || error.message}`);
  }
};