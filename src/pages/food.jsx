import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFoodById, fetchedAllFood } from "../actions";
import FoodModal from "../components/foodModal/foodModal";

import "./food.css";

export default function Food() {
  const foodlist = useSelector((state) => state.foods);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchedAllFood());
  }, [dispatch]);

  return (
    <div className="food">
      <button onClick={() => setOpen(true)}>Add A Food Item</button>
      {foodlist.map((el, index) => {
        return (
          <div>
            <div key={el._id}>
              <p>Food Name:{el.name}</p>
              <p>Calories:{el.calories}</p>
              <p>Protine:{el.protine}g.</p>
              <p>Carbohydrates:{el.carbohydrates}g.</p>
              <p>Fats:{el.fats}g.</p>
              <button onClick={() => dispatch(deleteFoodById(el._id))}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
      {open && <FoodModal setOpen={setOpen} />}
    </div>
  );
}
