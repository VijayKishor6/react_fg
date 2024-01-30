import React from 'react'
import { Header } from '../common/Header'
import Footer from '../common/Footer'




const Login = () => {
  return (
    <div className="contianer-fluid page-signup">
    <div className="container p-2">
       {/* Header*/}
       <Header/>
        <div className="row my-4">
            <div className="card w-75 mx-auto  border-0">
                <div className="row">
                     <div className="col-lg-5 col-md-5 col-sm-12 signinbg p-4  text-white">
                        <iconify-icon icon="bxs:right-arrow" className="arrow"></iconify-icon>
                        <h5 className="text-decoration-underline">SIGN IN</h5>
                        <form id="loginForm">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control rounded-0" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input rounded-0" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                            </div>
                           <div className="row  mt-4 mb-5">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <button type="submit" className="btn btn-outline-secondary w-100">Forgot Password</button>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <button type="submit" className="btn btn-danger w-100 d-flex align-items-center justify-content-center">
                                        Sign In
                                        <iconify-icon icon="ri:arrow-right-s-line"></iconify-icon>   
                                    </button>
                                </div>
                           </div>

                        </form>
                     </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 p-4 bg-light">
                        <h5 className="text-danger">NEED AN ACCOUNT?</h5>
                        <p className="fw-light ">
                            Create an account to start managing<br />
                            your company. Click the "Create New Account"<br />
                            button below to get started
                        </p>
                        <button type="submit" className="btn text-white px-1 new">Create New Account</button>

                    </div>
                </div>
            </div>
        </div>
        <div className="row ">
            <ul className="nav d-flex justify-content-center">
                <li className="nav-item">
                    <a className="nav-link linkbody" aria-current="page" href="#">FEATURES</a>
                </li>
                    <div className="vr"></div>
                <li className="nav-item">
                    <a className="nav-link linkbody" href="#">FAQS</a>
                </li>
                    <div className="vr"></div>
                <li className="nav-item">
                    <a className="nav-link linkbody" href="#">CONTACT US</a>
                </li>
                    <div className="vr"></div>
                <li className="nav-item">
                    <a className="nav-link linkbody" href="#">LOGIN</a>
                </li>
                    <div className="vr"></div>
                <li className="nav-item">
                    <a className="nav-link linkbody" href="#">SIGN UP</a>
                </li>
            </ul>
        </div>
    </div>
{/*Footer */}
 
<Footer/>
</div>
  )
}

export default Login