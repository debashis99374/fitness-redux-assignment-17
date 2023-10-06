export const fetchedAllExcersises = () => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/excersise"
    );

    const data = await res.json();

    dispatch({ type: "fetch-all-excersises", payload: data });
  } catch (err) {
    dispatch({ type: "fetch-all-excersises-fail" });
  }
};
export const addExcersise = (newExcersiseData) => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/excersise",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: newExcersiseData.name,
          duration: newExcersiseData.duration,
          caloriesBurned: newExcersiseData.totalCaloriesBurned
        })
      }
    );
    const data = await res.json();
    dispatch({ type: "add-excersise", payload: data });
  } catch (err) {
    dispatch({ type: "add-excersise-fail" });
  }
};
export const deleteExcersiseById = (excersiseId) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://assignment17backend.debashiskar.repl.co/excersise/${excersiseId}`,
      {
        method: "DELETE"
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch({ type: "delete-excersise-by-id", payload: data._id });
  } catch (err) {
    console.log("error-in deleting excersise", err);
    dispatch({ type: "delete-excersise-by-id-fail" });
  }
};

//Food actions--------------------------------------------------------
export const fetchedAllFood = () => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/food"
    );

    const data = await res.json();

    dispatch({ type: "fetch-all-food-items", payload: data });
  } catch (err) {
    dispatch({ type: "fetch-all-food-items-fail" });
  }
};
export const addFood = (newFoodData) => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/food",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: newFoodData.name,
          duration: newFoodData.duration,
          protine: newFoodData.protine,
          carbohydrates: newFoodData.carbohydrates,
          fats: newFoodData.fats
        })
      }
    );
    const data = await res.json();
    dispatch({ type: "add-food-item", payload: data });
  } catch (err) {
    dispatch({ type: "add-food-fail" });
  }
};
export const deleteFoodById = (foodId) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://assignment17backend.debashiskar.repl.co/food/${foodId}`,
      {
        method: "DELETE"
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch({ type: "delete-food-by-id", payload: data._id });
  } catch (err) {
    console.log("error-in deleting food item", err);
    dispatch({ type: "delete-food-by-id-fail" });
  }
};

//Goals functions--------------------------------------------------------

export const fetchedAllGoals = () => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/goal"
    );

    const data = await res.json();

    dispatch({ type: "fetch-all-goals", payload: data });
  } catch (err) {
    dispatch({ type: "fetch-all-goals-fail" });
  }
};
export const addGoal = (newGoalData) => async (dispatch) => {
  try {
    dispatch({ type: "loading" });
    const res = await fetch(
      "https://assignment17backend.debashiskar.repl.co/goal",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: newGoalData.name,
          description: newGoalData.description,
          targetDate: newGoalData.tDate,
          tirgetCalorievalue: newGoalData.tCalorie,
          status: newGoalData.status
        })
      }
    );
    const data = await res.json();
    dispatch({ type: "add-goal", payload: data });
  } catch (err) {
    dispatch({ type: "add-goal-fail" });
  }
};
export const deleteGoalById = (goalId) => async (dispatch) => {
  try {
    const res = await fetch(
      `https://assignment17backend.debashiskar.repl.co/goal/${goalId}`,
      {
        method: "DELETE"
      }
    );
    const data = await res.json();
    console.log(data);
    dispatch({ type: "delete-goal-by-id", payload: data._id });
  } catch (err) {
    console.log("error-in deleting goal item", err);
    dispatch({ type: "delete-goal-by-id-fail" });
  }
};
