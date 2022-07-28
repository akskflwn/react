import React,{useEffect,useRef} from 'react'

/**
 * useRef()
 * 참조 (Reference)를 사용하기 위한 훅
 * 반환값: 래퍼런스 객체(ref object)
 * const ref= useRef(value)=={current:value}
 * ref.current
 * 
 * ref 객체는 컴포넌트의 전 생애주기 전체에 걸쳐서 유지!!
 * 컴포넌트가 재 랜더링 되더라도 초기화 하지않는다
 * 
 * 어디다가 써먹지 ?
 * 
 * 1.  DOM 요소에 접근할때 (getElement,document.querySelect)
 * 2. 저장공간으로 사용
 */

function UseRef01() {

  const inputRef = useRef(); //{current:}라는 키를 가진 value
  const imgRef = useRef();
  
  const onButtonClick = () =>{
    alert(`환영합니다 ${inputRef.current.value}`)
    imgRef.current.style.visibility='visible'
  }

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  return (
    <div className='container'>
      <img ref={imgRef}
      src='logo192.png' alt='' style={{width:'100px',marginBottom:'50px',visibility:'hidden'}}/>
      <div className='d-flex'>
        <input ref={inputRef} type={'text'} className='form-control w-auto'  
        placeholder='아이디'/>
        <button className='btn btn-primary ml-2'
          onClick={onButtonClick}
        >로그인</button>
      </div>

    </div>
  )
}

export default UseRef01