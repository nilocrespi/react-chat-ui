import "../styles/components/ChatList.css"

const contacts = [
  { name: "Vincent Porter", status: "offline", lastConnection: "left 7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "online" },
  { name: "Mike Thomas", status: "online", lastConnection: "online" },
  { name: "Christian Kelly", status: "offline", lastConnection: "left 10 hours ago" },
  { name: "Monica Ward", status: "online", lastConnection: "online" },
  { name: "Dean Henry", status: "offline", lastConnection: "offline since Oct 28" }
]

const ChatList = () => {
  return (
    <ul>
      {contacts.map((contact) => {
        return <li className="contact">
                  <img src="./avatar.jpeg" alt="imagen de perfil"/>
                  <div>
                  <h4>{contact.name}</h4>
                  <p className={contact.status}>{contact.lastConnection}</p>
                  </div>
              </li>
      })}
    </ul>
  )
}

export default ChatList