import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react'
import axios from 'axios';
import './Registration.css'




function Registration() {
    const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", { username:name, email, password })
        .then((res) => {
            alert("User Saved Successfully")
        })
        .catch(err => console.log(err))


}

    return (
        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong card-registration" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
                                <form>

                                    <div className="row">
                                        <div className="col-md-6 mb-4">

                                            <div className="form-outline">
                                                <input type="text" id="Name" className="form-control form-control-lg" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
                                                <label className="form-label" htmlhtmlFor="firstName">Name</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 mb-4 pb-2">

                                            <div className="form-outline">
                                                <input type="email" id="emailAddress" className="form-control form-control-lg" placeholder="Phone number or email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                <label className="form-label" htmlFor="emailAddress">Email or Phone number</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-4 d-flex align-items-center">

                                            <div className="form-outline datepicker w-100">
                                                <input type="text" className="form-control form-control-lg" id="password" placeholder="Enter a password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                <label htmlFor="password" className="form-label">Password</label>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="mt-4 pt-2">
                                        <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={e => { handleSubmit(e) }} />
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Registration;