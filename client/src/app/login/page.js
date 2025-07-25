import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='container d-flex justify-content-center align-items-center min-vh-100'>
            <div className='card p-4 shadow-lg text-center' style={{maxWidth: "500px", width: "100%"}}>
                <h1 className='text-light mb-3' style={{ fontFamily: 'var(--font-oswald)' }}>LOGIN</h1>
                <form>
                    <div className='form-floating mb-3'>
                        <input type="email" className='form-control' id='EmailInput' placeholder='Enter Your Email' />
                        <label htmlFor="EmailInput">Enter Email</label>
                    </div>
                    <div className='form-floating mb-3'>
                        <input type="password" className='form-control' id='PasswordInput' placeholder='********' />
                        <label htmlFor="PasswordInput">Enter Password</label>
                    </div>
                    <button className="login-button w-100" role="button"><span className="login-button-shadow"></span><span className="login-button-edge"></span><span className="login-button-front text fw-bold">LOGIN</span></button>
                    <hr className='text-light' />
                    <p className='text-light'>DON'T HAVE ACCOUNT ? <Link href={"/Register"}>REGISTER</Link></p>
                </form>
            </div>
        </div>
    )
}

export default page