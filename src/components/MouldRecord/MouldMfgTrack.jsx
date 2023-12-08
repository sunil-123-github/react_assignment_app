import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../MouldRecord/MouldMfgTrack.css'
import AddIcon from '../../assests/MouldMfgTrack/AddIcon.svg'
import { useSelector } from 'react-redux'


export const MouldMfgTrack = () => {
    const navigate = useNavigate();
    function redirect() {
        navigate('/create-mould-record');
    }
    const MouldRecords = useSelector((state) => {
        return state.MouldRecords
    })
    

    return (
        <>
            <div className="container-fluid MouldMFGTrack">
                <div className="row justify-content-between">
                   <div className="col-auto left-margin">
                        <div className="">
                            <h2 className='mould-heading mould_record'>Mould Records</h2>
                        </div>
                    </div>
                    <div className="col-auto ml-auto right-margin">
                        <div className="">
                            <button className='mould-record text-white' onClick={redirect}>
                                <img src={AddIcon} alt="ADD ICON" style={{ marginRight: '9px' }} />
                                CREATE NEW MOULD RECORD</button>
                        </div>
                    </div>
                </div>
                <div className="row DataTable mt-4">
                    <div className="col table-padding">
                        <table className="table table-striped">
                            <thead>
                                <tr className='table-head'>
                                    <th scope='col'> <input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <th scope="col">Part Number <i className="bi bi-arrow-down-up fw-bold"></i></th>
                                    <th scope="col">Mould Number <i className="bi bi-arrow-down-up fw-bold"></i></th>
                                    <th scope="col">No Of Cavities <i className="bi bi-arrow-down-up fw-bold"></i></th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Status <i class="bi bi-arrow-down-up"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                {MouldRecords.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                        <td>{item.partNumber}</td>
                                        <td>{item.mouldNum}</td>
                                        <td>{item.NumOfCavity}</td>
                                        <td>{item.Desc}</td>
                                        <td>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                  </div>
                </div>
                <div className="row mt-3 pb-3">
                    <div className="col d-flex">
                        <span className='text-center m-auto'>©2023 NRB BEARINGS LIMITED</span>
                    </div>
                </div>
            </div>
        </>
    )
}
