import DateToday from "./script/datetoday";
import { useNavigate } from "react-router-dom";

function Managepage() {
  const navigate = useNavigate();

  return (
    
    <div> 
     <DateToday />
     <h1>Manage Page</h1>   

      <div id="menu-tab">
       <button onClick={() => navigate("/mainpage")}>Main Page</button>
      </div>

    </div>


  );
}

export default Managepage;
