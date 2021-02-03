import Header from "./Components/View/Header";
import World from "./Components/View/World";
import Anywhere from "./Components/View/Anywhere";
import Discover from "./Components/View/Discover";
import Footer from "./Components/View/Footer";
import Community from "./Components/View/Community";
import bg from "./Img/background.jpg";

function App() {
  return (
    <div>
      <div className="bg-image">
      <Header/>
      <World/>
      </div>
      <Anywhere/>
      <Discover/>
      <Community/>
      <Footer/>
    </div>
  );
}

export default App;
