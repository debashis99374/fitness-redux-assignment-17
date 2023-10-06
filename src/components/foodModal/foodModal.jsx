import { useState } from "react";
import "./foodModal.css";
import { useDispatch } from "react-redux";
import { addFood } from "../../actions";

export default function FoodModal({ setOpen }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    calories: 0,
    protine: 0,
    carbohydrates: 0,
    fats: 0
  });
  const handleSubmitFood = (e) => {
    e.preventDefault();
    dispatch(addFood(form));
    setForm({
      name: "",
      calories: 0,
      protine: 0,
      carbohydrates: 0,
      fats: 0
    });
    setOpen(false);
  };
  return (
    <div className="food-modal">
      <form onSubmit={handleSubmitFood} className="food-input-form">
        <lable>
          Name:
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="add a dish name"
          />
        </lable>
        <lable>
          Calories:
          <input
            type="number"
            value={form.calories}
            onChange={(e) =>
              setForm({ ...form, calories: parseInt(e.target.value) })
            }
            placeholder="calorie content"
          />
        </lable>
        <lable>
          Protine:
          <input
            type="number"
            value={form.protine}
            onChange={(e) =>
              setForm({ ...form, protine: parseInt(e.target.value) })
            }
            placeholder="protine.."
          />
        </lable>
        <lable>
          Carbohydrates:
          <input
            type="number"
            value={form.carbohydrates}
            onChange={(e) =>
              setForm({ ...form, carbohydrates: parseInt(e.target.value) })
            }
            placeholder="carbs.."
          />
        </lable>
        <lable>
          Fats:
          <input
            type="number"
            value={form.fats}
            onChange={(e) =>
              setForm({ ...form, fats: parseInt(e.target.value) })
            }
            placeholder="fats.."
          />
        </lable>
        <button type="submit">Save</button>
        <button onClick={() => setOpen(false)}>Cancle</button>
      </form>
    </div>
  );
}
