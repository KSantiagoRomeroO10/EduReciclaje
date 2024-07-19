import React, { useState } from 'react'
import styles from './Chat.module.css'
import MessageInput from './MessageInput'

const Chat = () => {
  const initialMessages = [
    { text: 'Hola, ¿cómo estás?', sender: 'bot' }
  ]

  const [messages, setMessages] = useState(initialMessages)

  const handleSendMessage = (e, currentMessage, setCurrentMessage) => {
    e.preventDefault()
    if (currentMessage.trim()) {
      const newMessages = [...messages, { text: currentMessage, sender: 'user' }]
      setMessages(newMessages)
      setCurrentMessage('')
    }
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messageContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <MessageInput handleSendMessage={handleSendMessage} />
    </div>
  )
}

export default Chat
