const ChatHeader = () => {
  return (
    <section className="chat-header">
      <div className="chat-active">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <h3>Aiden Chavez</h3>
        <p>Last seen: 2 hours ago</p>
      </div>
      <div className="chat-actions">
        <button title="Sacar foto">📷</button>
        <button>🖼️</button>
        <button>⚙️</button>
        <button>❓</button>
      </div>
    </section>
  )
}

export default ChatHeader