import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../AssignMould/AssignMould.css'
import { useSelector } from 'react-redux'


export const AssignMould = (item) => {

  const navigate = useNavigate();

  const MouldRecords = useSelector((state) => {
    return state.MouldRecords;
  })

  function viewBtnHandle(item) {
    navigate('/display-mould', { state: { item } });
  }

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
                  <th scope="col">Status <i className="bi bi-arrow-down-up"></i></th>
                  <th></th>
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
                    <td><button className='ViewButton'
                      // onClick={() => setButtonClicked(true, item)}
                      onClick={() => viewBtnHandle(item)}
                    >View / Update Details</button></td>
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
