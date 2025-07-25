'use client';
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  })

  return (
    <>
      <div className="text-white" style={{ fontFamily: 'var(--font-oswald)' }}>
        <div className="container-fluid w-100 h-auto text-center">
          <div className="display-1" style={{ fontSize: "10vw" }}>ROSHAN TECH STUDIO</div>
          <div className="display-6 text-uppercase d-none d-sm-none d-md-block d-lg-block" style={{ fontSize: "3vw" }}>YOUR VISION, OUR COMMITMENT</div>
          <div className="display-6 text-uppercase d-block d-sm-block d-md-none d-lg-none" style={{ fontSize: "5vw" }}>YOUR VISION, OUR COMMITMENT</div>
          <img src="/banner img.png" alt='banner-img (Laptop)' className="img-fluid" />
        </div>

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
          <p className="lead fs-4">
            We offer a wide range of services to help you succeed in the digital world.
          </p>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <Link href="/service" className='card text-decoration-none text-white'>
                <div className='card'>
                  <img src="/PORTFOLIO Website.png" alt='Portfolio Website' className='img-fluid rounded' />
                  <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Portfolio Website</button>
                </div>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <Link href="/service">
                <div className='card'>
                  <img src="/Simple Website.png" alt='Simple Website' className='img-fluid rounded' />
                  <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Simple Website</button>
                </div>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <Link href="/service">
                <div className='card'>
                  <img src="/Business Website.png" alt='Business Website' className='img-fluid rounded' />
                  <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Business Website</button>
                </div>
              </Link>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3'>
              <Link href="/service">
                <div className='card'>
                  <img src="/Premium Website.png" alt='Business Website' className='img-fluid rounded' />
                  <button className='btn btn-primary mt-2 fw-bold' style={{ fontFamily: "Arial" }}>Premium Website</button>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="cta-section my-1" style={{ backgroundImage: "url('/CTA-banner.png')", height: "auto", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container-fluid w-100 h-auto text-center">
            <div className="display-1" style={{ fontSize: "10vw" }}>DON'T HAVE A WEBSITE</div>
            <div className="display-6">
              <a href="#" className="btn2 text-decoration-none text-white" style={{ fontSize: "3vw" }}>Order Now</a>
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center">
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-stand-folding-hand-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--boy-stands-person-hands-character-casual-outfits-half-body-pack-people-illustrations-5600563.png" className='img-fluid' />
            </div>
          </div>
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

        {/* review form */}
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
                <form className="review-form mt-3">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your Name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="business">Business Name</label>
                    <input type="text" id="business" placeholder="Your Business Name" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select id="rating">
                      <option value="">Give your Rating</option>
                      <option value="1">⭐</option>
                      <option value="2">⭐⭐</option>
                      <option value="3">⭐⭐⭐</option>
                      <option value="4">⭐⭐⭐⭐</option>
                      <option value="5">⭐⭐⭐⭐⭐</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label for="formFile" class="form-label">Default file input example</label>
                    <input class="form-control" type="file" id="formFile" />
                  </div>

                  <button type="submit">Submit</button>
                </form>



              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
