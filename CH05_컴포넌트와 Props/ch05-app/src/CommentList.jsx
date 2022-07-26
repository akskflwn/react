import React from 'react'
import Comment from './Comment';


const list = [{
  name:'Shim',
  comment:'안녕하세요? 심입니다~~',
  avatarUrl:'images/img2.jpg'
},
{
  name:'Kyu',
  comment:'안녕하세요? 규입니다~~',
  avatarUrl:'images/img2.jpg'
},
{
  name:'Young',
  comment:'안녕하세요? 영입니다~~',
  avatarUrl:'images/img2.jpg'
},
{ 
  name:'Ken',
  comment:'안녕하세요? 루니입니다~~',
  avatarUrl:'images/img2.jpg'
}
];

function CommentList() {
  return (
    <>
      {
      list.map((data,idx)=>{
        return(
          <Comment name={data.name} comment={data.comment} avatarUrl={data.avatarUrl}/>
        )
      })
    }
      
    </>
  )
}

export default CommentList