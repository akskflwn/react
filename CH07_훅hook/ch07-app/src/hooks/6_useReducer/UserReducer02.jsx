import React from 'react'
import { useState } from 'react'

function UserReducer02() {

  const [money,setMoney]=useState();
  return (
    <div className='container'>
      <h6>useReducer 은행에 오신것을 환영합니다</h6>

      <h2>잔고 : 100,000,000,000</h2>
      <div>
        <input className='form-control mb-2'
          type={'number'}/>
        <button className='btn btn-success'>예금</button>
        <button className='btn btn-danger'>출금</button>

      </div>
    </div>
  )
}

export default UserReducer02