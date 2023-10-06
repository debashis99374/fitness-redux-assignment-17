import "./excersise.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExcersiseById, fetchedAllExcersises } from "../../actions";
import ExcersiseModal from "../../components/excersiseModal/excersiseModal";

export default function Excersise() {
  const excersiselist = useSelector((state) => state.excersises);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchedAllExcersises());
  }, [dispatch]);
  return (
    <div className="excersise">
      <button onClick={() => setOpen(true)}>Add A Excersise</button>
      {excersiselist.map((el, index) => {
        return (
          <div>
            <div key={el._id}>
              <p>Excersise Name:{el.name}</p>
              <p>Duration:{el.duration} mins.</p>
              <p>Burned Calories:{el.caloriesBurned}</p>

              <button onClick={() => dispatch(deleteExcersiseById(el._id))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      {open && <ExcersiseModal setOpen={setOpen} />}
    </div>
  );
}
