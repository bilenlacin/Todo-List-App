export const insertTask = (task) => {
  return async (dispatch) => {
    dispatch({
      type: 'INSERT_TASK',
      payload: task,
    });
  };
};
export const toggleTask = (task) => {
  return async (dispatch) => {
    dispatch({
      type: 'TOGGLE_TASK',
      payload: task,
    });
  };
};
export const clearCompleted = () => {
  return async (dispatch) => {
    dispatch({
      type: 'CLEAR_COMPLETED',
    });
  };
};
