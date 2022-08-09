import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import HeadlineCards from "./components/HeadlineCard";
import Food from "./components/Foods";
import Category from "./components/Category";
import "./App.css";

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
