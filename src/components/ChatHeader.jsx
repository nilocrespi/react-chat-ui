const ChatHeader = () => {
  return (
    <section class="chat-header">
      <div class="chat-active">
        <img src="./assets/avatar.jpeg" alt="imagen de perfil"/>
        <h3>Aiden Chavez</h3>
        <p>Last seen: 2 hours ago</p>
      </div>
      <div class="chat-actions">
        <button title="Sacar foto">📷</button>
        <button>🖼️</button>
        <button>⚙️</button>
        <button>❓</button>
      </div>
    </section>
  )
}

export default ChatHeader