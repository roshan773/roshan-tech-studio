'use client'
import React from 'react';

const Page = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg w-100" style={{ maxWidth: '500px' }}>
                <h1 className="text-light mb-4 text-center" style={{ fontFamily: 'var(--font-oswald)' }}>REGISTER</h1>

                <form>
                    {/* Name Input */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="nameInput"
                            placeholder="Enter Your Name"
                        />
                        <label htmlFor="nameInput">Enter Name</label>
                    </div>

                    {/* Email Input */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="Enter Your Email"
                        />
                        <label htmlFor="emailInput">Enter Email</label>
                    </div>

                    {/* Password Input */}
                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            placeholder="********"
                        />
                        <label htmlFor="passwordInput">Enter Password</label>
                    </div>

                    {/* Submit Button */}
                    <button type='submit' className="login-button w-100" role="button"><span className="login-button-shadow"></span><span className="login-button-edge"></span><span className="login-button-front text fw-bold">REGISTER</span></button>
                </form>
            </div>
        </div>
    );
};

export default Page;
