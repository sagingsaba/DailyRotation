import { useNavigate } from "react-router-dom";
import DateToday from "./script/datetoday";

function Index() {
  const navigate = useNavigate();

  return (
    <div>
      <DateToday />
      <img></img>
      <h1>Daily Rotation</h1>
      <p>Time to serve your sentence in the prison</p>
      <button onClick={() => navigate("/mainpage")}>Get Started</button>
    </div>
  );
}

export default Index;
