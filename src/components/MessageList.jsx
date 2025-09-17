import Message from "./Message"
import "../styles/components/MessageList.css"

const MessageList = () => {
  return (
    <section className="chat-messages">
      <Message/>
    </section>
  )
}

export default MessageList