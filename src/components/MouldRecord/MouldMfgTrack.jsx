import React from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'
import '../MouldRecord/MouldMfgTrack.css'
import AddIcon from '../../assests/MouldMfgTrack/AddIcon.svg'

export const MouldMfgTrack = () => {
    const navigate = useNavigate();
    //const navigate = useNavigate();
    const location = useLocation();
    function click() {
        navigate('/new-mould-mfg-tracking/additional-element')
    }
    return (
        <>
            <div className="container-fluid MouldMFGTrack">
                <div className="row justify-content-between">

                    <div className="col-auto left-margin">
                        <div className="">
                            <h2 className='mould-heading'>Mould Records</h2>

                        </div>
                    </div>

                    <div className="col-auto ml-auto right-margin">
                        <div className="">
                            <button className='mould-record text-white'>
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
                                <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <td>ADCD1240000</td>
                                    <td>5</td>
                                    <td>3</td>
                                    <td>lorem ipsum dollar summet</td>
                                    <td>In Progress</td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <td>BH87540000</td>
                                    <td>2</td>
                                    <td>8</td>
                                    <td>lorem ipsum dollar summet</td>
                                    <td>Pending at Purchase</td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <td>UID1675000</td>
                                    <td>6</td>
                                    <td>4</td>
                                    <td>lorem ipsum dollar summet</td>
                                    <td>In Progress</td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <td>GH12430000</td>
                                    <td>9</td>
                                    <td>2</td>
                                    <td>lorem ipsum dollar summet</td>
                                    <td>In Progress</td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="checkbox" aria-label="Checkbox for following text input" /></th>
                                    <td>THWQ340000</td>
                                    <td>5</td>
                                    <td>7</td>
                                    <td>lorem ipsum dollar summet</td>
                                    <td>Pending at Purchase</td>
                                </tr>
                            {/* <tr>
                                <td></td>
                                <td></td>
                                
                            </tr>
                            */}
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
