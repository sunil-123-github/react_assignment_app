import React from 'react'
import '../CreateMould/CreateMould.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addRecord } from '../../redux_store/Slices/MouldRecords'
import { useDispatch } from 'react-redux'
import '../AssignMould/AssignMould.css'
import { useLocation } from 'react-router-dom'

export const DisplayMould = () => {

    const navigate = useNavigate()
    function cancle_btn(item) {
        navigate('/assign-mould-(supplier&life)')
    }
    const location = useLocation();
   // console.log(location)
    const passedData = location.state;
   console.log(passedData.item.partNumber)  


    return (
        <>
            <div className="container-fluid CreateMould">
                <div className="row align-items-center padding">
                    {/* Left side content */}
                    <div className="col-4 d-flex align-items-center">
                        <i className="bi bi-arrow-left" onClick={cancle_btn}></i>
                        <h5 className="mb-0 ms-2 create-mould fw-bold">Assign Mould Part</h5>
                    </div>

                    {/* Right side content */}
                    <div className="col-8 text-end">
                        <i className="bi bi-x-lg" onClick={cancle_btn}></i>
                    </div>
                </div>

                {/* Additional rows go here */}
                <div className="row">
                    <div className="col">
                        <div className="mould-form">
                           
                            <div className="row mt-1 pt-3">
                                <div className="col-2">
                                    <label  className='fw-bold'>Part Number</label><br />
                                    <p>{passedData.item.partNumber}</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Mould Number</label><br />
                                    <p>{passedData.item.mouldNum}</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Number of Cavities</label><br />
                                    <p>{passedData.item.NumOfCavity}</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Mould Material</label><br />
                                    <p>Iorn</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Supplier Code / Name</label><br />
                                    <p>S045BF</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Customer</label><br />
                                    <p>Flagship Mechanics Inc.</p>
                                </div>

                            </div>
                            <div className="row mt-1">
                                <div className="col-2">
                                    <label  className='fw-bold'>Buyers Email Id</label><br />
                                    <p>sunil@facebook.com</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Quality Email Id</label><br />
                                    <p>flagship@gamil.com</p>
                                </div>
                                <div className="col-4">
                                    <label  className='fw-bold'>Description</label><br />
                                    <p>{passedData.item.Desc}</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Mould Start Date</label><br />
                                    <p>22/12/2023</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>Mould Accepted Date</label><br />
                                    <p>11/12/2023</p>
                                </div>
                            </div>
                            <div className="row mt-1">
                                <div className="col-2">
                                    <label  className='fw-bold'>GRN Number</label><br />
                                    <p>IB12345</p>
                                </div>
                                <div className="col-2">
                                    <label  className='fw-bold'>GRN Date</label><br />
                                    <p>22/10/2023</p>
                                </div>  
                                <div className="col-2">
                                    <label  className='fw-bold'>Status</label><br />
                                    <p>{passedData.item.status}</p>
                                </div>                    
                            </div>
                            <hr className='mb-0' />
                            <div className="row">
                                <div className="col">
                                    <h5 className='heading'>Final Acceptance By Quality</h5>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-2">
                                    <label  className='fw-bold'>Quality Person Name</label><br />
                                    <p>Mr.Satish Gaikwad</p>
                                </div>
                                <div className="col-2">
                                    <label className='fw-bold'>Quality Check Date</label>
                                    <p>07/05/2023</p>
                                </div>      
                            </div>
                            <hr className='mb-0' />
                            <div className="row">
                            <div className="col-2">
                                    <h5 className='fw-bold'>Set Mould Part Life</h5>
                                    <input type="text" id="fname" name="fname" className='part-number' placeholder='10,00,000' />
                                </div>
                                    
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row padding pb-2">
                    {/* Right side content */}
                    <div className="col d-flex justify-content-end">
                        <button className='cancel-btn' onClick={cancle_btn}>CANCEL</button>
                        <button className='create-record-btn' onClick={cancle_btn}>ASSIGN</button>
                    </div>
                </div>

            </div>


        </>

    )
}
