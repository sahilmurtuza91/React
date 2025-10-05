import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// Here i am creating my own custom react element that is a function --> MyaApp() 
function MyApp(){
  return(
    <h1>this is custom </h1>
  )
}


/*
// this will cause an error reactElement is not a valid element beacause it is not in jsx formate beacuse it is diffent synatax beacause it is made my use and we use different synatx of react element
// so to make it working we have to create a  custom reander funcrion that will convert this objecct into jsx format
const reactElement={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"_blank",
    },
    Children:"click me to visit google"
} 
*/
const anotherreactElement=(
  <a href="https://www.google.com" target='_blank'>Click Here | This is another reactElement</a>
)

const AnotherUserName="Sahil murtuza here we are also using the username by creatining the variable ";
// thus is the correct way to create the react elament in jsx formate
const reactElement=React.createElement(
  "a",
  {
    href:"https://www.google.com",
    target:"_blank"
  },
  AnotherUserName,
  <br></br>,

  "click here |This is react.creactElement that doesn't gives error"
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {anotherreactElement}
    <br></br>
    {reactElement}
  </StrictMode>,
)
