import { State, ActionKind, Action } from '../types';

export const initialState: State = [];

export default function toastReducer(
  state: State = initialState,
  action: Action
): State {
  switch (action.type) {
    case ActionKind.AddToast:
      return [...state, action.payload]
    case ActionKind.RemoveToast:
      return state.filter(toast => toast.id !== action.payload)
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
