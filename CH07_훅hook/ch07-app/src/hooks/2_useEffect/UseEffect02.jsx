import React, { useEffect, useState } from 'react'

function UseEffect02() {

  const [count,setCount]=useState(0);
  const [name,setName]=useState('');

  const updateInput = (e)=>{
    setName(e.target.value);
  }

  const updateCount = ()=>{
    setCount(count+1);
  }



  // 랜더링마다 매번 사이드 이펙트 실행
// useEffect(()=>{
//   console.log('매번 컴포넌트 랜더링')
// });

// 마운팅 && count가 바뀔때마다 실행
// useEffect(()=>{
//   console.log('카운트가 바뀔때마다 실행🍖')
// },[count]);

// 마운팅 && name
// useEffect(()=>{
  //    console.log('네임 바뀔때마다 실행🍖')
  //  },[name]);

  return (
    <div className='container'>
      <p>COUNT:{count}</p>
      <button
      className='btn btn-danger'
      onClick={updateCount}
      >Update</button>
      <div>
        <input type='text'
        onChange={updateInput}
        ></input>
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02