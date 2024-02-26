import React from 'react';
import '../index.css'
const Hello = ({head,sub,desc}) =>{
    return(
        <div className="container">
            <h1>{head}</h1>
            <h3>{sub}</h3>
            <p> {desc}</p>   
        </div>
    );
}
export default Hello;