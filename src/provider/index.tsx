import { useReducer } from 'react';
import toastReducer, { initialState } from './reducer';
import { ToastStateContext, ToastDispatchContext } from './context';
import { ToastProviderProps } from '../types';

export default function ToastProvider({
  children
}: ToastProviderProps) {

  const [state, dispatch] = useReducer(toastReducer, initialState);

  return (
    <ToastDispatchContext.Provider value={dispatch}>
      <ToastStateContext.Provider value={state}>
        {children}
      </ToastStateContext.Provider>
    </ToastDispatchContext.Provider>
  )
}
