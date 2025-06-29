'use client';
import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <img
          src="/contact banner.png"
          alt="Contact Banner"
          className="img-fluid w-100"
        />

        <div className="container-fluid my-5">
          <div className="row text-center">

            <div className="col-12 col-sm-6 col-lg-3 mt-4">
              <div className="contact-card p-4 rounded bg-dark text-white h-100 shadow-sm">
                <FiPhone size={40} className="mb-3 text-warning" />
                <h5 className="mb-2">Call Us</h5>
                <p className="mb-0">+91 12345 67890</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mt-4">
              <div className="contact-card p-4 rounded bg-dark text-white h-100 shadow-sm">
                <MdEmail size={40} className="mb-3 text-warning" />
                <h5 className="mb-2">Email Us</h5>
                <p className="mb-0">hello@roshantech.com</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mt-4">
              <div className="contact-card p-4 rounded bg-dark text-white h-100 shadow-sm">
                <FaGlobe size={40} className="mb-3 text-warning" />
                <h5 className="mb-2">Visit Website</h5>
                <p className="mb-0">www.roshantech.com</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 mt-4">
              <div className="contact-card p-4 rounded bg-dark text-white h-100 shadow-sm">
                <FaMapMarkerAlt size={40} className="mb-3 text-warning" />
                <h5 className="mb-2">Location</h5>
                <p className="mb-0">Pune, Maharashtra</p>
              </div>
            </div>

          </div>
        </div>

        <div className="container-fluid my-5" style={{ fontFamily: "Arial" }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-none d-sm-none d-md-none d-lg-block d-flex justify-content-center align-items-center">
                <img src="https://img.pikbest.com/origin/09/23/73/70mpIkbEsTRCD.png!sw800" className="img-fluid" style={{ objectFit: "contain" }} />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                <div className="display-3">
                  Quick Feedback
                </div>
                <form className="order-form mt-3">

                  <div className="form-group mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Full Name" className="form-control" required />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Your Phone Number" className="form-control" required />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your Email Address" className="form-control" required />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="type">Website Type</label>
                    <select id="type" className="form-control" required>
                      <option value="">Select Type</option>
                      <option value="portfolio">Portfolio Website – ₹1000</option>
                      <option value="simple">Simple Website – ₹2999</option>
                      <option value="business">Business Website – ₹5999</option>
                      <option value="premium">Premium w/ Admin Panel – ₹9999</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="message">Additional Notes</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Describe what you want in the website..."
                      className="form-control"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-warning">Submit Order</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
