import React from 'react'

const Footer = () => {
  return (
   
    <div className="footer signinbg">
    <div className="container text-white py-5">
        <div className="d-flex justify-content-between flex-column flex-sm-row">
            <div className="">
                <img src={require('../asests/logo-footer.jpg')}/>
                <p className="fw-light mt-3 text-secondary">
                    Copyright © FieldGroove, LLC 2024. All Rights Reserved.<br />
                    716 Newman Springs Road, Suite 307 Lincroft, NJ 07738<br />
                    <span className="text-danger">Privacy Policy</span>
                </p>
            </div>
            <div className="">
                <p className="fw-light mt-5 text-secondary">
                    We would love to show you the power of FieldGroove. To setup<br/>
                    a demo or get an account setup, please contact us at<br/>
                    <a href="#" className="link-danger text-decoration-none">sales@fieldgroove.com</a> or by phone at <a href="#" className="link-danger text-decoration-none">212-537-0218</a>
                </p>
            </div>
        </div>

    </div>
</div> 

  )
}

export default Footer