import { cTask } from '../../../utils/Classes';
import { iReducerAction, iTask } from '../../../utils/Interfaces';
import { TODOS_KEY } from '../../../utils/Contstans';
import { readFromStore, saveInStore } from '../../../utils/Storage';
import { generateId, getCurrentDate } from '../../../utils/Tools';

const todoPrefix = '@@TODO/';

export const SET_TODOS = `${todoPrefix}SET_TODOS`;

export const setTodos = (payload: Array<object>) => {
  return {
    type: SET_TODOS,
    payload,
  };
};

export const getTodos = () => {
  return async (dispatch: (data: iReducerAction) => void) => {
    const tasks = (await readFromStore(TODOS_KEY)) || [];
    dispatch(setTodos(tasks));
  };
};

export const addNewTask = (task: string) => {
  return async (dispatch: (data: iReducerAction) => void) => {
    const currentDate = getCurrentDate();
    const todos = (await readFromStore(TODOS_KEY)) || [];
    const newTask = new cTask(generateId(), task, false, currentDate);

    const updatedTasks = [...todos, newTask];
    saveInStore(TODOS_KEY, updatedTasks);
    dispatch(setTodos(updatedTasks));
  };
};

export const markAsDone = (todos: Array<iTask>, task: iTask) => {
  return async (dispatch: (data: iReducerAction) => void) => {
    const index = todos.findIndex((item: iTask) => item.id === task.id);
    todos[index] = task;
    saveInStore(TODOS_KEY, todos);
    dispatch(setTodos(todos));
  };
};
