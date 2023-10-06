import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <h2>Fitnesss..</h2>

      <div>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/excersise">Excersise</NavLink>

        <NavLink to="/foods">Food</NavLink>

        <NavLink to="/goals">Goals</NavLink>
      </div>
    </div>
  );
}
