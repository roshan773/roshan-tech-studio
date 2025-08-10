import Image from "next/image";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: "#000000" }}>
      <hr className="border-secondary my-4 contsiner-fluid" />
      <div className="container">
        <div className="row gy-4 text-center text-md-start">

          {/* Logo & Tagline */}
          <div className="col-md-4">
            <div className="mb-3">
              <img src="/logo.jpg" alt="Logo" className="img-fluid" style={{ maxWidth: "150px" }} />
            </div>
            <p className="small">Turning ideas into reality — one pixel at a time.</p>
          </div>

          {/* Navigation */}
          <div className="col-md-4">
            <h5 className="text-warning fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white text-decoration-none d-block mb-1"> <RiArrowRightDoubleFill /> Home</Link></li>
              <li><Link href="/about" className="text-white text-decoration-none d-block mb-1"> <RiArrowRightDoubleFill /> About</Link></li>
              <li><Link href="/service" className="text-white text-decoration-none d-block mb-1"> <RiArrowRightDoubleFill /> Services</Link></li>
              <li><Link href="/contact" className="text-white text-decoration-none d-block"> <RiArrowRightDoubleFill /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-md-4">
            <h5 className="text-warning fw-semibold mb-3">Let’s Connect</h5>
            <p className="mb-1"><i className="fas fa-envelope me-2 text-warning"></i> </p>
            <p className="mb-3"><i className="fas fa-phone me-2 text-warning"></i> +91 9974832889</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5">
              <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Roshan Tech Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
