import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeadlineCards from "./components/HeadlineCard";
import Food from "./components/Foods";
import Category from "./components/Category";

function App() {
  return (
    <div className="max-w-[1640px] mx-auto">
      <Navbar />
      <Banner />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
