import React from 'react'
import { useEffect } from 'react'

function Timer() {

  useEffect(()=>{
    const updateTimer = setInterval(()=>{
      console.log('⏳');
    },1000);

      // 마운트 해제시 실행 정지(정리 작업)
      //이게 없으면 계속 돌아감.....;;
      //언마운트시 처리작업
      return ()=>{
        console.log('모래시계 종료');
      clearInterval(updateTimer);
    }
  },[]);// 마운트 && 언마운트 시 처리가 완료


  return (
    <div>
      <span>시작</span>
    </div>
  )
}

export default Timer