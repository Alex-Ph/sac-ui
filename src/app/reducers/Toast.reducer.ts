import { createReducer, on } from '@ngrx/store';
import { show } from '../actions/toast.actions';
 
export const initialState = null;
 
const _toastReducer = createReducer(initialState,
  on(show, ( state, { toast }) => ({...toast})),
);
 
export function toastReducer(state, action) {
  return _toastReducer(state, action);
}