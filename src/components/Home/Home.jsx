import React from 'react'
import '../Home/Home.css'
import iconNRB from '../../assests//Home_Page/iconNRB.png'
import logo from '../../assests/Home_Page/logo.png'
import button from '../../assests/Home_Page/button.png'
import { useNavigate } from 'react-router-dom'

export const Home = () => {

    let navigate = useNavigate()

    function goApp() {
        navigate('/new-mould-mfg-tracking')
    }


    return (
        <>
            <div className="container-fliuid">
                <div className="row m-0">
                    <div className="col-md-8 home_bg img p-0" style={{ width: '61%' }}>
                    </div>
                    <div className="col-md-4" style={{ width: '39%' }}>
                        <div className="row p-0" style={{ marginTop: '51px' }}>
                            <div className="col p-0">
                                <img src={logo} alt="" style={{ width: '164px', height: '164px', marginLeft: '39px' }} />
                            </div>
                            <div className="col p-0">
                                <img src={iconNRB} alt="" style={{ width: '236px', height: '124px', marginTop: '19px', marginRight: '59px' }} />
                            </div>

                        </div>
                        <div className="row mt-4">
                            <div className="col text-center">
                                <p className='content text-center m-auto'>MOLD LIFE CYCLE MANAGEMENT SYSTEM</p>
                                <div className="horizontal-bar margin-top"></div>
                            </div>

                        </div>
                        <div className="row">
                            <p className='signin'>Sign In</p>
                            <div className="input-container">
                                <span className="logo-icon"></span>
                                <input type="text" placeholder='Email Address' className='email' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex mt-5">
                                <button onClick={goApp} className='m-auto border-0 bg-white'>
                                    <img src={button} alt="Click Button" className='click-btn m-auto' />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
