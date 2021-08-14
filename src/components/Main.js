import Clock from "./Clock";
import "./Main.scss";

const Main = () => {
  return (
    <main className="main">
      <div className="main_info">
        <p className="main_info_text">11:42 AM</p>
        <p className="main_info_text">1/5 Completed</p>
        <p className="main_info_text"></p>
      </div>
      <div className="main_content">
        <div className="main_content_timer">
          <Clock />
        </div>
        <div className="main_content_tasks"></div>
      </div>
    </main>
  );
};

export default Main;
