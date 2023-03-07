import React from "react"


const Card = (props) => {

  return (
    <>
      <div className='box btn_shadow'>
        <i className={props.icon}/>
        <h2>{props.title}</h2>
          <div className='skill'>
              {props.skills.map((skill, index) =>
                  <button key={index} className='btn_shadow'>{skill}</button>
              )}
          </div>
      </div>
    </>
  )
}

export default Card
