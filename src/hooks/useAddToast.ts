import { useContext } from 'react';
import { ToastDispatchContext } from '../provider/context';
import { addToastAction } from '../provider/actions';

export default function useAddToast() {
  const context = useContext(ToastDispatchContext);
  if (context === undefined) {
    throw new Error('useAddToast must be used within a ToastProvider');
  }

  return (text: string, delay?: number) => context(addToastAction(text,delay));
}
