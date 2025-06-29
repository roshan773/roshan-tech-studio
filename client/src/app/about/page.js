import React from 'react';
import { MdOutlineDoubleArrow } from "react-icons/md";

const About = () => {
  return (
    <section className="container-fluid bg-black text-white" style={{ fontFamily: 'var(--font-oswald)' }}>

      {/* Banner */}
      <img src="/about banner.png" alt="About Banner" className="img-fluid w-100" />

      {/* About Content */}
      <div className="about-content container pt-5">

        {/* Intro */}
        <h1 className="display-4 py-4">Hi 🫡! I’m Roshan,</h1>

        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          A passionate freelance web developer. I help students, startups, and small businesses build an online presence to attract clients and job opportunities by providing modern, user-friendly websites.
        </p>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          I believe every idea — no matter how small — deserves a place on the internet. That’s why I build simple, affordable websites that bring your business or portfolio to life.
        </p>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          My journey started with curiosity and passion. Today, I help others who feel, “I don’t know how websites work,” because I was once there too.
        </p>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          I'm here to support you on your journey to build a powerful digital presence.
        </p>

        {/* Services */}
        <h1 className="display-5 mt-5">Services I Provide</h1>
        <div className="mt-4">
          {[
            "Portfolio websites for students",
            "Business websites for startups",
            "Clean, mobile-friendly designs",
            "Fast delivery with ongoing support",
            "Simple process — even if you're not tech-savvy",
            "Reliable support and website maintenance",
            "Regular updates and improvements",
            "SEO optimization for better visibility",
          ].map((item, index) => (
            <p key={index} className="lead fs-6 fs-md-5 d-flex align-items-start" style={{ fontFamily: 'Arial' }}>
              <MdOutlineDoubleArrow className="me-2 mt-1 text-warning" />
              {item}
            </p>
          ))}
        </div>

        {/* Mission */}
        <h1 className="display-5 mt-5">My Mission</h1>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          My mission is to empower individuals and businesses by making web development accessible and straightforward. I aim to create websites that not only look great but also function seamlessly, helping you achieve your goals online.
        </p>

        {/* Projects */}
        <h1 className="display-5 mt-5">Projects I Have Worked On</h1>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          I’ve worked on a variety of projects, from personal portfolios to business websites. Each project is a testament to my commitment to quality and customer satisfaction. Here are some examples:
        </p>

        <div className="row gy-4">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <a href="https://logolabtechnology.netlify.app/" className="text-decoration-none">
              <img src="/startup.png" alt="Portfolio Website" className="img-fluid rounded shadow-sm" />
              <p className="mt-2 lead text-white text-center">Portfolio Website</p>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <a href="https://wedgramdesigns.vercel.app/" className="text-decoration-none">
              <img src="/business.png" alt="Business Website" className="img-fluid rounded shadow-sm" />
              <p className="mt-2 lead text-white text-center">Business Website</p>
            </a>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <a href="https://raghupatilportfolio.netlify.app/" className="text-decoration-none">
              <img src="/portfolio.png" alt="Personal Portfolio" className="img-fluid rounded shadow-sm" />
              <p className="mt-2 lead text-white text-center">Portfolio Website</p>
            </a>
          </div>
        </div>

        {/* Why Work With Me */}
        <h1 className="display-5 mt-5">Why Work With Me?</h1>
        <p className="lead fs-5 fs-md-4" style={{ fontFamily: 'Arial' }}>
          I understand that choosing a web developer is a big decision. Here’s why I believe I’m the right partner for you:
        </p>
        <ul className="list-unstyled lead fs-6 fs-md-5 ps-3" style={{ fontFamily: 'Arial' }}>
          <li>✅ 100% responsive designs</li>
          <li>✅ Simple process — even if you're not tech-savvy</li>
        </ul>

        {/* Call to Action */}
        <div className="text-center mt-5" style={{ fontFamily: 'Arial' }}>
          <p className="fw-semibold fs-5">Ready to make your first website or online portfolio?</p>
          <a href="#contact" className="btn btn-outline-warning fw-semibold px-4">Let’s Connect</a>
        </div>

        {/* Quote */}
        <div className="text-center mt-5" style={{ fontFamily: 'Arial' }}>
          <p className="fw-semibold fst-italic fs-6">“Behind every screen, there's a story. Let's build yours.”</p>
        </div>

      </div>
    </section>
  );
};

export default About;
