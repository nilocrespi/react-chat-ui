import SearchBar from "../SearchBar/SearchBar"
import ChatList from "../ChatList/ChatList"

const SideBar = () => {
  return (
    <aside className = "sidebar">
      <SearchBar />
      <ChatList />
    </aside>
  )
}

export default SideBar