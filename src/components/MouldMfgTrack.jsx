import React from 'react'
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom'


export const MouldMfgTrack = () => {
    const navigate = useNavigate();

   
    //const navigate = useNavigate();
    const location = useLocation();
    function click() {
        navigate('/new-mould-mfg-tracking/additional-element')

    }



    // Redirect to another route if needed
  

    return (
        <>
            <h5>Mould Manufacutring Track Component</h5>
            <Link to='/new-mould-mfg-tracking/additional-element'
                onClick={click}
            >
                CLick Me
            </Link>


            <Outlet />

         

        </>
    )
}
