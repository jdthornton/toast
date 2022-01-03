import { ReactNode } from 'react';

export enum ActionKind {
  AddToast = "ADD_TOAST",
  RemoveToast = "REMOVE_TOAST"
}

export type ToastType = {
  id: number,
  text: string,
  delay: number
};

export type State = ToastType[];

export type Action = {
  readonly type: ActionKind;
  readonly payload: any;
}

export interface ToastClassProps {
  className?: string;
  textClassName?: string;
  closeClassName?: string;
}

export interface ToastStyleProps {
  style?: object;
  textStyle?: object;
  closeStyle?: object;
}

export type ToastProps = {
  text: string;
  onCloseClick: () => void;
} & ToastClassProps & ToastStyleProps

export type ToastContainerClassProps = {
  activeClassName?: string;
} & ToastClassProps

export type ToastContainerStyleProps = {
  activeStyle?: object;
} & ToastStyleProps

export type ToastContainerProps = {
  delay?: number;
  toast: ToastType;
  remove: () => void;
} & ToastContainerClassProps & ToastContainerStyleProps

export type ToasterOptionalProps = {
  className?: string;
  toastClassNames?: ToastContainerClassProps;
  toastStyles?: ToastContainerStyleProps;
  renderToast?: (toast: ToastType, close: () => void) => JSX.Element;
}

export type ToasterProps = {
  toasts: State;
  remove: (id: number) => void;
} & ToasterOptionalProps

export type ToastProviderProps = {
  children?: ReactNode;
}
