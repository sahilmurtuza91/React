import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'

const root1=ReactDom.createRoot(document.getElementById('root'))
root1.render(
    <App />
);
const saholroot=ReactDom.createRoot(document.getElementById('sahilroot'))
saholroot.render(
    <sahilapp />
);