import React from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
import App from './App';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#F2911B",
      // ...
      900: "#1a202c",
    },
  },
}) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

