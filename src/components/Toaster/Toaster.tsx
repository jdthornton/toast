import classNames from '@jdthornton/classnames';
import Portal from '@jdthornton/portal';
import Toast from '../Toast';
import useToastState from '../../hooks/useToastState';
import useRemoveToast from '../../hooks/useRemoveToast';
import { ToasterProps, ToasterOptionalProps, ToastType } from '../../types'

export const Toaster = ({
  toasts,
  remove,
  className,
  toastClassNames = {},
  toastStyles = {},
  renderToast
}: ToasterProps) => (
  <div className={classNames("Toaster__List",className)}>
    {toasts.map((toast: ToastType) => {
      const removeToast = () => remove(toast.id)
      return renderToast ? (
        renderToast(toast,removeToast)
      ) : (
        <Toast
          key={toast.id}
          toast={toast}
          remove={removeToast}
          {...toastClassNames}
          {...toastStyles} />
      )
    })}
  </div>
)

function ToasterContainer(props: ToasterOptionalProps){
  const toasts = useToastState(),
        remove = useRemoveToast();

  return(
    <Toaster
      {...props}
      toasts={toasts}
      remove={remove} />
  )
}

const ToasterPortal = (props: ToasterOptionalProps) => (
  <Portal>
    <ToasterContainer {...props}  />
  </Portal>
)

export default ToasterPortal;
