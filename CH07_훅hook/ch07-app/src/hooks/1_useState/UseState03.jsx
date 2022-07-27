import React, { useState } from 'react'

function UseState03() {

  const style={
    container : {
      padding:100,
      // display:'flex',
      flexDirection:'center',
      alignItems:'center',
      justifyContent:'center',
    },
    btn:{
      padding:20,

    },
    icon:{
      fontSize:80,
      
    }
  }


  const [click,setClick]=useState(0);

  const ClickHandler = ()=>{
    setClick(click+1);
  }

  return (
 
    <div className='container' style={style.container}>
    <div>You clicked {click} times</div>
    <button className='btn btn-info' style={style.btn}
    onClick={ClickHandler}><i class="fa-solid fa-computer-mouse" style={style.icon}></i></button>
    </div>

  );
}

export default UseState03