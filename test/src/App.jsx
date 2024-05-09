import { useState } from 'react'
import ReactDOM from "react-dom/client";

function Hello(props){
  const {user} =props;
  return(
    <div>
      <h1>{props.user}</h1>
    </div>
  )


}


