import { useEffect } from "react";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchedAllExcersises,
  fetchedAllFood,
  fetchedAllGoals
} from "../../actions";

export default function Home() {
  const dispatch = useDispatch();
  const excersiseList = useSelector((state) => state.excersises);
  const foodList = useSelector((state) => state.foods);
  const goalList = useSelector((state) => state.goals);
  const totalCaloriesBurned = excersiseList.reduce(
    (a, b) => a + Number(b.caloriesBurned),
    0
  );
  const totalCaloriesConsumed = foodList.reduce(
    (a, b) => a + Number(b.calories),
    0
  );
  const totalCalorieGoal = goalList.reduce(
    (a, b) => a + Number(b.tirgetCalorievalue),
    0
  );
  const remainingCalorieToGoal =
    totalCaloriesBurned >= totalCalorieGoal
      ? "Calorie goal completed"
      : totalCalorieGoal - totalCaloriesBurned;
  useEffect(() => {
    dispatch(fetchedAllExcersises());
    dispatch(fetchedAllFood());
    dispatch(fetchedAllGoals());
  }, [dispatch]);
  return (
    <div className="home">
      <div>
        <h3>Total Calories Burned</h3>
        <p>{totalCaloriesBurned}</p>
      </div>
      <div>
        <h3>Total Calories Consumed</h3>
        <p>{totalCaloriesConsumed}</p>
      </div>
      <div>
        <h3>Total Calories Tirget</h3>
        <p>{totalCalorieGoal}</p>
      </div>
      <div>
        <h3>Remaining Calories to Burn</h3>
        <p>{remainingCalorieToGoal}</p>
      </div>
    </div>
  );
}
