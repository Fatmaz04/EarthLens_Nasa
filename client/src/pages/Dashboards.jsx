import React, { useState } from 'react'
import Co2Dashboard from '../components/Co2Dashboard'
import MethanDashboard from '../components/MethanDashboard'
import TotalDashboard from '../components/TotalDashboard';

function Dashboards() {
    const [type,setType] = useState("total");
  return (
    <div className='m-8'>
    <div className='flex flex-col justify-center items-center'>
      <div className="grid grid-cols-3 m-2">
      <button onClick={()=>setType("total")} className={`p-2 ${
              type==='total' ? 'bg-gr text-white' : 'text-wh'
            }`}>Total Emissions</button>
          <button onClick={()=>setType("co2")}
            className={`p-2 ${
              type==='co2' ? 'bg-gr text-white' : 'text-wh'
            }`}
            >CO<sub>2</sub></button>
          <button onClick={()=>setType("methan")} className={`p-2 ${
              type==='methan' ? 'bg-gr text-white' : 'text-wh'
            }`}>Methan</button>
        </div>
        </div>
        {type==="total" && <TotalDashboard />}
        {type==="co2" && <Co2Dashboard />}
        {type==="methan" && <MethanDashboard />}
    </div>
  )
}

export default Dashboards
