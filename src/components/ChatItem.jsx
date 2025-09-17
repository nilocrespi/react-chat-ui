import "../styles/components.css"

const ChatItem = () => {
  return (
    <li className="contact">
      <img src="./avatar.jpeg" alt="imagen de perfil"/>
      <div>
        <h4>{contact.name}</h4>
        <p className={contact.status}>{contact.lastConnection}</p>
      </div>
    </li>
  )
}

export default ChatItem