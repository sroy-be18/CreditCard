import React from 'react'

const LeftSide = () => {
  return (
    <>
      <div className='left-option-menu'>
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid" id="left-side-container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className='nav-item'><a href="/">View Account Summary</a></li>
                <li className='nav-item'><a href="/">View Active Loan Details</a></li>
                <li className='nav-item'><a href="/">View / Download Statements</a></li>
                <li className='nav-item'><a href="/">Rewards Catalog Redemption</a></li>
                <li className='nav-item'><a href="/">Contact Details</a></li>
                <li className='nav-item'><a href="/">Report lost/stolen card</a></li>
                <li className='nav-item'><a href="/">View Dispute Status</a></li>
                <li className='nav-item'><a href="/">Redeem Rewards</a></li>
                <li className='nav-item'><a href="/">Loan on Credit Card</a></li>
                <li className='nav-item'><a href="/">Pay Utility Bills</a></li>
                <li className='nav-item'><a href="/">Get Topup Loan on Card</a></li>
                <li className='nav-item'><a href="/">Click an EMI</a></li>
                <li className='nav-item'><a href="/">Pay Credit Card bill</a></li>
                <li className='nav-item'><a href="/">Recharge Mobile/DTH</a></li>
                <li className='nav-item'><a href="/">Submit Documents</a></li>
                <li className='nav-item'><a href="/">Manage Cards</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <br></br>
      <div className="left-option-menu">
        <nav className="navbar navbar-expand-sm navbar-light">
          <div className="container-fluid" id="left-side-container2">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent2" aria-controls="navbarSupportedContent2" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent2">
              <ul className="navbar-nav">
                <li className='nav-item'><a href="/">Other Services and Query</a></li>
                <li className='nav-item'><a href="/">PIN Related</a></li>
                <li className='nav-item'><a href="/">Standing Instructions</a></li>
                <li className='nav-item'><a href="/">Download Citi Mobile App</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default LeftSide