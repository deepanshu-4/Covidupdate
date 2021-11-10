import React from 'react';
import ReactDOM from 'react-dom';
import Unique from './Indiv';
import {useState,useEffect} from 'react'
import './App.css';
function Dash(props)
{
    const {ind}=props
    const Base_Url="https://data.covid19india.org/data.json";
    const [heading,setheading]=useState([])
    const [content,setcontent]=useState([])
    let mdata;
    useEffect(()=>{
     fetch(Base_Url).then(res=>res.json()).then(data=>
        {
            const ar=[];
            setheading([...Object.keys(data['statewise'][0])])
            mdata=data['statewise'];
            ar.push(mdata[ind]['state'])
            ar.push(mdata[ind]['active'])
            ar.push(mdata[ind]['deaths'])
            ar.push(mdata[ind]['recovered'])
            setcontent([ar]);
        }
     )
    },[ind])

return (
    <>    
    
    <ul>
    {   
            content.map(val=>(
                <>
                <div className='card'>
                <h2>{val[0]}</h2>
                <li>Active :- {val[1]}</li>
                <li>Deaths :-  {val[2]}</li>
                <li>Recovered :-  {val[3]}</li>
                </div>
              <br/>
                </>
                )
            )
    }
    </ul>
    </>
)
}
export default Dash