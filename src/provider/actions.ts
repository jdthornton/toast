import { ActionKind, Action } from '../types';

var count = 0;

export const addToastAction = (text: string,delay: number = 4000): Action => ({
  type: ActionKind.AddToast,
  payload: {
    id: count++,
    text,
    delay
  }
})

export const removeToastAction = (id: number): Action => ({
  type: ActionKind.RemoveToast,
  payload: id
})
