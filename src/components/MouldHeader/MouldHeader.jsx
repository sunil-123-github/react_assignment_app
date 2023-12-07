import React from 'react'
import '../MouldHeader/MouldHeader.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'


export const MouldHeader = () => {

  const navigate = useNavigate()
  const handleNavigation = () => {
    // Use navigate to go to the route
    navigate('/new-mould-mfg-tracking');
    navigate('/assign-mould-(supplier&life)')
  };

  const location = useLocation();
  const currentUrl = location.pathname; 
  let activeClassName;

  if ( '/new-mould-mfg-tracking' && '/new-mould-mfg-tracking/additional-element' === currentUrl ) {
    activeClassName = true
  }

  const style1 = {
    fontWeight: 'bold',
    color: '#13486B',
    borderBottom: '8px solid #12486B',
    paddingBottom: '15px'
  };





  return (
    <>
      <div class="flex-container mouldheader container-fluid ">
        <div className="row w-100">
          <div className='col-3'  >
            <Link to='/new-mould-mfg-tracking' onClick={handleNavigation} className='text-decoration-none'
              style={activeClassName ? style1 :null}
            >
              <span className='nav-1'>New Mould Manufacturing Tracking</span>
            </Link>
          </div>
          <div className='col-3' >
            <Link to='/assign-mould-(supplier&life)' onClick={handleNavigation}
              style={activeClassName ? null : style1 }
              className='text-decoration-none'>
              <span className='nav-2'>Assign Mould (Supplier & Life)</span>
            </Link>
          </div>
        </div>


      </div>


    </>
  )
}


