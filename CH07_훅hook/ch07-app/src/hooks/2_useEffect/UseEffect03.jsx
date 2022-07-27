import React, { useState } from 'react'
import Timer from './Timer'

function UseEffect03() {

  const [showTimer,setShowTimer] = useState(false);
  const [btn,setBtn]=useState('btn btn-primary');
  const [msg,setMsg]=useState('시작');


  return (
    <div className='container'>
      <button
        onClick={()=>{
          setShowTimer(!showTimer);
          setBtn(!showTimer ? 'btn btn-danger' : 'btn btn-primary')
          setMsg(!showTimer ? '종료' : '시작')
        }} 
      className={btn}>
        <i className="fa-solid fa-stopwatch"></i><span className='ml-2'>
          </span>'모래시계 {msg}</button>
      <hr/>
      {
        //JavaScript에서 true && expression은 항상 expression
        //으로 평가되고 false && expression은 항상 false로 평가됩니다.
        showTimer && <Timer/>
      }
    </div>
  )
}

export default UseEffect03