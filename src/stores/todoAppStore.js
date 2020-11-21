// Redux ducks format
// Action Types (action-type = "app-name/page-name/action-type-name")
export const ADD_TODO_ITEM = 'react-class/todo-app/ADD_TODO_ITEM';
export const DELETE_TODO_ITEM = 'react-class/todo-app/DELETE_TODO_ITEM';

// Action Creators
export function addTodoItem({ text }) {
  console.log("running");
  return {
    type: ADD_TODO_ITEM,
    payload: text,
  }
}

export function deleteTodoItem({ id }) {
  return {
    type: DELETE_TODO_ITEM,
    payload: id
  }
}

// Reducers
function reducer(
  state={
    todoList: [
      { id: 1, text: "Buy milk"},
      { id: 2, text: "Buy Groceries"},
    ]
  },
  action
) {
  switch(action.type) {
    case ADD_TODO_ITEM:
      const newState = {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: state.todoList[state.todoList.length - 1].id + 1,
            text: action.payload,
          }
        ]
      }
      return newState;
    case DELETE_TODO_ITEM:
      const newTodoList= state.todoList.filter(
        (item) => (
          item.id !== action.payload
        )
      )
      return {
        ...state,
        todoList: newTodoList
      };
    default: 
      return state;
  }
}

export default reducer;

