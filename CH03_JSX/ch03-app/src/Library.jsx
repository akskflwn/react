import React from "react";
import Book from "./Book";

  function Library(props){
    return (
      <>
      <Book name = "파이썬이 젤 쉬웠어요" page="100"/>
      <Book name = "리엑트란?" page="300"/>
      <Book name = "자바가 뭐임" page="200"/>
      <Book name = "자바가 뭐임?" page="200"/>
      <Book name = "자바가 뭐임?zz" page="200"/>
      </>
    );
  }

  export default Library;