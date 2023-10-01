import React,{useState} from 'react'
import style from './SignUp.module.css'
import logo_icon from '../../../public/Assets/logo.png';

import user_icon from '/Assets/person.png'
import email_icon from '/Assets/email.png'
import password_icon from '/Assets/password.png'
import {Link}from 'react-router-dom'
const SignUp = () => {
    return( 
    <div className={style.container}>
      <div
        className="absolute top-0 left-300"
        style={{ width: '200px', height: '100px' }}
      >
        <img src={logo_icon} alt="" style={{ width: '100%', height: '100%' }} />
      </div>
        <div className={style.header}>
            <div className={style.text}>Sign Up</div>
            <div className={style.underline}></div>
        </div>
        <div className={style.inputs}>
        <div className={style.format}>User name</div>
            <div className={style.input}>
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Enter your user name"/>
            </div>  
            <div className={style.format}>Email</div>
            <div className={style.input}>
                { <img src={email_icon} alt="" /> }
                <input type="email" placeholder="Enter your email"/>
            </div>
            <div className={style.format}>Password</div>
            <div className={style.input}>
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Enter your password"/>
            </div>
            <div className={style.format}>Confirm Password</div>
            <div className={style.input}>
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Confirm your password"/>
            </div>
        </div>
        <div className={style.submitContainer}>
            <div className={style.submit}>Sign Up</div>
        </div>
        <div className={style.haveAccount} >Do you have an Account ? <Link to={"/sign-in"}>Sign in</Link>
</div>
    </div>
    )
}

export default SignUp;