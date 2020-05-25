import { createAction, props } from "@ngrx/store";
import { Toast } from "../model/toast/toast.model";
import { Task } from "../model/task";

export const show = createAction("[Toast] Show", props<{ toast: Toast }>());

export const loadOpenTasks = createAction("[Open task page] Load open tasks");

export const openTasksLoaded = createAction(
  "[Open task page] open tasks loaded",
  props<{ openTasks: Task[] }>()
);
