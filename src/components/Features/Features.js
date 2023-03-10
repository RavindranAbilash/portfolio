import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import PageDivider from "../pageDivider/PageDivider";

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>WHAT I CAN DO</h4>
            <h1>Skills</h1>
          </div>

          <div className='content grid'>
            {data.map((val, index) => {
              return <Card key={index} icon={val.icon} title={val.title} skills={val.skills} />
            })}

          </div>
        </div>
      </section>
      <PageDivider/>
    </>
  )
}

export default Features
