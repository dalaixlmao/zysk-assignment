import "./App.css";
import Navbar from "./component/Navbar";
import NewFeature from "./component/NewFeature";
import Sponser from "./component/Sponser";
import Feature from "./component/Features";
import Sysiphus from "./component/Sysiphus";
import Feature1 from "./component/Feature1";
import FAQ from "./component/FAQ";
import Blog from "./component/Blog";
import FreeTrial from "./component/FreeTrial";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="h-screen w-screen overflow-auto">
      <Navbar />
      <NewFeature />
      <Sponser />
      <Feature />
      <Sysiphus />
      <Feature1 />
      <FAQ />
      <Blog />
      <FreeTrial />
      <Footer />
    </div>
  );
}

export default App;
