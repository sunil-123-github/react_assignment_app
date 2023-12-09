import React from 'react'
import '../CreateMould/CreateMould.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addRecord } from '../../redux_store/Slices/MouldRecords'
import { useDispatch } from 'react-redux'

export const CreateMould = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    function cancle_btn() {
        navigate('/new-mould-mfg-tracking')
    }

    const [selectedValue, setSelectedValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [cavities, setCavities] = useState('')
    const [Status, setStatus] = useState('')
    const [des, setDes] = useState('')


    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleNumberChange = (event) => {
        setNumberValue(event.target.value);
    };
    const handleCavities = (event) => {
        setCavities(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleDes = (event) => {
        setDes(event.target.value)
    }
    function createRecord() {
        const obj = {
            partNumber: selectedValue,
            mouldNum:numberValue ,
            NumOfCavity: cavities,
            Desc: des,
            status: Status,
        }
       
        // function addUniqueId(obj) {
        //     const id = Math.random().toString().substring(2);
        //     return { id, ...obj };
        //   }
          
        //   const dataWithId = addUniqueId(obj);
          
          

        dispatch(addRecord(obj));
        navigate('/new-mould-mfg-tracking')

    }



    return (
        <>
            <div className="container-fluid CreateMould">
                <div className="row align-items-center padding">
                    {/* Left side content */}
                    <div className="col-4 d-flex align-items-center">
                        <i className="bi bi-arrow-left" onClick={cancle_btn}></i>
                        <h5 className="mb-0 ms-2 create-mould fw-bold">Create New Mould</h5>
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
                            <div className="row">
                                <div className="col">
                                    <h5 className='mould-heading fw-bold'>Create New Mould Master Number</h5>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <label  className='fw-bold'>Part Number</label><br />
                                    <select name="cars" id="cars" value={selectedValue} onChange={handleSelectChange} className='part-number'>
                                        <option value="volvo">Select</option>
                                        <option value="YTDG5432761">YTDG5432761</option>
                                        <option value="BHTY5432768">BHTY5432768</option>
                                        <option value="XYZW2109890">XYZW2109890</option>
                                        <option value="CDRT1221324">CDRT1221324</option>
                                        <option value="BMTR5467436">BMTR5467436</option>
                                        <option value="YDNB0967432">YDNB0967432</option>
                                        <option value="LMQU3245865">LMQU3245865</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label className='fw-bold'>Mould Number</label><br />
                                    <input type="number"
                                        id="numberField"
                                        value={numberValue}
                                        onChange={handleNumberChange}
                                        className='part-number' />
                                </div>
                                <div className="col-4">
                                    <label className='fw-bold'>Number of Cavities</label><br />
                                    <select name="cars" id="cars"
                                        value={cavities}
                                        className='part-number'
                                        onChange={handleCavities}
                                    >
                                        <option value="">Select</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>

                                    </select>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <div className="col-4">
                                        <label  className='fw-bold'>Mould Item Code</label><br />
                                        <input type="text" id="fname" name="fname" placeholder='Code' className='part-number' />
                                    </div>
                                </div>
                            </div>
                            <hr className='mb-0' />
                            <div className="row">
                                <div className="col">
                                    <h5 className='mould-heading fw-bold'>Create Record For Mould</h5>
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <label  className='fw-bold'>Mould Material</label><br />
                                    <input type="text" id="fname" name="fname" placeholder='Enter Mould Material' className='part-number' />
                                </div>
                                <div className="col-4">
                                    <label  className='fw-bold'>Status</label><br />
                                    <select name="cars"
                                        id="cars"
                                        className='part-number'
                                        value={Status}
                                        onChange={handleStatus}
                                    >
                                        <option value="">Select</option>
                                        <option value="Completed">Completed</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Pending at Purchase">Pending at Purchase</option>
                                        <option value="Mould Receipt Done">Mould Receipt Done</option>
                                    </select>

                                </div>
                                <div className="col-4">
                                    <label  className='fw-bold'>Customer</label><br />
                                    <input type="text" id="fname" name="fname" placeholder='Enter Customer ABC' className='part-number' />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <label  className='fw-bold'>Direct / Indirect</label><br />
                                    <select name="cars" id="cars" className='part-number'>
                                        <option value="volvo">Select</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select>
                                </div>
                                <div className="col-4">
                                    <label className='fw-bold'>Buyer Email Id</label><br />
                                    <input type="text" id="fname" name="fname" className='part-number' placeholder='Email' />
                                </div>
                                <div className="col-4">
                                    <label className='fw-bold'>Quality Email Id</label><br />
                                    <input type="text" id="fname" name="fname" className='part-number' placeholder='Email' />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <div className="col-4">
                                    <label  className='fw-bold'>Description</label><br />
                                    <input
                                        type="text"
                                        id="fname" name="fname"
                                        className='part-number'
                                        placeholder='lorem ipsum dollar'
                                        onChange={handleDes}
                                        value={des}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row padding pb-2">
                    {/* Right side content */}
                    <div className="col d-flex justify-content-end">
                        <button className='cancel-btn' onClick={cancle_btn}>CANCEL</button>
                        <button className='create-record-btn' onClick={createRecord}>CREATE RECORD</button>
                    </div>
                </div>

            </div>


        </>

    )
}
