import React, { useState } from 'react'
import styles from './Chat.module.css'

const MessageInput = ({ handleSendMessage }) => {
  const [currentMessage, setCurrentMessage] = useState('')

  return (
    <form className={styles.messageForm} onSubmit={(e) => handleSendMessage(e, currentMessage, setCurrentMessage)}>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
        className={styles.messageInput}
      />
      <button type="submit" className={styles.sendButton}>
        Enviar
      </button>
    </form>
  )
}

export default MessageInput
