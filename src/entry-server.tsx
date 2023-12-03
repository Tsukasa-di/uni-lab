import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import { BrowserRouter } from 'react-router-dom';

export function render() {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  return { html }
}
