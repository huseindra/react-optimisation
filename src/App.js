import React, { useCallback, useState } from 'react';
import Button from './components/UI/Button/Button'
import './App.css';
import DemoOutput from './components/DemoOutput';

function App() {
  const [showIsToggle, setShowIsToggle] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)


  console.log('APP IS RUNNING')
  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setShowIsToggle((prevToggle) => !prevToggle)
    }
  },[allowToggle])

  const toggleAllowHandler = () => {
    setAllowToggle(true)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showIsToggle}/>
      <Button onClick={toggleAllowHandler}>Allow Toggle</Button>

      <Button onClick={toggleParagraphHandler}>Toggle Show</Button>
    </div>
  );
}

export default App;
