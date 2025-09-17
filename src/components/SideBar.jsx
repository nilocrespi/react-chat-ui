import SearchBar from "./SearchBar"
import ChatList from "./ChatList"
import "../styles/components/SideBar.css"

const SideBar = () => {
  return (
    <aside className = "sidebar">
      <SearchBar />
      <ChatList />
    </aside>
  )
}

export default SideBar