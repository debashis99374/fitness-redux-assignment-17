const initialState = {
  excersises: [],
  foods: [],
  goals: [],
  loading: false,
  error: null
};

const reducerFunction = (state = initialState, action) => {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    //excersise functions
    case "fetch-all-excersises":
      return {
        ...state,
        excersises: action.payload,
        loading: false,
        error: null
      };
    case "fetch-all-excersises-fail":
      return {
        ...state,
        loading: false,
        error: "error fetching excersise data"
      };
    case "add-excersise":
      return {
        ...state,
        excersises: [...state.excersises, action.payload],
        loading: false,
        error: null
      };
    case "add-excersise-fail":
      return {
        ...state,
        loading: false,
        error: "sorry cant add this excersise "
      };
    case "delete-excersise-by-id":
      return {
        ...state,
        excersises: state.excersises.filter((el) => el._id !== action.payload)
      };

    //food functions
    case "fetch-all-food-items":
      return { ...state, foods: action.payload, loading: false, error: null };
    case "fetch-all-food-items-fail":
      return { ...state, loading: false, error: "error fetching food data" };
    case "add-food-item":
      return {
        ...state,
        foods: [...state.foods, action.payload],
        loading: false,
        error: null
      };
    case "add-food-fail":
      return {
        ...state,
        loading: false,
        error: "sorry cant add this food item "
      };
    case "delete-food-by-id":
      return {
        ...state,
        foods: state.foods.filter((el) => el._id !== action.payload)
      };
    //goals functions
    case "fetch-all-goals":
      return { ...state, goals: action.payload, loading: false, error: null };
    case "fetch-all-goals-fail":
      return { ...state, loading: false, error: "error fetching goals data" };
    case "add-goal":
      return {
        ...state,
        foods: [...state.goals, action.payload],
        loading: false,
        error: null
      };
    case "add-goal-fail":
      return {
        ...state,
        loading: false,
        error: "sorry cant add this goal item "
      };
    case "delete-goal-by-id":
      return {
        ...state,
        foods: state.goals.filter((el) => el._id !== action.payload)
      };

    default:
      return state;
  }
};

export default reducerFunction;
