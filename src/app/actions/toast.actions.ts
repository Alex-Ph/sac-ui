import { createAction, props } from '@ngrx/store';
import { Toast } from '../model/toast/toast.model';

export const show = createAction('[Toast] Show', props<{toast: Toast}>());
