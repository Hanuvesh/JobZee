import React from 'react'
import { FaUserPlus } from 'react-icons/fa';
import { MdFindInPage } from "react-icons/md";
import {IoMdSend} from 'react-icons/io'


const HowItWorks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How JobZee Works</h3>
        <div className="banner">
          <div className="card">
           <FaUserPlus/>
           <p>Create Account</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sit deleniti quae placeat suscipit illum. Quas eos reprehenderit quod explicabo tempore expedita,
             laboriosam culpa soluta fugiat veniam quisquam itaque! Mollitia?</p>
          </div>
          <div className="card">
           <MdFindInPage/>
           <p>Find a Job/Post A Job</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sit deleniti quae placeat suscipit illum. Quas eos reprehenderit quod explicabo tempore expedita,
             laboriosam culpa soluta fugiat veniam quisquam itaque! Mollitia?</p>
          </div>
          <div className="card">
           <IoMdSend/>
           <p>Create Account</p>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sit deleniti quae placeat suscipit illum. Quas eos reprehenderit quod explicabo tempore expedita,
             laboriosam culpa soluta fugiat veniam quisquam itaque! Mollitia?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
