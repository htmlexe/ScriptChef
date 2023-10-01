import React, { useState } from 'react';
import style from './Job.module.css';
import logo_icon from '../../../public/Assets/logo.png';


const Job = () => {
    return (

        <div className={style.container}>
        <div
         
        >

            <div >
            <div className={style.header}>
                <div className={style.text}>Công việc bạn muốn theo đuổi</div>
            </div>
            </div>

                <div className={`sub ${style.sub}`}>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check1" />
                    <label htmlFor="check1" className='custom-input-label'>
                        <span className={style.format}>Product Owner</span>
                    </label>
                </div>
                <div className={`sub ${style.sub}`}>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check2" />
                    <label htmlFor="check2" className='custom-input-label'>
                        <span className={style.format}>Scrum Master</span>
                    </label>
                </div>
                <div className={`sub ${style.sub}`}>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check3" />
                    <label htmlFor="check3" className='custom-input-label'>
                        <span className={style.format}>Front-end developer</span>
                    </label>
                </div>
                <div className={`sub ${style.sub} ${style.backend}`}>
                    <input type="checkbox" className='custom-control custom-checkbox' id="check4" />
                    <label htmlFor="check4" className='custom-input-label'>
                        <span className={style.format}>Back-end developer</span>
                    </label>
                </div>
                <div className={style.submit}>Tiếp tục</div>
            </div>
        </div>
    );
}

export default Job;
