import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import SoundSection from "./components/SoundSection";
import DisplaySection from "./components/DisplaySection";
import WebgiViewer from "./components/WebgiViewer";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
function App() {

  return (
    <div className="App">
      <Loader/>
      <Nav/>
      <Jumbotron/>
      <SoundSection/>
      <DisplaySection/>
      <WebgiViewer/>
      <Footer/>
    </div>
  );
}

export default App;
