import React, { useState } from "react"
import contact from "./contact.jpg"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact} alt='' />
                </div>
                <div className='details'>
                  <h1>Ravindran Abilash</h1>
                  <p>Undergraduate @ University of Peradeniya  </p>
                  <p><br/><br/></p>
                  <p>Phone: 0094 76 764 2021</p>
                  <p>Email: abilashravindran08@gmail.com</p> <br />
                  <p><br/></p>
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <a href="https://www.linkedin.com/in/ravindran-abilash/" target="_blank">
                      <button className='btn_shadow'>
                        <i className='fab fa-linkedin-in'></i>
                      </button>
                    </a>
                    <a href="https://github.com/RavindranAbilash" target="_blank">
                      <button className='btn_shadow'>
                        <i className="fab fa-github"></i>
                      </button>
                    </a>
                    <a href="https://twitter.com/abilash15567496" target="_blank">
                      <button className='btn_shadow'>
                        <i className="fab fa-twitter"></i>
                      </button>
                    </a>
                    <a href="https://fb.com/ravindran.abilash.7" target="_blank">
                      <button className='btn_shadow'>
                        <i className='fab fa-facebook-f'></i>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
