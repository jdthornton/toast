import { useContext } from 'react';
import { ToastDispatchContext } from '../provider/context';
import { removeToastAction } from '../provider/actions';

export default function useRemoveToast() {
  const context = useContext(ToastDispatchContext);
  if (context === undefined) {
    throw new Error('useRemoveToast must be used within a ToastProvider');
  }

  return (id: number) => context(removeToastAction(id));
}
