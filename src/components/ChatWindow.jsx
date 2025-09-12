import ChatHeader from "./ChatHeader"
import MessageList from "./MessageList"
import ChatFooter from "./ChatFooter"

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