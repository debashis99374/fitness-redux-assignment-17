import "./goals.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import GoalsModal from "../../components/goalsModal/goalsModal";
import { deleteGoalById, fetchedAllGoals } from "../../actions";

export default function Goals() {
  const goalslist = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchedAllGoals());
  }, [dispatch]);
  return (
    <div className="goals">
      {" "}
      <button onClick={() => setOpen(true)}>Add A Excersise</button>
      {goalslist.map((el, index) => {
        return (
          <div>
            <div key={el._id}>
              <p>Goal Name:{el.name}</p>
              <p>Description:{el.description}</p>
              <p>Target Date:{el.targetDate}</p>
              <p>Tirget Calorie:{el.tirgetCalorievalue}</p>
              <p>Status:{el.status}</p>

              <button onClick={() => dispatch(deleteGoalById(el._id))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      {open && <GoalsModal setOpen={setOpen} />}
    </div>
  );
}
