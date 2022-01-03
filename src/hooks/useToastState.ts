import { useContext } from 'react';
import { ToastStateContext } from '../provider/context';

export default function useToastState() {
  const context = useContext(ToastStateContext);
  if (context === undefined) {
    throw new Error('useToastState must be used within a ToastProvider');
  }
  return context;
}
