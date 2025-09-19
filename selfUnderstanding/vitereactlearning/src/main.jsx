import React from 'react'
import ReactDom from 'react-dom/client'
import MyViteform from './App'

// We can also create a function that you have create in the App.jsx file and use it here so this is called based architecture of react

function MyaApp(){
  return(
    <>
    <h1>This is my custom react element created by me</h1>
    </>
  )
}

const reactElement=React.createElement(
    "a",
    {
        href:"https://www.facebook.com",
        target:"_blank",
    },
    "facebook.com"
);

const AnotherREactELement=React.createElement(
  "a",
  {
    href:"http://localhost:5173/",
    target:"_blank"
  },
  "click here to visit the vite+react project that we created in the o1vitereact folder"
)

ReactDom.createRoot(document.getElementById('root')).render(
  <>
  <MyViteform />
  {reactElement}
  {AnotherREactELement }
  </> 
)