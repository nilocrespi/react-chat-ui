import ChatHeader from "../ChatHeader/ChatHeader"
import MessageList from "../MessageList/MessageList"
import ChatFooter from "../ChatFooter/ChatFooter"

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