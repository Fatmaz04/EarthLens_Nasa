import React from 'react'

function TotalDashboard() {
  return (
    <div>
      <iframe src="https://ourworldindata.org/grapher/total-ghg-emissions?country=~OWID_WRL&tab=map" loading="lazy" style={{width: "100%" ,height: "600px", border: "0px none"}} title='Total Dashboard' allow="web-share; clipboard-write"></iframe>
    </div>
  )
}

export default TotalDashboard
