import Message from "./Message"

const MessageList = () => {
  return (
    <section class="chat-messages">
      <div class="message sent">
        <p>Hi Aiden, how are you? How is the project coming along?</p>
        <p class="timestamp">10:10 AM, Today</p>
      </div>
      <div class="message received">
        <p>Are we meeting today?</p>
        <p class="timestamp">10:12 AM, Today</p>
      </div>
      <div class="message received">
        <p>Project has been already finished and I have results to show you.</p>
        <p class="timestamp">10:15 AM, Today</p>
      </div>
    </section>
  )
}

export default MessageList