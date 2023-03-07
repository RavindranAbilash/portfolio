import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>What I Can Do</h4>
            <h1>Skills</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} icon={val.icon} title={val.title} skills={val.skills} />
            })}

          </div>
        </div>
      </section>
    </>
  )
}

export default Features
