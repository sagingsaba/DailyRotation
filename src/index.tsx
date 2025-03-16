import { useNavigate } from "react-router-dom";
import DateToday from "./script/datetoday";

function Index() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Daily Rotation</h1>
      <DateToday />
      <button onClick={() => navigate("/mainpage")}>Get Started</button>
    </div>
  );
}

export default Index;
