import NavBar from "./components/navbar/navbar";
import Excersise from "./pages/excersise/excersise";
import Food from "./pages/food";
import Goals from "./pages/goals/goals";
import Home from "./pages/home/home";
import "./styles.css";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excersise" element={<Excersise />} />
        <Route path="/foods" element={<Food />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </div>
  );
}
