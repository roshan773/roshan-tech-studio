'use client';

import React from 'react'
import { useEffect } from 'react';

const page = () => {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  })

  return (
    <>
      <div className='container-fluid'>
        <img src="/service banner.png" alt="Service Banner" className="img-fluid" />

        <div className="marquee-wrapper py-3">
          <div className="marquee-track">
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
            <span>
              🚀 Helping You Build a Digital Identity That Matters 🚀 Helping You Build a Digital Identity That Matters
            </span>
          </div>
        </div>

        <div className="container-fluid my-5">
          <h1 className="mt-4" style={{ fontFamily: 'var(--font-oswald)' }}>Our Services</h1>
          <p className="lead">
            We offer a wide range of services to help you succeed in the digital world.
          </p>
        </div>

        <div className='conatiner-fluid'>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <div className='card'>
                <img src="/PORTFOLIO Website.png" alt='Portfolio Website' className='img-fluid' />
                <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Book This Package</button>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <div className='card'>
                <img src="/Simple Website.png" alt='Simple Website' className='img-fluid' />
                <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Book This Package</button>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <div className='card'>
                <img src="/Business Website.png" alt='Business Website' className='img-fluid' />
                <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Book This Package</button>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <div className='card'>
                <img src="/Premium Website.png" alt='Business Website' className='img-fluid' />
                <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Book This Package</button>
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid my-5'>
          <img src="/Features (1).png" alt='Features' className='img-fluid' />
        </div>

        {/* FAQ */}
        <div className="container my-5" id="faq" style={{ fontFamily: "Arial" }}>
          <h2 className="text-center display-5 fw-bold mb-5 text-white">
            Frequently Asked Questions
          </h2>
          <div className="accordion accordion-flush" id="faqAccordion">

            {/* Q1 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style={{ backgroundColor: "#000000" }}>
                  🙋‍♂️ I don't know anything about websites—can you still help me?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Yes, 100%! We specialize in helping people who are just starting. You don’t need to be tech-savvy—we’ll explain everything in simple terms and take care of the full process for you.
                </div>
              </div>
            </div>

            {/* Q2 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: "#000000" }}>
                  🤷‍♀️ I already have customers on WhatsApp and Instagram—why do I need a website?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Social media is good, but a website builds trust, makes you look professional, and helps you reach more people on Google. It’s your digital shop, available 24/7—even when you’re sleeping.
                </div>
              </div>
            </div>

            {/* Q3 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ backgroundColor: "#000000" }}>
                  💸 I’m just starting out and can’t spend much—what are my options?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Don’t worry—we offer budget-friendly plans that give you a strong online presence without high costs. You’ll get great value and professional quality even at the basic level.
                </div>
              </div>
            </div>

            {/* Q4 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ backgroundColor: "#000000" }}>
                  🧩 I don’t have any logo, photos or content—can you help with that too?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Yes, we help you from scratch! We can design your logo, write content, and even help with images. You just share your idea—we’ll turn it into a website.
                </div>
              </div>
            </div>

            {/* Q5 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{ backgroundColor: "#000000" }}>
                  ⏱ How long will it take to build my website?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Basic websites are usually ready in 3–5 days. If it’s a larger or custom project, it might take 7–10 days. We always share a clear timeline at the start.
                </div>
              </div>
            </div>

            {/* Q6 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingSix">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{ backgroundColor: "#000000" }}>
                  📱 Will my website work on mobile and look modern?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  Definitely. All our websites are mobile-friendly and designed to look modern and professional across all devices—phones, tablets, and desktops.
                </div>
              </div>
            </div>

            {/* Q7 */}
            <div className="accordion-item mb-3 rounded shadow-sm border border-secondary text-white" style={{ backgroundColor: "#000000" }}>
              <h2 className="accordion-header" id="headingSeven">
                <button className="accordion-button collapsed text-white fw-semibold p-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={{ backgroundColor: "#000000" }}>
                  🛠 What if I need changes later or want to add more?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-light">
                  We offer support even after launch. You can reach out any time to update content, add new features, or improve your design as your business grows.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default page