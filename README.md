# @jdthornton/toast

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/toast.svg)](https://www.npmjs.com/package/@jdthornton/toast)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/toast.svg)](https://www.npmjs.com/package/@jdthornton/toast)

React toast context and list component.

## Demo

https://jdthornton.github.io/#/toast

## Install

```
$ npm install @jdthornton/toast
```

## Usage

```js
import { ToastProvider, Toaster, useAddToast } from "@jdthornton/toast";
import '@jdthornton/toast/styles.css';

function AddToastButton(){
  const addToast = useAddToast();
  const handleAddToastButtonClick = () => {
    addToast("Here is a toast to you!")
  }
  return(
    <button type="button" onClick={handleAddToastButtonClick}>
      Add Toast
    </button>
  )
}

function App(){
  return(
    <ToastProvider>
      <Toaster />
      <AddToastButton />
    </ToastProvider>
  )
}
```
