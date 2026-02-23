import React, { useState } from 'react';
import ChatWindow from './ChatWindow';
import { useChat } from '../../hooks/useChat';
import './ChatWidget.css';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, isLoading, send } = useChat();

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`chat-widget-button ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <svg
            className="close-icon"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg
            className="chat-icon"
            viewBox="0 0 24 24"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </div>

      {isOpen && (
        <ChatWindow
          messages={messages}
          isLoading={isLoading}
          onSend={send}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ChatWidget;