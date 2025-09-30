import { useEffect, useState } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import { Chatbot } from 'supersimpledev';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css';

export function App() {
  const [chatMessages, setChatMessages] = useState(() => {
  try {
    const stored = localStorage.getItem('messages');
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des messages depuis localStorage:', error);
    return [];
  }
});


  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0]; // current value of the state
  // const setChatMessages = array[1]; // function to update the state

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: 'Goodbye! Have a great day!',
      'Who is the best?': 'Of course, it is you, Mikey!',
      'give me a unique id': () => `Your unique ID is ${crypto.randomUUID()}`,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </div>
  );
}
