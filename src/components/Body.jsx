import Posts from './Posts'
import Sidebar from './SideBar'
import Stories from './Stories'

export default function Body() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <Sidebar />
    </div>
  )
}
