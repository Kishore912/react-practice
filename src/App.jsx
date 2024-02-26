import React, { useState } from 'react';
import Hello from './components/Hello';
import './index.css'
function App() {
  // const kishore = [
  //   {
  //     'head':'India',
  //     'sub':'Tajmahal',
  //     'desc':'it is one of the seven wonders in the world it is made up of white marbels'
  //   },
  //   {
  //     'head':'Canada',
  //     'sub':'Niyagra falls',
  //     'desc':'it is the largest falls in the world it is the most visited place in the world'
  //   },
  //   {
  //     'head':'America',
  //     'sub':'Texas',
  //     'desc':'Texas is the party town this is where the parties goes day to day'
  //   }
  // ]

  const [students , setdata] = useState([])

  const api = 'https://sakthikarthick-hello-world.onrender.com/students/'
  const accessData = async()=>{
    try {

      const response = await fetch(`${api}`);
      const responseData =await response.json();
      console.log(responseData)
      setdata(responseData)
      
    } catch (error) {
      console.log(error);
      
    }
  }
  const male = students.filter(student => student.gender ==='Male')   // this is used to filter the values in a api using filter()
  return (
    <div className="App">
      <div className="parent">
        {/* <Hello head={'India'} sub={'Tajmahal'} desc={'it is one of the seven wonders in the world it is made up of white marbels'}/>
        <Hello head={'Canada'} sub={'Niyagra falls'} desc={'it is the largest falls in the world it is the most visited place in the world'}/>
        <Hello head={'America'} sub={'Texas'} desc={'Texas is the party town this is where the parties goes day to day'}/>
          this is giving dynamic values without using api*/}  

         {/* {kishore.map((value,index)=>(
           <Hello key={index} head={value.head} sub={value.sub} desc={value.desc}/>
        this is using map() we are calling the api named kishore above

         ))} */}
         <button onClick={accessData}>gf</button>
         <table>
          <tr>
            <td> Name </td>
            <td> Gender </td>
            <td> Department </td>
          </tr>
          {male.map((value,index)=>(
           <tr key={index}>
            <td>{value.name.split(' ')[0]}</td>
            <td>{value.gender}</td>
            <td>{value.department}</td>
           </tr> 
          

          ))}

         </table>
       

      </div>



    </div>
  );
}

export default App;
