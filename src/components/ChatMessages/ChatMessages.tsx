import { forwardRef } from 'react';
import styles from './ChatMessages.module.css';
import { Message, MessageStatus } from '@/types/chat';
import { ChatMessage } from '@/components/ChatMessage/ChatMessage';

export interface ChatMessagesProps {
  chatHistory: Message[];
  status: MessageStatus;
}

export const ChatMessages = forwardRef<HTMLDivElement, ChatMessagesProps>(
  ({ chatHistory, status }, ref) => (
    <div ref={ref} className={styles.messagesWrapper}>
      <div className={styles.messagesContainer}>
        {chatHistory.map((message, index) => {
          const isLastMessage = index === chatHistory.length - 1;

          return (
            <ChatMessage
              key={index}
              role={message.role}
              status={isLastMessage ? status : 'success'}
            >
              {message.content}
            </ChatMessage>
          );
        })}
      </div>
    </div>
  ),
);
