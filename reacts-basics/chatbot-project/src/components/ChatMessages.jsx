import { useAutoScroll } from './useAutoScroll.jsx';
import { ChatMessage } from './ChatMessage.jsx';
import './ChatMessages.css';

export function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);
  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
            time={chatMessage.time}
          />
        );
      })}
    </div>
  );
}

export default ChatMessages;
