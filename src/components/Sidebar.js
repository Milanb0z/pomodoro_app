import { ImCalendar, ImClock } from "react-icons/im";
import { GoGraph } from "react-icons/go";

import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar_links">
        <li className="sidebar_links_icon active ">
          <ImClock />
        </li>
        <li className="sidebar_links_icon">
          <ImCalendar />
        </li>
        <li className="sidebar_links_icon">
          <GoGraph />
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
