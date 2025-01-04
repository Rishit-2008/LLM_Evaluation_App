import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyDcki_ONAtWWxUw6zSOjwrVHefbqWsS6D4";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = async () => {
    if (userInput.trim() === "") return;

    setIsLoading(true);
    setIsBotTyping(true);
    try {
      const result = await model.generateContent(userInput);
      const response = await result.response.text();
      alert(response); // Display response in an alert
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setUserInput("");
      setIsLoading(false);
      setIsBotTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div>
      <h1>LLM Evaluation App</h1>
      <textarea
        placeholder="Type your message..."
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleKeyPress}
        disabled={isLoading}
      />
      <button
        onClick={sendMessage}
        disabled={isLoading || isBotTyping}
      >
        Send
      </button>
    </div>
  );
};

export default App;
