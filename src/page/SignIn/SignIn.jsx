import React,{useState} from 'react'
import style from './SignIn.module.css'

import user_icon from '../../../public/Assets/person.png'
import email_icon from '../../../public/Assets/email.png'
import password_icon from '../../../public/Assets/password.png'
import {Link}from 'react-router-dom'
const SignIn = () => {

    return( 
    <div className={style.container}>
        <div className={style.header}>
            <div className={style.text}>Sign In</div>
            <div className={style.underline}></div>
        </div>
        <div className={style.inputs}>
      
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
        </div>
        <div className={style.submitContainer}>
            <div className={style.submit}>Sign In</div>
        </div>
        <div className={style.haveAccount} >Do you have an Account ? <Link to={"/sign-up"}>Sign up</Link>
        </div>
    </div>
    )
}

export default SignIn;