const initialState = { tasks: [] };
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INSERT_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, complete: !task.complete }
            : task
        ),
      };
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.complete === false;
        }),
      };

    default:
      return state;
  }
};

export default todoReducer;
