import React, { useEffect, useState } from 'react' 
import { FaBuilding } from "react-icons/fa";


const Body = () => {
    const [advice, setAdvice]= useState("");
    const handleAdvice=async()=>{
        const response = await fetch ("https://api.adviceslip.com/advice");
        const jsonData = await response.json();
        const { slip } = jsonData
        // console.log(jsonData);
        setAdvice(slip);
    };

    useEffect(()=>{
        handleAdvice();
    }, []);
    //Two parameters inside the useeffect, first is a function and second one is the dependencyarray
      return (
    <div className='h-screen bg-slate-800 flex justify-center items-center'>
      <div className='bg-slate-600 h-[200px] w-[420px] rounded-lg p-8'>
        <p className='flex justify-center text-xl'>Adivice #{advice.id}</p>
        <p className='font-bold text-lg'>"{advice.advice}"</p>
        <div className='flex justify-center mt-7'>
        <button  onClick={handleAdvice} className='bg-lime-400 p-2 rounded-full flex justify-center'>
        <FaBuilding />
        </button>
        </div>
      </div>
    </div>
  )
}

export default Body;
