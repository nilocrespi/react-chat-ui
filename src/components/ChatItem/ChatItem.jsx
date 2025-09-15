import "./ChatItem.css"

const ChatItem = () => {
  return (
    <li className="contact">
      <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
      <div>
        <h4>Vincent Porter</h4>
        <p className="status offline">left 7 mins ago</p>
      </div>
    </li>
  )
}

export default ChatItem