const ChatList = () => {
  return (
    <ul className="contact-list">
      <li className="contact">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Vincent Porter</h4>
          <p className="status offline">left 7 mins ago</p>
        </div>
      </li>
      <li className="contact active">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Aiden Chavez</h4>
          <p className="status online">online</p>
        </div>
      </li>
      <li className="contact">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Mike Thomas</h4>
          <p className="status online">online</p>
        </div>
      </li>
      <li className="contact">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Christian Kelly</h4>
          <p className="status offline">left 10 hours ago</p>
        </div>
      </li>
      <li className="contact">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Monica Ward</h4>
          <p className="status online">online</p>
        </div>
      </li>
      <li className="contact">
        <img src="../../public/avatar.jpeg" alt="imagen de perfil"/>
        <div>
          <h4>Dean Henry</h4>
          <p className="status offline">offline since Oct 28</p>
        </div>
      </li>
    </ul>
  )
}

export default ChatList