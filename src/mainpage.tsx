import DateToday from "./script/datetoday";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  const navigate = useNavigate();

  return (
    <div> 
      <div><DateToday /></div>
        <div>
        <h1>Today's Prisoners</h1>
        <img src="" alt="" />
        </div>

        <div>
          <div className="cards">
          <img src="" alt="" />
          <h5></h5>
          </div>
        </div>

        <div id="menu-tab">
        <button onClick={() => navigate("/managepage")}>Manage</button>
        </div>
    </div>

  );
}

export default Mainpage;
