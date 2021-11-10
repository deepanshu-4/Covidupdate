import React from 'react';
import ReactDOM from 'react-dom';

export default function Head(props){
const {head}=props;
const style = {
    backgroundColor: 'black',
    fontSize: '2 rem',
    fontColor:'white'
  };
return (
<>
<div style={style}>
<h1 style={{color:'orange',letterSpacing:"0.5rem",marginLeft:"20px",padding:"5px"}}>{head}</h1>
</div>    

</>



)


}