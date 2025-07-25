import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="container-fluid bg-black text-white fs-5" style={{ fontFamily: 'var(--font-oswald)' }}>
      <div className="container">
        <ul className="nav justify-content-center align-items-center gap-4">
          <li className="nav-item">
            {/* <a href="/" className="nav-link text-white fs-5">HOME</a> */}
            <Link href="/" className="nav-link text-white fs-5">HOME</Link>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/about" className="nav-link text-white fs-5">ABOUT</Link>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/admin" className="nav-link text-white fs-5">ADMIN</Link>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/blog" className="nav-link text-white fs-5">BLOG</Link>
          </li>
          <li className="nav-item d-flex align-items-center">
            <Link href="/" className="nav-link p-0">
              <img src="/logo.jpg" alt="Logo" className="img-fluid" style={{ width: "100px", height: "90px" }} />
            </Link>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/addItem" className="nav-link text-white fs-5">ADD</Link>
          </li>
          <li className="nav-item">
            <Link href="/service" className="nav-link text-white fs-5">SERVICE</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link text-white fs-5">CONTACT</Link>
          </li>
          <li className="nav-item">
            {/* <a href="/about" className="nav-link text-white fs-5">ABOUT</a> */}
            <Link href="/login" className='btn btn-outline-light fs-5'>
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
