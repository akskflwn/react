import React, { useState } from 'react'
import { useCallback } from 'react';
import Box from './Box'

function UserCallback03() {

  const [size,setSize]=useState(100);
  const [isDark,setIsDark]=useState(false);

  // const createBoxStyle = ()=>{
  //   return {
  //     backgroundColor:'pink',
  //     width:`${size}px`,
  //     height:`${size}px`
  //   }
  // };

  /**
   * 
   * 랜더링이 될때마다 새로운 함수의 값을 가져옴(change theme를 눌렀을때 되는 렌더링) 
   * 그래서 콜백을 사용해서
   * 기존에 사용핸던 함수를 가져옴
   */
  const createBoxStyle=useCallback(()=>{
    return {
      backgroundColor:'pink',
      width:`${size}px`,
      height:`${size}px`
    }
  },[size]);

  return (
    <div style={{background: isDark ?'#eee':'white'}}>
    <button
    onClick={()=>{setIsDark(!isDark)}}
    className='btn btn-danger mb-1'>Change Theme</button>
    <input className='form-control' type={'number'} value={size}
      onChange={(e)=>setSize(e.target.value)}
    />

    <br/>

    <Box createBoxStyle={createBoxStyle}/>


  </div>
  )
}

export default UserCallback03