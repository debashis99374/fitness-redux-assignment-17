import { useState, useEffect } from "react";
import "./excersiseModal.css";
import { useDispatch } from "react-redux";
import { addExcersise } from "../../actions";

export default function ExcersiseModal({ setOpen }) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    if (name === "Cardio") {
      setCalories(50);
    } else if (name === "Push-ups") {
      setCalories(70);
    } else if (name === "Shit-ups") {
      setCalories(30);
    } else if (name === "Crunches") {
      setCalories(40);
    } else if (name === "Chin-Ups") {
      setCalories(90);
    } else {
      setCalories(0);
    }
  }, [name]);

  const handleExcersiseInput = (e) => {
    e.preventDefault();

    const totalCaloriesBurned = Number(duration * calories);
    dispatch(addExcersise({ name, duration, totalCaloriesBurned }));
    setCalories(0);
    setDuration(0);
    setName("");
    setOpen(false);
  };
  return (
    <div className="excersise-modal">
      <form onSubmit={handleExcersiseInput}>
        <select value={name} onChange={(e) => setName(e.target.value)}>
          <option value="">Select</option>
          <option value="Cardio">Cardio</option>
          <option value="Push-ups">Push-ups</option>
          <option value="Shit-ups">Shit-ups</option>
          <option value="Crunches">Crunches</option>
          <option value="Chin-Ups">Chin-Ups</option>
        </select>
        <label>
          Duration:
          <input
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            type="number"
            placeholder="mins."
          />
        </label>
        <button type="submit">Save</button>
        <button onClick={() => setOpen(false)}>Cancle</button>
      </form>
    </div>
  );
}
