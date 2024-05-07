import React from 'react'
import "./Flexbox.css"
function Flexbox() {
  return(
    <div className="container_flex">
      <div className='flex-container'>
        <h1 className='tab1'>STUDENT REGISTRATION INFO</h1>
      </div>

      <div className="grid_container">
       <h2 className="grid1">NAME</h2>
       <h2 className="grid2">SEX</h2>
       <h2 className="grid3">CONTACT</h2>
       <h2 className="grid4">ADRESS</h2>
       <h3 className="grid5">Grace Audu</h3>
       <h3 className="grid6">female</h3>
       <h3 className="grid7">08058922430</h3>
       <h3 className="grid8">Newnyanya opp NPX plaza</h3>
       <h3 className="grid9">Hope Praise</h3>
       <h3 className="grid10">male</h3>
       <h3 className="grid11">070277299948</h3>
       <h3 className="grid12">Opp Heart plaza, mararaba</h3>
       <h3 className="grid13">Gode Isaac</h3>
       <h3 className="grid14">male</h3>
       <h3 className="grid15">081548231110</h3>
       <h3 className="grid16">cross city estate,Abuja</h3>
      </div>
         </div>
  );
}

export default Flexbox;
