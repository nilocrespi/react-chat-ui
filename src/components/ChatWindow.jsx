import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import ChatFooter from "./ChatFooter"
import "../styles/components/ChatWindow.css"

const ChatWindow = () => {
  return (
    <main className = "chat">
      <ChatHeader />
      <MessageList />
      <ChatFooter />
    </main>
  )
}

export default ChatWindow