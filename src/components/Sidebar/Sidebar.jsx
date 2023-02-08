import MenuBar from './MenuBar';
import './Sidebar.css';
import User from './User';

export default function SideBar(props) {
    return (
        <aside className="sidebar">
            <MenuBar />
            <User />
        </aside>
    )
}