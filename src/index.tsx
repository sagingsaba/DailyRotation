//homepage

import DateToday from "./script/datetoday";
const goToMainPage = () => {
  window.location.href = "/src/pages/mainpage.html"; 
};

function Index() {
  return (

<body>
  <div>Daily Rotation</div>
  <div><DateToday/></div>
  <button onClick={goToMainPage}>
    Get Started
  </button>
  
</body>
  )
}

export default Index;
