import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/logo.png";

function Footer() {
  return (
    <footer className="bg-primary-color text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-between">
          <div className="footer-about">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={150} height={80} />
            </Link>
            <p className="text-white font-medium text-sm md:text-base mt-4">
              Touch is a bus booking platform that allows you to book your bus
              tickets online. We are a team of dedicated individuals who are
              committed to providing you with the best service possible.
            </p>
          </div>
          <div className="footer-link">
            <h4 className="font-bold text-3xl text-white text-nowrap">Quick Links</h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a
                  href="/"
                  className="text-white hover:text-black duration-500 transition-all font-medium text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-black duration-500 transition-all font-medium text-sm md:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white hover:text-black duration-500 transition-all font-medium text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4 className="font-bold text-3xl text-white">Contact Us</h4>
            <p className="text-white font-medium text-sm md:text-base mt-4">
              Email:
              <a href="mailto:info@touch.com" className="text-white">
                info@touch.com
              </a>
            </p>
            <p className="text-white font-medium text-sm md:text-base mt-2">
              Phone:
              <a href="tel:+123456789" className="text-white">
                +123456789
              </a>
            </p>
            <p className="text-white  duration-300 font-medium text-sm md:text-base mt-2">
              Address: 1234 Street Name, City Name, Country Name
            </p>
          </div>
          <div className="footer-information">
          <h4 className="font-bold text-3xl text-white text-nowrap">Information</h4>
          <ul className="mt-4 flex flex-col gap-4">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-white hover:text-black duration-500 transition-all font-medium text-sm md:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-conditions"
                  className="text-white hover:text-black duration-500 transition-all font-medium text-sm md:text-base"
                >
                  Terms & Conditions
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
