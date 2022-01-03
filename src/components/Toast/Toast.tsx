import { useState } from 'react';
import useTimeout from '@jdthornton/usetimeout';
import classNames from '@jdthornton/classnames';
import useAnimate from '@jdthornton/useanimate';
import { ToastProps, ToastContainerProps } from '../../types';

export const Toast = ({
  text,
  onCloseClick,
  className,
  textClassName,
  closeClassName,
  style = {},
  textStyle = {},
  closeStyle = {},
  ...props
}: ToastProps) => (
  <div {...props} {...style} className={classNames("Toaster__Item",className)}>
    <div {...textStyle} className={classNames("Toaster__Item__text",textClassName)}>{text}</div>
    <div {...closeStyle} onClick={onCloseClick} className={classNames("Toaster__Item__closeIcon",closeClassName)}>&times;</div>
  </div>
)

export default function ToastContainer({
  toast,
  remove,
  className,
  activeClassName,
  style = {},
  activeStyle = {},
  ...props
}: ToastContainerProps) {

  const [isOpen,setIsOpen] = useState(true),
        handleClose = () => setIsOpen(false),
        {isShowing,isAnimated,elementProps} = useAnimate(isOpen,remove);

  useTimeout(handleClose,toast.delay);

  return isShowing ? (
    <Toast
      {...props}
      {...elementProps}
      text={toast.text}
      style={isAnimated ? {...style,...activeStyle} : style}
      className={classNames("Toaster__Item__animation",className, isAnimated && classNames("Toaster__Item__animation--active",activeClassName))}
      onCloseClick={handleClose} />
  ) : null
}
