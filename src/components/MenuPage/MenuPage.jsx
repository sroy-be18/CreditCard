import React from 'react'
import LeftSide from '../LeftSide/LeftSide'
import Step1 from '../Step1/Step1'
// import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'

const MenuPage = () => {
    return (
        <div className="container-fluid full-screen-container">
            <div className="row header">
                <span>Welcome Saurabh, You have <span className='red-text'>Notifications (1) </span><span className='grey-text'>Inbox</span> <span className='red-text'>(0 new)</span></span>
            </div>
            <div className="row body-content">
                <div className="col-2 left-side">
                    <LeftSide/>
                </div>
                <div className="col-10 right-side">
                    <div className="loan-offers">
                        <span>Loan Offers on credit card</span>
                    </div>
                    <Step1 />
                    {/* <Step2 /> */}
                    <Step3 />
                </div>
            </div>
        </div>
    )
}

export default MenuPage