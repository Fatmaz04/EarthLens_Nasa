import React from 'react'

function Co2Dashboard() {
  return (
    <div>
      <iframe src="https://ourworldindata.org/grapher/annual-co2-emissions-per-country?tab=map" loading="lazy" style={{width: "100%", height: "600px", border: "0px none"}} title='CO2 Dashboard' allow="web-share; clipboard-write"></iframe>
    </div>
  )
}

export default Co2Dashboard
