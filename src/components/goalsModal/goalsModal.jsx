import { useState } from "react";
import "./goalsModal.css";
import { useDispatch } from "react-redux";
import { addGoal } from "../../actions";

export default function GoalsModal({ setOpen }) {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({
    name: "",
    description: "",
    tDate: "",
    tCalorie: 0,
    status: ""
  });

  const handleSubmitGoal = (e) => {
    e.preventDefault();
    dispatch(addGoal(details));
    setDetails({
      name: "",
      description: "",
      tDate: "",
      tCalorie: 0,
      status: ""
    });
    setOpen(false);
  };

  return (
    <div className="goal-modal">
      <form onSubmit={handleSubmitGoal}>
        <lable>
          Goal Name:
          <input
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            type="text"
            placeholder="add goal name"
          />
        </lable>
        <lable>
          Description:
          <input
            value={details.description}
            onChange={(e) =>
              setDetails({ ...details, description: e.target.value })
            }
            type="text"
            placeholder="add goal name"
          />
        </lable>
        <lable>
          Tirget Date:
          <input
            value={details.tDate}
            onChange={(e) => setDetails({ ...details, tDate: e.target.value })}
            type="date"
            placeholder="add goal name"
          />
        </lable>
        <lable>
          Tirget Calorie:
          <input
            value={details.tCalorie}
            onChange={(e) =>
              setDetails({ ...details, tCalorie: e.target.value })
            }
            type="number"
            placeholder="add goal name"
          />
        </lable>
        <label>Status</label>
        <select
          value={details.status}
          onChange={(e) => setDetails({ ...details, status: e.target.value })}
        >
          <option value="">Select</option>
          <option value="Progress">Progress</option>
          <option value="Archived">Archived</option>
          <option value="Abandoned">Abandoned</option>
        </select>
        <button type="submit">Save</button>
        <button onClick={() => setOpen(false)}>Cancle</button>
      </form>
    </div>
  );
}
