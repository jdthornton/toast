import { createContext, Dispatch } from 'react';
import { State } from '../types';

export const ToastStateContext = createContext<State>([]);
export const ToastDispatchContext = createContext<Dispatch<any> | undefined>(undefined);
