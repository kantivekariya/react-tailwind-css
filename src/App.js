import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeadlineCards from "./components/HeadlineCard";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <HeadlineCards />
    </div>
  );
}

export default App;
