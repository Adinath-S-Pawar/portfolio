import React, { useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import './ChatWindow.css';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface ChatWindowProps {
    messages: Message[];
    isLoading: boolean;
    onSend: (message: string) => void;
    onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
    messages,
    isLoading,
    onSend,
    onClose
}) => {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const suggestedQuestions = [
        "What projects have you built?",
        "What are your skills?",
        "Tell me about your education"
    ];

    return (
        <div className="chat-window">
            <div className="chat-header">
                <div className="chat-header-info">
                    <h3>Ask me anything</h3>
                    <span className="subtitle">Powered by AI</span>
                </div>
                <button className="chat-close-btn" onClick={onClose}>
                    ✕
                </button>
            </div>

            <div className="chat-messages">
                {messages.length === 0 ? (
                    <div className="chat-welcome">
                        <p>Hi there! I'm an AI assistant trained on Adinath's professional background. How can I help you today?</p>
                        <div className="suggested-questions">
                            {suggestedQuestions.map((q, i) => (
                                <button
                                    key={i}
                                    className="suggested-chip"
                                    onClick={() => onSend(q)}
                                >
                                    {q}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : (
                    messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message-bubble ${msg.role === 'user' ? 'user' : 'assistant'}`}
                        >
                            <div
                                className="message-content"
                                dangerouslySetInnerHTML={{
                                    __html: msg.content
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
                                        .replace(/\n/g, '<br/>')
                                }}
                            >
                            </div>
                        </div>
                    ))
                )}

                {isLoading && (
                    <div className="message-bubble assistant typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput onSend={onSend} isLoading={isLoading} />
        </div>
    );
};

export default ChatWindow;
