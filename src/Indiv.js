import React from 'react';
import ReactDOM from 'react-dom';
import {useState,useEffect} from 'react';
import './App.css';

export default function Unique(props){

    const {selectedval,onchangeval}=props;
    console.log("val",selectedval)
    const [content,setcontent]=useState([])
    useEffect(()=>{
        
        let mdata;
        const Base_Url="https://data.covid19india.org/data.json";
        fetch(Base_Url).then(res=>res.json()).then(data=>
           {
               const ar=[];
               

               mdata=data['statewise'];
               for(var i=0;i<38;i++){
                ar.push(mdata[i]['state'])
               }
               setcontent([...ar]);
           }
           
        )
       
       },[])

return (
<>

    <select value={selectedval} onChange={onchangeval}>
        { content.map((val,index)=>
        
        <option key={index} value={index}>{val}</option>
        
        )
        }
    </select>
    
</>
)



}
