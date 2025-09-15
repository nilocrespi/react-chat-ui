import SideBar from "../components/SideBar/SideBar"
import ChatWindow from "../components/ChatWindow/ChatWindow"
import "./Chat.css"

const Chat = () => {
  return (
    <section>
      <SideBar />
      <ChatWindow />
    </section>
  )
}

export default Chat