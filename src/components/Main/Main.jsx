// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
          <div className="greet">
            <p><span>Hello, Tarun.</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest the best locations in Japan?</p>
              <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
              <p>Briefly summarise the topic Quantum Computing</p>
              <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
              <p>Brainstorm ideas for my college project</p>
              <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
              <p>Fix the errors of the following code</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Main