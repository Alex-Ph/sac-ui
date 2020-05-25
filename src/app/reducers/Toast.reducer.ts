import { createReducer, on } from "@ngrx/store";
import { show, loadOpenTasks, openTasksLoaded } from "../actions/toast.actions";
import { Toast } from "../model/toast/toast.model";
import { Task } from "../model/task";

export interface State {
  rootState: {
    toast: Toast;
    openTasks: Task[];
    completedTasks: Task[];
  };
}

export const initialState: State = {
  rootState: {
    toast: {
      message: "",
      type: null,
      title: "",
    },
    openTasks: [],
    completedTasks: [],
  },
};

export const ToastReducer = createReducer(
  initialState,
  on(show, (state, action) => ({ ...state, toast: action.toast })),
  on(loadOpenTasks, (state, action) => ({
    ...state,
  })),
  on(openTasksLoaded, (state, action) => ({
    ...state,
    openTasks: action.openTasks,
  }))
);

export const toast = (state: State) => state.rootState.toast;
export const openTasks = (state: State) => state.rootState.openTasks;
