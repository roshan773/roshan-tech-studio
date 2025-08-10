import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Navbar Section */}
      <nav className="container-fluid bg-black text-white py-2" style={{ fontFamily: 'var(--font-oswald)' }}>
        <div className="container">
          <ul className="nav justify-content-center align-items-center flex-wrap gap-3 gap-lg-4">
            {/* Logo in center for smaller screens */}
            <li className="nav-item d-lg-none">
              <Link href="/">
                <img src="/logo.jpg" alt="Logo" className="img-fluid" style={{ width: "80px", height: "70px" }} />
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/" className="nav-link text-white fs-5">HOME</Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-white fs-5">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link href="/admin" className="nav-link text-white fs-5">ADMIN</Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link text-white fs-5">BLOG</Link>
            </li>

            {/* Center logo for large screens */}
            <li className="nav-item d-none d-lg-flex align-items-center">
              <Link href="/" className="nav-link p-0">
                <img src="/logo.jpg" alt="Logo" className="img-fluid" style={{ width: "100px", height: "100px" }} />
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/addItem" className="nav-link text-white fs-5">ADD</Link>
            </li>
            <li className="nav-item">
              <Link href="/service" className="nav-link text-white fs-5">SERVICE</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white fs-5">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link href="/login" className="btn btn-outline-light">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
